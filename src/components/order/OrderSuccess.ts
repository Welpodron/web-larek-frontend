import {
	TOrderSuccessRenderArgs,
	TOrderSuccessEventHandlers,
	TViewConstructionArgs,
} from '../../types';

import { View } from '../base/View';

class OrderSuccess extends View<
	HTMLElement,
	TOrderSuccessRenderArgs,
	TOrderSuccessEventHandlers
> {
	protected _descriptionElement: HTMLElement;
	protected _buttonElement: HTMLButtonElement;

	constructor(
		args: TViewConstructionArgs<HTMLElement, TOrderSuccessEventHandlers>
	) {
		super(args);
	}

	protected _handleClick(event: MouseEvent) {}

	set description(value: string) {}
}

export { OrderSuccess as OrderSuccessView };
