import {
	TBasketRenderArgs,
	TBasketEventHandlers,
	TViewConstructionArgs,
	TViewNested,
} from '../../types';

import { View } from '../base/View';

class Basket extends View<
	HTMLElement,
	TBasketRenderArgs<object>,
	TBasketEventHandlers
> {
	protected _itemsElement: HTMLElement;
	protected _priceElement: HTMLElement;
	protected _buttonElement: HTMLButtonElement;

	constructor(args: TViewConstructionArgs<HTMLElement, TBasketEventHandlers>) {
		super(args);
	}

	protected _handleClick(event: MouseEvent) {}

	set price(value: string) {}

	set isDisabled(value: boolean) {}

	set items(value: TViewNested[]) {}

	render<RenderArgs extends object = object>(
		args: TBasketRenderArgs<RenderArgs>
	) {
		super.render(args);

		return this._element;
	}
}

export { Basket as BasketView };
