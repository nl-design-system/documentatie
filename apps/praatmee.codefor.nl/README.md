# praatmee.codefor.nl

Lets visitors request an invitation to the Code for NL Slack workspace.

- **Form** at `/`: server-rendered, works without JavaScript. Rebuild of the
  original PHP page.
- **API** at `POST /api/invitations`: for other apps that have their own form
  and call it from the browser.

Both share the same validation, Slack logic and rate limit (5 requests per
15 minutes per IP, counted across form and API together).

## API

`POST /api/invitations` with `Content-Type: application/json`:

```json
{ "name": "Ali", "email": "ali@example.nl", "bot": "nee", "website": "" }
```

| Field     | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| `name`    | First name, 1–100 characters.                                          |
| `email`   | Email address, max 254 characters.                                     |
| `bot`     | Human check: must be `nee` (case-insensitive).                         |
| `website` | Honeypot: render as a hidden field and send it along; must stay empty. |

Responses (messages are Dutch, ready to show to the visitor):

| Status  | Body                                                                              |
| ------- | --------------------------------------------------------------------------------- |
| 200     | `{ "success": true, "message": "…" }`                                             |
| 400     | `{ "success": false, "message": "…", "errors": { "email": "Vul een geldig …" } }` |
| 403     | Origin not in `API_ALLOWED_ORIGINS`.                                              |
| 413     | Body larger than 10 KB.                                                           |
| 429     | More than 5 requests per 15 minutes from one IP (`Retry-After` header is set).    |
| 502/503 | Slack failed / is busy; ask the visitor to try again later.                       |

"Already a member" and "already invited" also return 200 on purpose, so the
API cannot be used to find out who is in the workspace.

### Accessibility in the calling app's form

An app that uses the API is responsible for presenting the results accessibly
(WCAG 2.2 AA), like the form on `/` does:

- Show `errors[field]` next to the matching input, connect it with
  `aria-describedby`, and set `aria-invalid="true"`.
- Show an error summary with links to the fields and move focus to it, or
  announce the result through a live region (`role="status"` / `role="alert"`).
- Keep the visitor's input after an error.
- Hide the honeypot with CSS plus `aria-hidden="true"` and `tabindex="-1"`.

## Environment variables

| Variable              | Required | Description                                                                                                                    |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `SLACK_TOKEN`         | yes      | Org-level token with `admin.users:write` (Enterprise Grid only).                                                               |
| `SLACK_TEAM_ID`       | yes      | Workspace ID to invite into.                                                                                                   |
| `SLACK_CHANNEL_IDS`   | yes      | Comma-separated channel IDs new members join.                                                                                  |
| `PUBLIC_ORIGIN`       | prod     | Production domain, e.g. `https://praatmee.codefor.nl`. Used for the form's CSRF check. Preview URLs are allowed automatically. |
| `API_ALLOWED_ORIGINS` | no       | Comma-separated origins of the other apps that call the API. Unset = every API call gets 403.                                  |
| `PORT`                | no       | Local development only. Defaults to `8787`.                                                                                    |

The app refuses to start when a required variable is missing.

## Develop

```sh
pnpm install
pnpm --filter @nl-design-system/praatmee.codefor.nl dev   # reads .env if present
```

This runs `src/local.ts`, a small Node server around the app. Alternatively,
`vc dev` runs it the same way as on Vercel.

## Deploy to Vercel

Vercel detects Hono automatically and runs the default export of
`src/index.ts` as a Vercel Function. No `vercel.json` is needed.

1. Set the **Root Directory** of the Vercel project to `apps/praatmee.codefor.nl`.
2. Add the environment variables above under **Settings → Environment
   Variables**. Set `PUBLIC_ORIGIN` for the Production environment. A `.env`
   file is not used on Vercel.
3. Add a rate-limit rule under **Firewall → Configure → New Rule** (available
   on all plans; Hobby allows one rule):
   - **If** Request Path is `/` or `/api/invitations`, **and** Method is `POST`
   - **Then** Rate Limit: Fixed Window, **10 minutes**, **5 requests**, key **IP**
   - Action: Too Many Requests (429)

   This is the real rate limit on Vercel. The limiter in the code
   (`hono-rate-limiter`) keeps its counts in memory per function instance, and
   Vercel runs several instances, so on its own it is not reliable there.
