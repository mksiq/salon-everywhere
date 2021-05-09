import MyProps from '../../types/MyProps';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export default function Layout(props: React.PropsWithChildren<MyProps>) {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
