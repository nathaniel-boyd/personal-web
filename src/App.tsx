import './App.css';
import background from './assets/background.jpg';
import Navbar from './components/hero/navbar';
import Banner from './components/hero/banner';
import Journey from './components/journey/journey';


function App() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: `url(${background})` }}
      />
      <Navbar />
      <Banner />
      <Journey />
    </div>  
  );
}

export default App;
