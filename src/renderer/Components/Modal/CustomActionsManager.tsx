import {AnimatePresence, motion} from 'framer-motion';
import type {CSSProperties, FC, ReactNode} from 'react';
import {useRef, useState} from 'react';

import {CustomCard} from '../../../cross/CrossTypes';
import {AddToCategories} from './Elements/AddToCategories';
import {CardDetails} from './Elements/CardDetails';
import {ExecuteActions} from './Elements/ExecuteActions';
import {NewCard} from './Elements/NewCard';
import {PreviewCard} from './Elements/PreviewCard';
import {UrlConfig} from './Elements/UrlConfig';

/* eslint max-len: 0 */

// --- SVG ICONS ---
// Using simple SVG components for icons to keep it self-contained
export const TempActionsIcons: FC<{name: string; className?: string}> = ({name, className}) => {
  const icons: {[key: string]: ReactNode} = {
    Image: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    ),
    Play: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    ),
    Folder: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9.75h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5-13.5h16.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V7.5a1.5 1.5 0 011.5-1.5z"
      />
    ),
    Code: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    ),
    Plus: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />,
    ChevronLeft: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />,
    File: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    ),
    Terminal: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3" />,
    Settings: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-1.007 1.11-1.226.554-.22 1.197-.22 1.752 0 .549.219 1.02.684 1.11 1.226M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
      />
    ),
    Eye: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
    ),
    EyeSlash: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l6.032 6.032"
      />
    ),
    GripVertical: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5.25h.008v.008H9V5.25zm0 3h.008v.008H9V8.25zm0 3h.008v.008H9v-.008zm0 3h.008v.008H9v-.008zm0 3h.008v.008H9v-.008zm6-12h.008v.008H15V5.25zm0 3h.008v.008H15V8.25zm0 3h.008v.008H15v-.008zm0 3h.008v.008H15v-.008zm0 3h.008v.008H15v-.008z"
      />
    ),
    Trash: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    ),
  };
  return (
    <svg
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className || 'w-6 h-6'}>
      {icons[name] || <circle r="10" cx="12" cy="12" />}
    </svg>
  );
};

// --- HELPER COMPONENTS ---

const FormSection: FC<{title: string; children: ReactNode}> = ({title, children}) => (
  <div className="space-y-4">
    <h3 className="text-sm font-medium text-foreground-400">{title}</h3>
    <div className="space-y-4 rounded-lg  bg-gray-50 dark:bg-LynxRaisinBlack p-4">{children}</div>
  </div>
);

type Props = {
  view: 'list' | 'form';
  setView: (view: 'list' | 'form') => void;
  setEditingCard: (card: CustomCard | null) => void;
  cards: CustomCard[];
};

export default function CustomActionsManager({view, setView, setEditingCard, cards}: Props) {
  // Form state
  const [useAutoCatch, setUseAutoCatch] = useState(false);
  const [customUrl, setCustomUrl] = useState('');
  const [openImmediately, setOpenImmediately] = useState(true);
  const [timeout, setTimeoutValue] = useState(5);
  const [accentColor, setAccentColor] = useState('#3b82f6');

  const modalRef = useRef<HTMLDivElement>(null);

  const handleCreateNew = () => {
    setEditingCard(null);
    setView('form');
  };

  const handleEdit = (card: CustomCard) => {
    setEditingCard(card);
    // Populate form with card data here...
    setAccentColor(card.accentColor);
    setView('form');
  };

  return (
    <div className="size-full flex items-center justify-center">
      <motion.div
        ref={modalRef}
        className="size-full flex"
        animate={{opacity: 1, scale: 1, y: 0}}
        exit={{opacity: 0, scale: 0.9, y: 20}}
        initial={{opacity: 0, scale: 0.9, y: 20}}
        transition={{duration: 0.3, ease: 'easeOut'}}
        style={{'--accent-color': accentColor} as CSSProperties}>
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
                  {cards.map(card => (
                    <PreviewCard
                      card={card}
                      handleEdit={handleEdit}
                      key={`${card.id}_custom_action`}
                      icon={<TempActionsIcons name={card.icon || 'Settings'} className="h-6 w-6 text-white" />}
                    />
                  ))}
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
                    <CardDetails accentColor={accentColor} setAccentColor={setAccentColor} />
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
