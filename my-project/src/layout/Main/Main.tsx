import { useEffect, useState } from 'react';
import { Card } from '../../components/card/Card';
import { Ialikhadmbashi, Imain } from '../../type';
import { MyDialog } from '../../components/modal/model';

export const Main = ({ db, handleFilter, handleOrder }: Imain) => {
  const [modalItem, setModalItem] = useState({
    id: 1,

    title: 'Frill mini dress in yellow polka dot',

    url: 'https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg',

    price: 10,

    desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',

    size: ['XS', 'S', 'XL', 'XXL', 'ALL'],
  });
  const [isOpen, setIsOpen] = useState(false);
  const [itemArr, setItemArr] = useState<Ialikhadmbashi[]>([]);
  return (
    <>
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
                  size: string[];
                }) => (
                  <Card
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    key={item.id}
                    className={'p-1'}
                    item={item}
                    setModalItem={setModalItem}
                    setItemArr={setItemArr}
                    itemArr={itemArr}
                  />
                )
              )}
          </main>
        </section>
        <section className="flex flex-col items-center w-1/3">
          <div className=" p-2 border-b-2">Cart is Empty</div>
          {itemArr.length > 0 ? (
            itemArr.map((item, index) => (
              <div key={index} className="flex justify-between mt-8">
                <img className="w-20" src={item.url} alt="" />
                <div>
                  <div className="h-full flex flex-col justify-between">
                    <div className="ml-3">{item.title}</div>
                    <div className="flex ml-auto gap-3 items-center">
                      <div className="ml-3">
                        $ {item.price} x {index + 1}
                      </div>
                      <button className="bg-yellow-100 border rounded-xl shadow-md p-1">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-between mt-8">
              {/* Empty cart message */}
            </div>
          )}
        </section>
      </div>
      <MyDialog setIsOpen={setIsOpen} modalItem={modalItem} isOpen={isOpen} />
    </>
  );
};
