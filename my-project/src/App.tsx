import { useEffect, useState } from 'react';
import { Header } from './layout/Harder/header';
import { Footer } from './layout/Footer/footer';
import { Main } from './layout/Main/Main';
import { dbType } from './type';
// const temp: dbType[] = [];

function App() {
  const [db, setDb] = useState<dbType[]>();
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setDb(data));
  }, []);
  return (
    <>
      <Header />
      <Main db={db} />
      <Footer />
    </>
  );
}

export default App;
