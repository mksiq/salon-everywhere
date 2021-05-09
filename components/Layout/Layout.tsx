import MyProps from '../../types/MyProps';
import NavBar from '../NavBar/NavBar';

export default function Layout(props: React.PropsWithChildren<MyProps>) {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
    </>
  );
}
