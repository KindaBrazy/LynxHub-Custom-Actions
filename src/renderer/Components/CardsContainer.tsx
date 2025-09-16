import {compact} from 'lodash';
import {useMemo} from 'react';

import {CustomCard} from '../../cross/CrossTypes';
import {useCustomActionsState} from '../reducer';
import ActionCard from './ActionCard';
import {CardIconById} from './CardIcons';

type ContainerProps = {
  cards: CustomCard[];
};

function CardsContainer({cards}: ContainerProps) {
  const onActionPress = () => {};

  return (
    <div className="grid grid-cols-2 gap-2">
      {cards.map((card, index) => {
        const icon = CardIconById(card.icon);

        return (
          <ActionCard
            key={index}
            icon={icon}
            title={card.title}
            className="h-full"
            onClick={onActionPress}
            accentColor={card.accentColor}
            description={card.description || ''}
          />
        );
      })}
    </div>
  );
}

export function PinnedActions() {
  const customCards = useCustomActionsState('customCards');
  const pinnedCards = useMemo(
    () => compact(customCards.map(card => (card.categories.pinned ? card : null))),
    [customCards],
  );

  return <CardsContainer cards={pinnedCards} />;
}
export function RecentlyActions() {
  const customCards = useCustomActionsState('customCards');
  const pinnedCards = useMemo(
    () => compact(customCards.map(card => (card.categories.recentlyUsed ? card : null))),
    [customCards],
  );

  return <CardsContainer cards={pinnedCards} />;
}
export function AllActions() {
  const customCards = useCustomActionsState('customCards');
  const pinnedCards = useMemo(
    () => compact(customCards.map(card => (card.categories.all ? card : null))),
    [customCards],
  );

  return <CardsContainer cards={pinnedCards} />;
}
export function ImageActions() {
  const customCards = useCustomActionsState('customCards');
  const pinnedCards = useMemo(
    () => compact(customCards.map(card => (card.categories.image ? card : null))),
    [customCards],
  );

  return <CardsContainer cards={pinnedCards} />;
}
export function TextActions() {
  const customCards = useCustomActionsState('customCards');
  const pinnedCards = useMemo(
    () => compact(customCards.map(card => (card.categories.text ? card : null))),
    [customCards],
  );

  return <CardsContainer cards={pinnedCards} />;
}
export function AudioActions() {
  const customCards = useCustomActionsState('customCards');
  const pinnedCards = useMemo(
    () => compact(customCards.map(card => (card.categories.audio ? card : null))),
    [customCards],
  );

  return <CardsContainer cards={pinnedCards} />;
}
