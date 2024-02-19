import {
	TViewNested,
	TViewConstructionArgs,
	TModalRenderArgs,
} from '../../types';

import { View } from '../base/View';

class Modal extends View {
	protected _content: TViewNested;

	protected _closeButtonElement: HTMLButtonElement;
	protected _contentElement: HTMLElement;

	protected _handleDocumentKeydown(event: KeyboardEvent) {}

	open() {}

	close() {}

	set content(value: TViewNested) {}

	render<RenderArgs extends object = object>(
		args: TModalRenderArgs<RenderArgs>
	) {
		super.render(args);

		this.open();

		return this._element;
	}
}

export { Modal as ModalView };
