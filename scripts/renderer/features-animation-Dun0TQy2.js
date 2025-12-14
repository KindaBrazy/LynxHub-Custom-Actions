import { bY as gestureAnimations, G as animations, H as createDomVisualElement } from './gestures-BBGq__hy.js';

/**
 * @public
 */
const domAnimation = {
    renderer: createDomVisualElement,
    ...animations,
    ...gestureAnimations,
};

export { domAnimation as d };
