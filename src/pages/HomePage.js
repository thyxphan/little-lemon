import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';

function HomePage() {
  return (
    <div>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </div>
  );
}

export default HomePage;