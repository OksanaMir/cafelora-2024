import './style.css';
import { Layer } from '../Layer';

export const Drink = ({ id, name, ordered, image, layers }) => (
	<div className="drink">
		<div className="drink__product">
			<div className="drink__cup">
				<img src={image} />
			</div>
			<div className="drink__info">
				<h3>{name}</h3>
				{layers.map((layer, i) => (
					<Layer key={i} color={layer.color} label={layer.label} />
				))}
			</div>
		</div>
		<form data-id={id} className="drink__controls">
			<input type="hidden" className="order-id" value={id} />
			<button className={ordered ? 'order-btn--ordered' : 'order-btn'}>
				{!ordered ? 'Objednat' : 'Zrušit'}
			</button>
		</form>
	</div>
);
