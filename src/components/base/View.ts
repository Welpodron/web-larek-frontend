import { isPlainObject } from '../../utils/utils';
import { IEvents } from './EventEmitter';

type ConstructionArgs<
	Element extends HTMLElement = HTMLElement,
	EventHandlers extends object = object
> = {
	element: Element;

	eventEmitter: IEvents;

	eventHandlers?: EventHandlers;
};

type ViewNested<RenderArgs extends object = object> = {
	view: View | HTMLElement;
	renderArgs?: RenderArgs;
};

abstract class View<
	Element extends HTMLElement = HTMLElement,
	RenderArgs extends object = object,
	EventHandlers extends object = object
> {
	protected readonly _element: Element;

	protected readonly _eventEmitter: IEvents;

	protected _eventHandlers: EventHandlers = {} as EventHandlers;

	constructor({
		element,
		eventEmitter,
		eventHandlers,
	}: ConstructionArgs<Element, EventHandlers>) {
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

export { View, ConstructionArgs as ViewConstructionArgs, ViewNested };
