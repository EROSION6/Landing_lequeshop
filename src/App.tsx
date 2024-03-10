import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import PurchaseTerms from './pages/PurchaseTerms/PurchaseTerms';
import { Navbar } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contacts />} />
				<Route path='/purchaseTerms' element={<PurchaseTerms />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
