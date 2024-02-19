// Интерфейсы и типы для бизнес-логики

// Тип связанный с товарами

export interface IProduct {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number | null;
}

// Типы для работы с заказом

export type TOrderInvoice = Omit<IOrder, 'items'> & {
	items: string[];
	total: number;
};

export type TOrderPayment = 'cash' | 'card';

export type TOrderStep = 'shipment' | 'contacts';

export interface IOrder {
	items: IProduct[];
	payment: TOrderPayment;
	address: string;
	email: string;
	phone: string;
}

export interface IOrderResult {
	id: string;
	total: number;
}

// Интерфейсы и типы для приложения (компонентов, моделей и тд)

// Типы для моделей

// Тип для модели состояния приложения

export interface IAppState {
	preview: IProduct;
	basket: Set<IProduct>;
	products: IProduct[];
	order: IOrder;
}

// Типы для событийно-ориентированной модели

export type TEventName = string | RegExp;

export type TSubscriber = Function;

export type TEmitterEvent = {
	eventName: string;
	data: unknown;
};

export interface IEvents {
	on<T extends object>(event: TEventName, callback: (data: T) => void): void;
	emit<T extends object>(event: string, data?: T): void;
	trigger<T extends object>(
		event: string,
		context?: Partial<T>
	): (data: T) => void;
}

// Типы для API

export type TApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export type TApiListResponse<T> = {
	total: number;
	items: T[];
};

export interface IShopAPI {
	getProducts: () => Promise<IProduct[]>;
	getProduct: (id: string) => Promise<IProduct>;
	createOrder: (invoice: TOrderInvoice) => Promise<IOrderResult>;
}

// Типы для View

//! Ts не поддерживает установку модификаторов доступа в интерфейсе в связи с чем данный интерфейс пустой
export interface IView {}

export type TViewConstructionArgs<
	Element extends HTMLElement = HTMLElement,
	EventHandlers extends object = object
> = {
	element: Element;
	eventEmitter: IEvents;
	eventHandlers?: EventHandlers;
};

export type TViewNested<RenderArgs extends object = object> = {
	view: IView | HTMLElement;
	renderArgs?: RenderArgs;
};

// Типы для глобальных компонентов

// Компонент страницы

export type TPageRenderArgs = {
	isLocked: boolean;
};

// Компонент хедера

export type THeaderRenderArgs = {
	counter: number;
};

export type THeaderEventHandlers = {
	onClick?: (args: { _event: MouseEvent }) => void;
};

// Компонент модального окна

export type TModalRenderArgs<T extends object> = {
	content: TViewNested<T>;
};

// Компонент форм

export type TFormRenderArgs = {
	isDisabled: boolean;
	errors: string[];
};

export type TFormEventHandlers = {
	onSubmit?: (args: { _event: SubmitEvent }) => void;
	onInput?: (args: {
		_event: InputEvent;
		field: string;
		value: unknown;
	}) => void;
};

// Типы для отображения продуктов

// Список продуктов

export type TProductsRenderArgs<T extends object> = {
	items: TViewNested<T>[];
};

// Компонент продукта

export type TProductRenderArgs = Pick<
	IProduct,
	'image' | 'title' | 'category'
> & {
	price: string;
};

export type TProductEventHandlers = {
	onClick?: (args: { _event: MouseEvent }) => void;
};

// Детальный просмотр продукта

export type TProductPreviewRenderArgs = {
	description: string;
	buttonText: string;
	isDisabled: boolean;
} & TProductRenderArgs;

// Корзина

export type TBasketRenderArgs<ItemsRenderArgs extends object> = {
	items: TViewNested<ItemsRenderArgs>[];
	price: string;
	isDisabled: boolean;
};

export type TBasketEventHandlers = {
	onClick?: (args: { _event: MouseEvent }) => void;
};

// Позиция корзины

export type TBasketItemRenderArgs = {
	index: number;
	title: string;
	price: string;
};

export type TBasketItemEventHandlers = {
	onClick?: (args: { _event: MouseEvent }) => void;
};

// Заказ

// Формы заполнения оплаты и адреса

export type TOrderShipmentRenderArgs = {
	payment: string;
	address: string;
} & TFormRenderArgs;

// Форма заполнения контактных данных

export type TOrderContactsRenderArgs = {
	email: string;
	phone: string;
} & TFormRenderArgs;

// Результат оформления заказа

export type TOrderSuccessRenderArgs = {
	description: string;
};

export type TOrderSuccessEventHandlers = {
	onClick?: (args: { _event: MouseEvent }) => void;
};
