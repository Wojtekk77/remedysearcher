import Searcher from "@components/Searcher/Searcher";

const Home = () => (
  <section className='w-full flex-col min-h-[73vh]'>
    <h1 className='head_text text-center'>
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>Remedy Searcher</span>
    </h1>
    <p className='text-lg text-gray-500 mt-4 text-center'>
      Remedysearcher to wyszukiwarka leków homeopatycznych.
    </p>
    <p className='font-inter text-sm text-gray-500 mt-4 text-center'>
      Słowa można wpisywać po przecinku np: <br/> <strong>niepokój, drżenie, krwawienie</strong> <br/>
      lub pełnymi frazami np:<br/>
      <strong>krwawienie z nosa, zimno, zielona wydzielina</strong> <br/>
    </p>
    <p className='font-inter text-sm text-gray-500 mt-4 text-center'>
      Pamiętaj fraza: <strong>krwawienie z nosa</strong> <br/> da Ci inne wyniki niż: <strong>krwawienie, nos </strong> <br />
    </p>
    <p className='font-inter text-sm text-gray-500 mt-4 text-center'>
      {`Życzę miłego testowania :)`}
    </p>
    <Searcher />
  </section>
);

export default Home;
