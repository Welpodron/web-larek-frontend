import {
	IAppState,
	TOrderStep,
	IProduct,
	IOrder,
	TOrderPayment,
	TOrderInvoice,
} from '../../types';

import { Model } from '../base/Model';

class AppState extends Model<IAppState> {
	protected _step: TOrderStep = 'shipment';

	preview: IProduct;

	basket: IProduct[] = [];

	products: IProduct[] = [];

	order: IOrder = {
		items: [],
		payment: '' as TOrderPayment,
		address: '',
		email: '',
		phone: '',
	};

	// Установка этапа оформления заказа
	setStep(value: TOrderStep) {}

	// Установка поля заказа
	setOrderField(field: keyof IOrder, value: unknown) {}

	// Проверка валидности текущего заказа
	getOrderIsValid() {}

	// Получение ошибок текущего заказа
	getOrderErrors() {}

	// Получение полей заказа в виде для взаимодействия с API
	getOrderInvoice() {}

	// Инициализация нового заказа
	initOrder() {}

	// Сброс всех полей заказа
	resetOrder() {}

	// Установка товаров каталога
	setProductsItems(value: IProduct[]) {}

	// Установка позиций корзины
	setBasketItems(value: IProduct[]) {}

	// Проверка на наличие товара в корзине
	getBasketIsContains(id: string) {}

	// Добавление товара в корзину
	addBasketItem(value: IProduct) {}

	// Удаление товара из корзины
	removeBasketItem(id: string) {}

	// Сброс текущего состояния корзины
	resetBasket() {}

	// Инициализация корзины
	initBasket() {}

	// Получение цены позиций в корзине
	getBasketPrice() {}

	// Установка текущего просматриваемого элемента
	setPreview(value: IProduct) {}
}

export { AppState as AppStateModel };
