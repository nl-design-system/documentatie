import { useEffect, useState, type ButtonHTMLAttributes } from 'react';
import { Button } from '../button/button.tsx';
import { IconCopy } from '../functional-icon/index.tsx';
import { Icon } from '../icon/icon.tsx';

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
