import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Modals from '../Modals/Modals';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center bg-base-300 ">
        <div className="w-full desktop:w-[900px]">{children}</div>
      </main>
      <Footer />
      <Modals />
    </div>
  );
}

export default Layout;
