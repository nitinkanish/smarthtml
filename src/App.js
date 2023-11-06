import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import TopSection from './components/topSection';
import About from './components/about';
import Perks from './components/perks';
import Services from './components/services';
import Industries from './components/industries';
import Client from './components/client';
import Award from './components/award';
import Footer from './components/footer';
import Contact from './components/contactus';

function App() {
  return (
    <Router>
      <div className='body realtive h-full bg-grey3'>

        
   
        <div className=' lg:px-24 xl:px-52 xxl:px-64 px-6'>
          <Header />
          <TopSection />
          <About />
          <Perks />
          <Services />
        </div>
        <div className='px-12'>
        <Industries />
        </div>
        <div className=' lg:px-24 xl:px-52 xxl:px-64 px-6'>
          <Client/>
          <Award/>
          <Contact/>
      
        </div>
        <div className="bg-dark w-full h-74 rounded-t-2xl">
        <Footer/>
        </div>
       
      </div>


    </Router>
  );
}
export default App;
