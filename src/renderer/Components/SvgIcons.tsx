/* eslint max-len: 0 */

import {ReactElement} from 'react';

import {SvgProps} from '../../../../src/renderer/src/assets/icons/SvgIconsContainer';

export function ArrowAltDuo_Icon(props: SvgProps): ReactElement {
  return (
    <svg {...props} width="1rem" height="1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z"></path>
      <path opacity={0.5} fill="currentColor" d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z"></path>
    </svg>
  );
}
