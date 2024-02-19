import { TProductsRenderArgs, TViewNested } from '../../types';

import { View } from '../base/View';

class Products extends View {
	set items(value: TViewNested[]) {}

	render<RenderArgs extends object = object>(
		args: TProductsRenderArgs<RenderArgs>
	) {
		super.render(args);

		return this._element;
	}
}

export { Products as ProductsView };
