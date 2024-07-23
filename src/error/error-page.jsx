import { useRouteError } from 'react-router-dom';
import Headers from '../headers/Headers';
import Footer from '../Footer';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <h1></h1>
      <p></p>
      <Headers />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
        <p className='flex justify-center'>صحفه ای که دنبال ان بودبد پیدا نشد</p>
        <a href='/' className='flex justify-center text-emerald-950'>
          صفحه اصلی👈
        </a>
        <div className='flex justify-center rounded-3xl p-8'>
          <img src='https://www.digikala.com/statics/img/png/page-not-found.webp' alt='' />
        </div>
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
      </p>
      <Footer />
    </div>
  );
}
