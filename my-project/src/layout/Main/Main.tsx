import { useEffect, useState } from 'react';
import { Card } from '../../components/card/Card';
import { Imain } from '../../type';

export const Main = ({ db, handleFilter, handleOrder }: Imain) => {
  return (
    <div className="flex">
      <section className="w-2/3">
        <header className="flex justify-between p-2 border-b-2">
          <div>{db && db.length} Products</div>
          <div className="flex gap-3">
            <label htmlFor="">Order</label>
            <select
              onChange={(e) => {
                handleOrder(e.target.value);
              }}
              name=""
              className="border border-black rounded-sm"
              id=""
            >
              <option value="lowest">lowest</option>
              <option value="highest">highest</option>
            </select>
          </div>
          <div className="flex gap-3">
            <label htmlFor="">Filter</label>
            <select
              onChange={(e) => {
                handleFilter(e.target.value);
              }}
              name=""
              className="border border-black rounded-sm"
              id=""
            >
              <option value="ALL">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
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
              }) => <Card key={item.id} className={'p-1'} item={item} />
            )}
        </main>
      </section>
      <section className="flex flex-col items-center w-1/3">
        <div>Cart is Empty</div>
      </section>
    </div>
  );
};
