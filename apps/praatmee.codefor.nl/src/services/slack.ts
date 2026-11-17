import { WebClient } from '@slack/web-api';
import { config } from '../config.js';

// admin.users.invite needs Enterprise Grid and an org-level token with admin.users:write.
const slack = new WebClient(config.slack.token, {
  // Fail fast instead of keeping the visitor waiting.
  rejectRateLimitedCalls: true,
  retryConfig: { retries: 1 },
  timeout: 10_000,
});

export class SlackInvitationError extends Error {
  constructor(public code: string) {
    super(code);
    this.name = 'SlackInvitationError';
  }
}

export const inviteToSlack = async (name: string, email: string) => {
  try {
    await slack.admin.users.invite({
      channel_ids: config.slack.channelIds as [string, ...string[]],
      real_name: name,
      team_id: config.slack.teamId,
      custom_message: 'Welkom bij Code for NL!',
      email,
    });
  } catch (error) {
    const slackError = error as { code?: string; data?: { error?: string } };

    // Thrown on HTTP 429 because rejectRateLimitedCalls is on.
    if (slackError.code === 'slack_webapi_rate_limited_error') {
      throw new SlackInvitationError('ratelimited');
    }

    throw new SlackInvitationError(slackError.data?.error ?? 'unknown_error');
  }
};
