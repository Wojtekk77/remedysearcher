import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="footer bg-black text-center">
        <div className="w-full mx-auto max-w-screen-xl p-4 items-center justify-center">
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
           {/* <b>Jeżeli chiałbyś/chciałabyś wesprzeć moją pracę proszę napisz maila na adres</b> wojtek@remedysearcher.pl */}
          </p>
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 pb-2">
              © 2024 <a href="/" className="hover:underline">RemedySearcher™</a>
          </p>

          <div className='flex flex-row justify-center space-x-4'>
            <Link href='/create-comment' className='white_text'>
              Stwórz komentarz
            </Link>
            <Link href='/' className='white_text'>
              Wyszukiwarka
            </Link>
          </div>
        
        </div>
    </footer>
  );
};

export default Footer;
