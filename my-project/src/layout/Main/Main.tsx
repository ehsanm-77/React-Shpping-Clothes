import { useEffect, useState } from 'react';
import { Card } from '../../components/card/Card';
import { Ialikhadmbashi, Imain } from '../../type';
import { MyDialog } from '../../components/modal/model';

export const Main = ({ db, handleFilter, handleOrder }: Imain) => {
  const [modalItem, setModalItem] = useState({
    id: 1,
    title: 'Frill mini',
    url: 'https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg',
    price: 10,
    desc: 'This',
    size: ['XS', 'S', 'XL', 'XXL', 'ALL'],
  });
  const [isOpen, setIsOpen] = useState(false);
  const [itemArr, setItemArr] = useState<Ialikhadmbashi[]>([]);

  const addToCart = (item: Ialikhadmbashi) => {
    const updatedItemArr = [...itemArr];
    const itemIndex = updatedItemArr.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex !== -1) {
      updatedItemArr[itemIndex] = {
        ...updatedItemArr[itemIndex],
        quantity: updatedItemArr[itemIndex].quantity + 1,
      };
    } else {
      updatedItemArr.push({ ...item, quantity: 1 });
    }
    setItemArr(updatedItemArr);
  };
  const handleRemoveItem = (id: number) => {
    const updatedItemArr = itemArr.filter((item) => item.id !== id);
    setItemArr(updatedItemArr);
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of itemArr) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };
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
                    addToCart={addToCart}
                  />
                )
              )}
          </main>
        </section>
        <section className="flex flex-col items-center w-1/3">
          <div className="p-2 border-b-2">
            {itemArr.length > 0
              ? `You have ${itemArr.length} in the Cart`
              : 'Cart is Empty'}
          </div>
          <div className="h-[420px] overflow-y-scroll ml-auto mr-3">
            {itemArr.length > 0 ? (
              itemArr.map((item) => (
                <div
                  key={item.id}
                  className="w-full px-10 flex justify-between mt-8"
                >
                  <img className="w-20" src={item.url} alt="" />
                  <div>
                    <div className="h-full flex flex-col justify-between">
                      <div className="ml-3">{item.title}</div>
                      <div className="flex ml-auto gap-3 items-center">
                        <div className="ml-3">
                          $ {item.price} x {item.quantity}
                        </div>
                        <button
                          className="bg-red-400 border rounded-md shadow-md p-1 text-white"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-between mt-8"></div>
            )}
          </div>

          <div className="w-full px-10 mt-10 flex justify-between">
            <div>Total : $ {calculateTotalPrice()}</div>
            <div>
              <button className="px-3 py-1 bg-[#F0C041] rounded-xl shadow-md">
                Proceed
              </button>
            </div>
          </div>
        </section>
      </div>
      <MyDialog
        setIsOpen={setIsOpen}
        modalItem={modalItem}
        addToCart={addToCart}
        isOpen={isOpen}
        item={{
          quantity: 0,
          id: modalItem.id,
          title: modalItem.title,
          url: modalItem.url,
          price: modalItem.price,
          desc: modalItem.desc,
          size: modalItem.size,
        }}
      />
    </>
  );
};
