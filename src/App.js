import './App.css';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
