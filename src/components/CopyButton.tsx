import type { ButtonHTMLAttributes } from 'react';
import { IconCopy } from '@tabler/icons-react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import { Icon } from '@utrecht/component-library-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

export function CopyButton({ children, content }: Props) {
  async function onClick() {
    try {
      await navigator.clipboard.writeText(content);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Button type="button" appearance="secondary-action-button" onClick={onClick}>
      {children}
      <Icon>
        <IconCopy />
      </Icon>
    </Button>
  );
}
