import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Order } from '../components/Order';
import { API_URL } from '../../config';

const response = await fetch(
	// 'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image'
	`${API_URL}?filter=ordered:eq:true&select=id,name,image`
);
const json = await response.json();
const order = json.data;

document.querySelector('#root').innerHTML = render(
	<div className="page">
		<div className="page">
			<Header showMenu={false} />
			<Order items={order} />
			<Footer />
		</div>
	</div>
);
