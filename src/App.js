import './styles/index.scss';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Banner from './components/Banner'
import BusinessBenefits from './components/BusinessBenefits'

function App() {
  return (
    <div className="cus-container">
      <Header />
      <Banner />
      <BusinessBenefits />
      <Footer />
    </div>
  );
}

export default App;
