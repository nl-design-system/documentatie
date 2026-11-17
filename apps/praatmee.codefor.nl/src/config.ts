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

const onVercel = process.env['VERCEL'] === '1';
const localOrigin = `http://localhost:${process.env['PORT'] ?? 8787}`;

export const config = {
  // Origins allowed to post the form (CSRF). VERCEL_* covers preview deployments.
  formOrigins: [
    process.env['PUBLIC_ORIGIN']?.trim(),
    process.env['VERCEL_URL'] && `https://${process.env['VERCEL_URL']}`,
    process.env['VERCEL_BRANCH_URL'] && `https://${process.env['VERCEL_BRANCH_URL']}`,
    onVercel ? undefined : localOrigin,
  ].filter((origin): origin is string => Boolean(origin)),

  // Other apps allowed to call the API. Normalised so a trailing slash still matches.
  allowedOrigins: list('API_ALLOWED_ORIGINS').map((value) => new URL(value).origin),

  slack: {
    token: required('SLACK_TOKEN'),
    teamId: required('SLACK_TEAM_ID'),
    channelIds: list('SLACK_CHANNEL_IDS'),
  },
} as const;

if (config.slack.channelIds.length === 0) {
  throw new Error('Missing required environment variable: SLACK_CHANNEL_IDS (comma-separated)');
}
