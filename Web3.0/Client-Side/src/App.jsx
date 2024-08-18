
import Navbar from './features/Navbar';
import Welcome from './features/Welcome';
import Transaction from './features/Transaction';
import Service from './features/Service';
import Footer from './features/Footer';
import './index.css'

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className ="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Service/>
      <Transaction/>
      <Footer/>
    </div>
  );
}

export default App

