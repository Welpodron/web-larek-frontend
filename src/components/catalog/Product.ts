import {
	TProductEventHandlers,
	TProductRenderArgs,
	TViewConstructionArgs,
} from '../../types';

import { View } from '../base/View';

class Product<
	Element extends HTMLElement = HTMLElement,
	RenderArgs extends object = TProductRenderArgs,
	EventHandlers extends object = TProductEventHandlers
> extends View<
	Element,
	RenderArgs & TProductRenderArgs,
	EventHandlers & TProductEventHandlers
> {
	protected _titleElement: HTMLElement;
	protected _categoryElement: HTMLElement;
	protected _priceElement: HTMLElement;
	protected _imageElement: HTMLImageElement;

	constructor(args: TViewConstructionArgs<Element, EventHandlers>) {
		super(args);
	}

	set category(value: string) {}

	set price(value: string) {}

	set title(value: string) {}

	set image(value: string) {}

	protected _handleClick(event: MouseEvent) {}
}

export { Product as ProductView };
