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
const data = json.data;
console.log(data);

document.querySelector('#root').innerHTML = render(
	<div id="home" className="page">
		<Header />
		<main>
			<Banner />
			<Menu drinks={data} />
			<Gallery />
			<Contact />
		</main>
		<Footer />
	</div>
);
const btnElm = document.querySelector('.nav-btn');
console.log(btnElm);
const navElm = document.querySelector('.rollout-nav');
btnElm.addEventListener('click', () => navElm.classList.toggle('nav-closed'));
navElm.addEventListener('click', () => navElm.classList.add('nav-closed'));
