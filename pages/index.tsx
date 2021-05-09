import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../src/components/NavBar/NavBar';

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <h1>SalonEverywhere</h1>
      <h2>Melissa Hirtle</h2>
    </>
  );
}
