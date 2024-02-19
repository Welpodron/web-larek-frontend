import {
	TFormEventHandlers,
	TOrderContactsRenderArgs,
	TViewConstructionArgs,
} from '../../types';

import { FormView } from '../global/Form';

class OrderContacts extends FormView<
	HTMLFormElement,
	TOrderContactsRenderArgs
> {
	protected _inputEmailElement: HTMLInputElement;
	protected _inputPhoneElement: HTMLInputElement;

	constructor(
		args: TViewConstructionArgs<HTMLFormElement, TFormEventHandlers>
	) {
		super(args);
	}

	set email(value: string) {}

	set phone(value: string) {}
}

export { OrderContacts as OrderContactsView };
