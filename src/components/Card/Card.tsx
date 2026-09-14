import { Card as AmsterdamCard, type CardProps } from '@amsterdam/design-system-react';
import '@amsterdam/design-system-css/dist/card/card.css';
import './Card.css';

const MaCard = (props: CardProps) => <AmsterdamCard className="ams-card--ma-style" {...props} />;

MaCard.displayName = 'Card';

export const Card = Object.assign(MaCard, { ...AmsterdamCard });
