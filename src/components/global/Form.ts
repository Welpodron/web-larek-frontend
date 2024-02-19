import {
	TFormRenderArgs,
	TFormEventHandlers,
	TViewConstructionArgs,
} from '../../types';

import { View } from '../base/View';

class Form<
	Element extends HTMLElement = HTMLFormElement,
	RenderArgs extends object = TFormRenderArgs,
	EventHandlers extends object = TFormEventHandlers
> extends View<
	Element,
	RenderArgs & TFormRenderArgs,
	EventHandlers & TFormEventHandlers
> {
	protected _submitButtonElement: HTMLButtonElement;
	protected _errorsElement: HTMLElement;

	constructor(args: TViewConstructionArgs<Element, EventHandlers>) {
		super(args);
	}

	set isDisabled(value: boolean) {}

	set errors(value: string) {}

	protected _handleInput(event: InputEvent) {}

	protected _handleSubmit(event: SubmitEvent) {}
}

export { Form as FormView };
