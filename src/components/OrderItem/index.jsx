import './style.css';

export const OrderItem = ({ name, image }) => (
	<div key={name} className="order-item">
		<img src={image} className="order-item__image" />
		<div className="order-item__name">{name}</div>
	</div>
);
