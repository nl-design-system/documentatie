import { useEffect, useState, type ButtonHTMLAttributes } from 'react';
import { IconCopy } from '../functional-icon';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

export function CopyButton({ children, content }: Props) {
  const [canCopy, setCanCopy] = useState(false);

  async function onClick() {
    try {
      await navigator.clipboard.writeText(content);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (!('clipboard' in navigator)) return;
    setCanCopy(true);
  }, []);

  return (
    <>
      {canCopy && (
        <Button type="button" purpose="secondary" onClick={onClick}>
          {children}
          <Icon>
            <IconCopy />
          </Icon>
        </Button>
      )}
    </>
  );
}
