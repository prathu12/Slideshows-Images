import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Calc from './components/Calc';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
// import Test from './components/Test';
import TestAgain from './components/TestAgain';

function App() {
  return (
    <>
      <div className="">
       <Navbar />
        <Footer />
        {/* <About />
        <Contact />
        <Calc />  */}
        {/* <Test /> */}
        <TestAgain />
      </div>
    </>
  );
}

export default App;
