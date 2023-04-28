import { useEffect, useState } from 'react';
import { Header } from './layout/Harder/header';
import { Footer } from './layout/Footer/footer';
import { Main } from './layout/Main/Main';
import { dbType } from './type';
import { MyDialog } from './components/modal/model';

function App() {
  const [db, setDb] = useState<dbType[]>();
  const [size, setSize] = useState('ALL');
  const [order, setOrder] = useState('lowest');

  const handleFilter = (selectedSize: string) => {
    setSize(selectedSize);
  };
  const handleOrder = (selectedOrder: string) => {
    setOrder(selectedOrder);
  };
  useEffect(() => {
    let url = 'http://localhost:3000/products?';
    if (size !== 'ALL') {
      url += `q=${size}&`;
    }
    if (order == 'lowest') {
      url += `_sort=price&_order=asc&`;
    }
    if (order == 'highest') {
      url += `_sort=price&_order=desc&`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDb(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [size, order]);

  return (
    <>
      <Header />
      <Main db={db} handleFilter={handleFilter} handleOrder={handleOrder} />
      <Footer />
    </>
  );
}

export default App;
