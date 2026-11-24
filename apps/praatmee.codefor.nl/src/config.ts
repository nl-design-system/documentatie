const required = (name: string): string => {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const list = (name: string): string[] => {
  return (process.env[name] ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
};

// Full origin like https://example.nl; also drops a trailing slash.
const toOrigin = (name: string, value: string): string => {
  if (!/^https?:\/\//.test(value)) {
    throw new Error(`${name} must start with https:// (e.g. https://example.nl), got "${value}"`);
  }
  return new URL(value).origin;
};

const onVercel = process.env['VERCEL'] === '1';
const localOrigin = `http://localhost:${process.env['PORT'] ?? 8787}`;

export const config = {
  // Other apps allowed to call the API.
  allowedOrigins: list('API_ALLOWED_ORIGINS').map((value) => toOrigin('API_ALLOWED_ORIGINS', value)),

  // Origins allowed to post the form (CSRF). VERCEL_* covers preview deployments.
  formOrigins: [
    process.env['PUBLIC_ORIGIN']?.trim() && toOrigin('PUBLIC_ORIGIN', process.env['PUBLIC_ORIGIN'].trim()),
    process.env['VERCEL_URL'] && `https://${process.env['VERCEL_URL']}`,
    process.env['VERCEL_BRANCH_URL'] && `https://${process.env['VERCEL_BRANCH_URL']}`,
    onVercel ? undefined : localOrigin,
  ].filter((origin): origin is string => Boolean(origin)),

  slack: {
    channelIds: list('SLACK_CHANNEL_IDS'),
    teamId: required('SLACK_TEAM_ID'),
    token: required('SLACK_TOKEN'),
  },
} as const;

if (config.slack.channelIds.length === 0) {
  throw new Error('Missing required environment variable: SLACK_CHANNEL_IDS (comma-separated)');
}
