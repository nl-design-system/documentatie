# Alert component

## Usage

Use an Alert to provide a message to the user about their current activity.

- Use a positive alert when their current activity has been succesful, and let the user know if anything else is expected.
- Use a negative alert when their current activity was not succesful, and the user might need to take additional actions to complete the activity.
- Use a warning alert to inform the user about something, to influence their current activity or to influence the priority of their actions.
- Use an info alert, when something is relevant to their activity, but informing the user is optional.

## Variants

The Alert component has the following variants:

- Positive: urgent by default.
- Negative: urgent by default.
- Warning: urgent by default.
- Info: not urgent by default.

There is no "default" alert, you must choose one of the specified variants.

## HTML and CSS

When you develop an Alert component with HTML and CSS, use the following requirements:

- Use the HTML element `div` as container.
- The text message of the alert must be placed inside a `div`
- The text message of the alert must be announced by asstive technologies.
- Add `role="alert"` or `role="status"` to the text message container, depending on the urgency of the message.
- Optionally, there can be a `div` at the end of the Alert where Buttons an Links can be placed.

## Visual design

- Positive: typically has a green hue.
- Negative: typically has a red hue.
- Warning: typically has an amber hue.
- Info: typically has a blue hue.

In forced colors mode, the Alert must have a thick border.
