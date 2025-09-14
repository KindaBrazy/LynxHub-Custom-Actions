import './index.css';

import {ExtensionRendererApi} from '../../../src/cross/plugin/ExtensionTypes_Renderer_Api';
import ModalManager from './Components/ModalManager';
import ToolsPage from './Components/ToolsPage';
import reducer from './reducer';

export function InitialExtensions(lynxAPI: ExtensionRendererApi, _extensionId: string) {
  lynxAPI.customizePages.tools.addComponent(ToolsPage);

  lynxAPI.addReducer([{name: 'extension', reducer}]);

  lynxAPI.addModal(ModalManager);
}
