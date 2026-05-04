import './index.css';

import {ExtensionRendererApi} from '@lynx/plugins/extensions/types/api';

import {
  AllActions,
  AudioActions,
  ImageActions,
  PinnedActions,
  RecentlyActions,
  TextActions,
} from './Components/CardsContainer';
import {CustomHook} from './Components/CustomHooks';
import ModalManager from './Components/Modal/ModalManager';
import ToolsPage from './Components/ToolsPage';
import reducer from './reducer';

export function InitialExtensions(lynxAPI: ExtensionRendererApi) {
  lynxAPI.addReducer([{name: 'customActions', reducer}]);

  lynxAPI.customizePages.tools.add.cardsContainer(ToolsPage);

  lynxAPI.customizePages.home.add.pinCategory(PinnedActions);
  lynxAPI.customizePages.home.add.recentlyCategory(RecentlyActions);
  lynxAPI.customizePages.home.add.allCategory(AllActions);
  lynxAPI.customizePages.image.add.cardsContainer(ImageActions);
  lynxAPI.customizePages.text.add.cardsContainer(TextActions);
  lynxAPI.customizePages.audio.add.cardsContainer(AudioActions);

  lynxAPI.addCustomHook(CustomHook);

  lynxAPI.addModal(ModalManager);
}
