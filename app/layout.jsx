import "@styles/globals.css";

import Nav from "@components/Nav/Nav";
import Provider from "@components/Provider";
import Footer from '@components/Footer';
import SidebarNav from '@components/SidebarNav/SidebarNav';

export const metadata = {
  title: "RemedySearcher",
  description: "Wyszukiwarka remediów homeopatycznych",
};

const RootLayout = ({ children }) => (
  <html lang='pl'>
    <body className="body">
    <div className='gradient' />
      <Provider>
        <aside className='aside'>
          <SidebarNav />
        </aside>
        <main className='app' >
          <Nav />
          <div className='box'>
            {children}
          </div>
        </main>
        <Footer />
      </Provider>
    </body>
  </html>
);

export default RootLayout;
