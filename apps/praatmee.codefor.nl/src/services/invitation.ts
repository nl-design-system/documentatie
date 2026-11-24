import type { Invitation } from '../validators/invitation.js';
import { inviteToSlack, SlackInvitationError } from './slack.js';

export type InvitationOutcome = 'sent' | 'retry-later' | 'failed';

// "Already member/invited" also returns 'sent', so nobody can check who is a member.
export const requestInvitation = async (invitation: Invitation): Promise<InvitationOutcome> => {
  // Honeypot filled in: pretend success so bots learn nothing.
  if (invitation.website) {
    return 'sent';
  }

  try {
    await inviteToSlack(invitation.name, invitation.email);
    return 'sent';
  } catch (error) {
    const code = error instanceof SlackInvitationError ? error.code : 'unexpected_error';

    switch (code) {
      case 'already_in_team':
      case 'already_invited':
      case 'already_in_team_invited_user':
        return 'sent';
      case 'ratelimited':
        console.warn('Slack invitation rate limited');
        return 'retry-later';
      default:
        // Log the code only, no personal data.
        console.error(`Slack invitation failed: ${code}`);
        return 'failed';
    }
  }
};
