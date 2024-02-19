import {
	TFormEventHandlers,
	TOrderShipmentRenderArgs,
	TViewConstructionArgs,
} from '../../types';

import { FormView } from '../global/Form';

class OrderShipment extends FormView<
	HTMLFormElement,
	TOrderShipmentRenderArgs
> {
	protected _buttonsElement: HTMLElement;
	protected _buttonsElements: NodeListOf<HTMLButtonElement>;
	protected _inputElement: HTMLInputElement;

	constructor(
		args: TViewConstructionArgs<HTMLFormElement, TFormEventHandlers>
	) {
		super(args);
	}

	set address(value: string) {}

	set payment(value: string) {}

	protected _handleClick(event: MouseEvent) {}
}

export { OrderShipment as OrderShipmentView };
