import {Card, Image, Tooltip} from '@heroui/react';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {useAppState} from '../../../../src/renderer/src/App/Redux/Reducer/AppReducer';
import {useTabsState} from '../../../../src/renderer/src/App/Redux/Reducer/TabsReducer';
import icon from '../icon.png';
import {reducerActions} from '../reducer';
import SpotlightCard from './SpotlightCard';

const title: string = 'Custom Actions';
const description: string = 'Create, customize and manage custom cards with custom scripts, actions.';

export default function ToolsPage() {
  const isDarkMode = useAppState('darkMode');

  const activeTab = useTabsState('activeTab');
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    console.log('ressed');
    dispatch(reducerActions.openModal({tabID: activeTab}));
  }, [activeTab]);

  return (
    <>
      <Card
        className={
          'size-[270px] relative group transform border border-foreground/5 ' +
          'transition-all duration-500 hover:-translate-y-[2px] shadow-small hover:shadow-medium ' +
          'bg-white dark:bg-stone-900 pt-3 pb-2 rounded-3xl hover:border-foreground/15'
        }
        onPress={openModal}
        isPressable>
        <SpotlightCard className="size-full" spotlightColor={isDarkMode ? '#353535' : '#dadada'}>
          <div
            className={
              'absolute top-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-linear-to-r from-transparent' +
              ' via-LynxOrange to-transparent rounded-t-full opacity-0 group-hover:opacity-100 transition-all' +
              ' duration-700 w-0 group-hover:w-[90%]'
            }
          />

          {/* Content container */}
          <div className="relative h-full flex flex-col justify-between p-6">
            {/* Icon section */}
            <div className="flex justify-center">
              <Image src={icon} radius="none" className="size-[5.3rem]" />
            </div>

            {/* Title and Description */}
            <div className="text-center space-y-5">
              <h3 className="text-2xl font-bold tracking-tight text-center">{title}</h3>
              <Tooltip delay={700} content={description} className="max-w-[350px]" showArrow>
                <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">{description}</p>
              </Tooltip>
            </div>
          </div>
        </SpotlightCard>

        <div
          className={
            'absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-[2px] bg-linear-to-r from-secondary/0' +
            ' via-secondary to-secondary/0 rounded-t-full group-active:via-foreground transition-colors duration-100'
          }
        />
      </Card>
    </>
  );
}
