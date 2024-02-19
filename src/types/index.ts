interface IProduct {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number | null;
}

type TOrderInvoice = Omit<IOrder, 'items'> & {
	items: string[];
	total: number;
};

type TOrderPayment = 'cash' | 'card';
type TOrderStep = 'shipment' | 'contacts';

interface IOrder {
	items: IProduct[];
	payment: TOrderPayment;
	address: string;
	email: string;
	phone: string;
}

interface IOrderResult {
	id: string;
	total: number;
}

interface IAppState {
	preview: IProduct;
	basket: Set<IProduct>;
	products: IProduct[];
	order: IOrder;
}

export {
	IOrder,
	IOrderResult,
	TOrderInvoice,
	TOrderPayment,
	TOrderStep,
	IProduct,
	IAppState,
};
