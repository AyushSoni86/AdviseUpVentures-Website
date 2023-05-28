import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Testimonial from './Components/Testimonails/Testimonial';
import Newsletter from './Components/Newsletter/Newsletter';
import Team from './Components/Teams/Teams';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Testimonial/>
     <Team/>
     <Newsletter/>
    </div>
  );
}

export default App;
