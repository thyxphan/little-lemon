import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Specials />
      <CallToAction />
      <CustomersSay />
      <Footer />
    </div>
  );
}

export default HomePage;