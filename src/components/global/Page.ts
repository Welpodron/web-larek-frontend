import { TPageRenderArgs } from '../../types';

import { View } from '../base/View';

class Page extends View<HTMLElement, TPageRenderArgs> {
	protected _wrapperElement: HTMLElement;

	set isLocked(value: boolean) {}
}

export { Page as PageView };
