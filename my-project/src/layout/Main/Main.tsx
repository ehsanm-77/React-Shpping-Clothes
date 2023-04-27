import { Card } from '../../components/card/Card';
import { dbType } from '../../type';

export const Main = ({ db }) => {
  return (
    <div className="flex">
      <section className="w-2/3">
        <header className="flex justify-between p-2 border-b-2">
          <div>6 Products</div>
          <div className="flex gap-3">
            <label htmlFor="">Order</label>
            <select name="" className="border border-black rounded-sm" id="">
              <option value="">lowest</option>
              <option value="">highest</option>
            </select>
          </div>
          <div className="flex gap-3">
            <label htmlFor="">Filter</label>
            <select name="" className="border border-black rounded-sm" id="">
              <option value="">All</option>
              <option value="">XS</option>
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">XXL</option>
            </select>
          </div>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-3 p-5 gap-4">
          {db &&
            db.map(
              (item: {
                id: number;
                title: string;
                url: string;
                price: number;
                desc: string;
              }) => <Card className={'p-1'} item={item} />
            )}
        </main>
      </section>
      <section className="flex flex-col items-center w-1/3">
        <div>Cart is Empty</div>
      </section>
    </div>
  );
};
