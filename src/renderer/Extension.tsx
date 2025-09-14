import './index.css';

import {ExtensionRendererApi} from '../../../src/cross/plugin/ExtensionTypes_Renderer_Api';
import ToolsPage from './Components/ToolsPage';

export function InitialExtensions(lynxAPI: ExtensionRendererApi, _extensionId: string) {
  lynxAPI.customizePages.tools.addComponent(ToolsPage);
}
