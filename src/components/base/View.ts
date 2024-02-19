import { IEvents, IView, TViewConstructionArgs } from '../../types';

import { isPlainObject } from '../../utils/utils';

abstract class View<
	Element extends HTMLElement = HTMLElement,
	RenderArgs extends object = object,
	EventHandlers extends object = object
> implements IView
{
	protected readonly _element: Element;

	protected readonly _eventEmitter: IEvents;

	protected _eventHandlers: EventHandlers = {} as EventHandlers;

	constructor({
		element,
		eventEmitter,
		eventHandlers,
	}: TViewConstructionArgs<Element, EventHandlers>) {
		this._element = element;
		this._eventEmitter = eventEmitter;

		if (eventHandlers && isPlainObject(eventHandlers)) {
			this._eventHandlers = eventHandlers as EventHandlers;
		}
	}

	render(args?: Partial<RenderArgs>) {
		Object.assign(this, args ?? {});

		return this._element;
	}
}

export { View };
