import "@styles/globals.css";

import Nav from "@components/Nav/Nav";
import Provider from "@components/Provider";
import Footer from '@components/Footer';

export const metadata = {
  title: "RemedySearcher",
  description: "Wyszukiwarka remediów homeopatycznych",
};

const RootLayout = ({ children }) => (
  <html lang='pl'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
        <Footer />
      </Provider>
    </body>
  </html>
);

export default RootLayout;
