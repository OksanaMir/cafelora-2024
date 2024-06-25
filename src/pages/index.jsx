import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Contact } from '../components/Contact';

document.querySelector('#root').innerHTML = render(
	<div id="home" className="page">
		<Header />
		<main>
			<Banner />
			<Menu />
			<Gallery />
			<Contact />
		</main>
		<Footer />
	</div>
);
