import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Contact } from '../components/Contact';

const response = await fetch('http://localhost:4000/api/drinks');

const json = await response.json();
const drinks = json.data;

console.log(drinks);

document.querySelector('#root').innerHTML = render(
	<div id="home" className="page">
		<Header showMenu={true} />
		<main>
			<Banner />
			<Menu drinks={drinks} />
			<Gallery />
			<Contact />
		</main>
		<Footer />
	</div>
);

const btnElm = document.querySelector('.nav-btn');
const navElm = document.querySelector('.rollout-nav');
const drinkControls = document.querySelectorAll('.drink__controls');

btnElm.addEventListener('click', () => navElm.classList.toggle('nav-closed'));
navElm.addEventListener('click', () => navElm.classList.add('nav-closed'));

drinkControls.forEach(dControl =>
	dControl.addEventListener('click', async e => {
		e.preventDefault();

		const id = dControl.dataset.id;
		const drink = drinks[id];
		const ordered = drink.ordered;
		const apiEndpoint = `http://localhost:4000/api/drinks/${id}`;

		const requestBody = [
			{
				op: 'replace',
				path: '/ordered',
				value: ordered ? false : true
			}
		];

		const requestOptions = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		};

		const response = await fetch(apiEndpoint, requestOptions);
		const data = await response.json();

		console.log(data);
		window.location.reload();
	})
);
