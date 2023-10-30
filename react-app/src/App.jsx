import Hero from "./component/Hero";
import Header from './component/Header';
import About from "./component/About";
import Project from "./component/Project";
import Service from "./component/Service";
import Footer from "./component/Footer";


const App = () => {
  return (
    <div>
     <Header/>
     <About/>
      <Hero/>
      <Project/>
      <Service/>
      <Footer/>
    </div>
  );
};

export default App;