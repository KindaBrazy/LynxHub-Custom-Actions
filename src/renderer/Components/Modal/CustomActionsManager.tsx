import {AnimatePresence, motion} from 'framer-motion';
import {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

import {CustomCard} from '../../../cross/CrossTypes';
import {reducerActions, useCustomActionsState} from '../../reducer';
import {CardIconById} from '../CardIcons';
import {AddToCategories} from './Elements/AddToCategories';
import {CardDetails} from './Elements/CardDetails';
import {ExecuteActions} from './Elements/ExecuteActions';
import FormSection from './Elements/FormSection';
import {NewCard} from './Elements/NewCard';
import {PreviewCard} from './Elements/PreviewCard';
import {UrlConfig} from './Elements/UrlConfig';

/* eslint max-len: 0 */

export default function CustomActionsManager() {
  const dispatch = useDispatch();

  const [useAutoCatch, setUseAutoCatch] = useState(false);
  const [customUrl, setCustomUrl] = useState('');
  const [openImmediately, setOpenImmediately] = useState(true);
  const [timeout, setTimeoutValue] = useState(5);

  const cards = useCustomActionsState('customCards');
  const view = useCustomActionsState('view');

  const modalRef = useRef<HTMLDivElement>(null);

  const handleCreateNew = () => {
    dispatch(reducerActions.setEditingCard(undefined));
    dispatch(reducerActions.setView('form'));
  };

  const handleEdit = (card: CustomCard) => {
    dispatch(reducerActions.setEditingCard(card));
    dispatch(reducerActions.setView('form'));
  };

  return (
    <div className="size-full flex items-center justify-center">
      <motion.div
        ref={modalRef}
        className="size-full flex"
        animate={{opacity: 1, scale: 1, y: 0}}
        exit={{opacity: 0, scale: 0.9, y: 20}}
        initial={{opacity: 0, scale: 0.9, y: 20}}
        transition={{duration: 0.3, ease: 'easeOut'}}>
        <div className="size-full p-2">
          <AnimatePresence mode="wait">
            {view === 'list' ? (
              <motion.div
                key="list-view"
                className="p-6"
                exit={{opacity: 0, x: 50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.3}}
                initial={{opacity: 0, x: -50}}>
                <div className="flex flex-row flex-wrap gap-4">
                  {cards.map(card => {
                    const TargetIcon = CardIconById(card.icon);
                    return (
                      <PreviewCard
                        card={card}
                        handleEdit={handleEdit}
                        key={`${card.id}_custom_action`}
                        icon={<TargetIcon className="size-full" />}
                      />
                    );
                  })}
                  <NewCard handleCreateNew={handleCreateNew} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form-view"
                className="h-full"
                exit={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.3}}
                initial={{opacity: 0, x: 50}}>
                <div className="space-y-8 pr-2 pb-4">
                  {/* --- FORM CONTENT --- */}
                  <FormSection title="URL Configuration">
                    <UrlConfig
                      timeout={timeout}
                      customUrl={customUrl}
                      setCustomUrl={setCustomUrl}
                      useAutoCatch={useAutoCatch}
                      setUseAutoCatch={setUseAutoCatch}
                      openImmediately={openImmediately}
                      setTimeoutValue={setTimeoutValue}
                      setOpenImmediately={setOpenImmediately}
                    />
                  </FormSection>

                  <FormSection title="Execute Actions">
                    <ExecuteActions />
                  </FormSection>

                  <FormSection title="Card Details">
                    <CardDetails />
                  </FormSection>

                  <FormSection title="Add To Categories">
                    <AddToCategories />
                  </FormSection>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
