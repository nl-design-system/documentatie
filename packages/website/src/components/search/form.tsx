import { Button } from '@components/button/button';
import { Textbox } from '@utrecht/component-library-react';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useState, type ChangeEvent, type FormEvent, type FormEventHandler } from 'react';
import '@utrecht/textbox-css/dist/index.css';
import './form.css';

export interface SearchFormProps {
  value?: string | null;
  onChange?: (_value: string | undefined | null) => void;
  autoFocus?: boolean;
}

export function SearchForm(props: SearchFormProps) {
  const [value, setValue] = useState<string | undefined | null>('');

  useEffect(() => setValue(props.value), [props.value]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props?.onChange?.(value);
  };

  return (
    <search className="ma-search-form">
      <form className="ma-search-form__form" action="/zoeken" onSubmit={handleSubmit}>
        <Textbox
          name="query"
          required
          autoFocus={props.autoFocus}
          value={value || ''}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        />
        <Button type="submit" purpose="secondary" iconStart={<IconSearch />}>
          Zoeken
        </Button>
      </form>
    </search>
  );
}
