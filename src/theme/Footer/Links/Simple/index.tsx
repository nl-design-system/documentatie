import LinkItem from '@theme/Footer/LinkItem';
import type { Props } from '@theme/Footer/Links/Simple';
import type { ReactElement } from 'react';
import { Fragment } from 'react';

function Separator() {
  return <span className="footer__link-separator">·</span>;
}

function SimpleLinkItem({ item }: { item: Props['links'][number] }) {
  return item.html ? (
    <span
      className="footer__link-item"
      // Developer provided the HTML, so assume it's safe.

      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <LinkItem item={item} />
  );
}

export default function FooterLinksSimple({ links }: Props): ReactElement {
  return (
    <div className="footer__links text--center">
      <div className="footer__links">
        {links.map((item, i) => (
          <Fragment key={i}>
            <SimpleLinkItem item={item} />
            {links.length !== i + 1 && <Separator />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
