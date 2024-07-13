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
function App() {
  return (
    <>
      <Header />

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
      <br></br>
      <br></br>

      <div className='p-4 gap-4'>
        <Dastebandi />
      </div>
      <Mahbob />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default App;
