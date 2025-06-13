import prettierPluginBabel from 'prettier/plugins/babel';
import prettierPluginEstree from 'prettier/plugins/estree';
import prettierPluginPostCSS from 'prettier/plugins/postcss';
import prettier from 'prettier/standalone';
import type { ButtonHTMLAttributes } from 'react';
import { IconCopy } from '@tabler/icons-react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import { Icon } from '@utrecht/component-library-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  language: 'json' | 'css';
  content: string;
}

export function CopyButton({ children, content, language }: Props) {
  async function onClick() {
    try {
      const formatted = await prettier.format(content, {
        parser: language,
        plugins: [prettierPluginBabel, prettierPluginEstree, prettierPluginPostCSS],
      });
      await navigator.clipboard.writeText(formatted);
    } catch (e) {
      console.error(e);
    }
  }

  if (!('clipboard' in navigator)) return null;

  return (
    <Button type="button" appearance="secondary-action-button" onClick={onClick}>
      {children}
      <Icon>
        <IconCopy />
      </Icon>
    </Button>
  );
}
