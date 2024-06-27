import { OrderItem } from '../OrderItem';
import './style.css';

export const Order = ({ items }) => (
	<main className="order">
		<div className="container order__content">
			<h1>Vaše objedávnka</h1>
			{items.length === 0 ? (
				<p className="empty-order">Zatím nemáte nic objednáno</p>
			) : (
				<div className="order__items">
					{items.map((item, i) => (
						<OrderItem
							key={item.id}
							name={item.name}
							image={`http://localhost:4000${item.image}`}
						/>
					))}
				</div>
			)}
		</div>
	</main>
);
