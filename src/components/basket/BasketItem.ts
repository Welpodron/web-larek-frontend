import {
	TBasketItemRenderArgs,
	TBasketItemEventHandlers,
	TViewConstructionArgs,
} from '../../types';

import { View } from '../base/View';

class BasketItem extends View<
	HTMLElement,
	TBasketItemRenderArgs,
	TBasketItemEventHandlers
> {
	protected _titleElement: HTMLElement;
	protected _indexElement: HTMLElement;
	protected _priceElement: HTMLElement;
	protected _buttonElement: HTMLButtonElement;

	constructor(
		args: TViewConstructionArgs<HTMLElement, TBasketItemEventHandlers>
	) {
		super(args);
	}

	protected _handleClick(event: MouseEvent) {}

	set price(value: string) {}

	set title(value: string) {}

	set index(value: number) {}
}

export { BasketItem as BasketItemView };
