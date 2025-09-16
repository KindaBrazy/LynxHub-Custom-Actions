import {compact} from 'lodash';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';

import {cardsActions} from '../../../../src/renderer/src/App/Redux/Reducer/CardsReducer';
import {useTabsState} from '../../../../src/renderer/src/App/Redux/Reducer/TabsReducer';
import {CustomCard} from '../../cross/CrossTypes';
import {extRendererIpc} from '../Extension';
import {useCustomActionsState} from '../reducer';
import ActionCard from './ActionCard';
import {CardIconById} from './CardIcons';

type ContainerProps = {
  cards: CustomCard[];
};

function CardsContainer({cards}: ContainerProps) {
  const dispatch = useDispatch();

  const activeTab = useTabsState('activeTab');

  const onActionPress = (card: CustomCard) => {
    const opens = card.actions.filter(action => action.type === 'open');
    opens.forEach(open => extRendererIpc.file.openPath(open.action));

    const executes = card.actions.filter(action => action.type === 'execute' || action.type === 'command');
    executes.forEach(action => {
      if (action.type === 'execute') {
        // TODO: spawn process
      } else {
        extRendererIpc.pty.customCommands(card.id, 'start', action.action);
      }
      dispatch(cardsActions.addRunningCard({tabId: activeTab, id: card.id}));
    });
  };

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
            accentColor={card.accentColor}
            onClick={() => onActionPress(card)}
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
