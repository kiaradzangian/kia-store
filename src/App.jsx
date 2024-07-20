import { useState } from 'react';
import Header from './header/Header';
import Story from './story/Story';
import Navigation from './navigation/Navigation';
import Image from './image/Image';
import Cards from './cards/Cards';
import Market from './market/Market';
import Aks from './aks/Aks';
import Dastebandi from './dastebandi/Dastebandi';
import Mahbob from './mahbob/Mahbob';
import Towpicture from './mahbob/Towpicture';
import Digiclube from './dijiclue/Digiclube';
import Footer from './Footer';

function App() {
  const [state, setState] = useState('kiarad');
  function handelerState(event) {
    setState(event.currentTarget.value);
  }

  return (
    <>
    
      <Header />
      <p>{state}</p>
      <Story />

      {/* <Navigation /> */}
      <div className=''>
        <Image />
      </div>

      <div className='bg-rose-500 p-3 m-3  rounded-2xl'>
        <Cards />
      </div>

      <div className='bg-slate-100 p-4 m-4 rounded-3xl'>
        <Market />
      </div>
      <Aks />

      <div className='p-4'>
        <Dastebandi />
      </div>
      <Mahbob />
      <Towpicture />
      <Digiclube />

      <div className='p-6'>
        <hr></hr>
        <Footer />
        <input type='text' value={state} onChange={(event) => handelerState(event)} />
      </div>
    </>
  );
}

export default App;
