import {
	TProductEventHandlers,
	TProductPreviewRenderArgs,
	TViewConstructionArgs,
} from '../../types';

import { ProductView } from './Product';

class ProductPreview extends ProductView<
	HTMLElement,
	TProductPreviewRenderArgs
> {
	protected _descriptionElement: HTMLElement;
	protected _buttonElement: HTMLButtonElement;

	constructor(args: TViewConstructionArgs<HTMLElement, TProductEventHandlers>) {
		super(args);
	}

	protected _handleClick(event: MouseEvent) {}

	set description(value: string) {}

	set buttonText(value: string) {}

	set isDisabled(value: boolean) {}
}

export { ProductPreview as ProductPreviewView };
