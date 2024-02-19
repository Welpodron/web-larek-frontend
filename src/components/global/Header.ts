import {
	THeaderRenderArgs,
	THeaderEventHandlers,
	TViewConstructionArgs,
} from '../../types';

import { View } from '../base/View';

class Header extends View<
	HTMLElement,
	THeaderRenderArgs,
	THeaderEventHandlers
> {
	protected _counterElement: HTMLSpanElement;
	protected _buttonElement: HTMLButtonElement;

	constructor(args: TViewConstructionArgs<HTMLElement, THeaderEventHandlers>) {
		super(args);
	}

	protected _handleClick(event: MouseEvent) {}

	set counter(value: number) {}
}

export { Header as HeaderView };
