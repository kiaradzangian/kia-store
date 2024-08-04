import Story from './story/Story';
import Image from './image/Image';
import Cards from './cards/Cards';
import Market from './market/Market';
import Aks from './aks/Aks';
import Dastebandi from './dastebandi/Dastebandi';
import Mahbob from './mahbob/Mahbob';
import Towpicture from './mahbob/Towpicture';
import Digiclube from './dijiclue/Digiclube';
import Footer from './Footer';
import Headers from './headers/Headers';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Headers />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* <p>{tate}</p> */}
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
        <hr></hr> <Footer />
      </div>
    </>
  );
}

export default App;
