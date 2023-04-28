import { useState, useEffect } from 'react';
import { Icardprops } from '../../type';
import { MyDialog } from '../modal/model';

export const Card = ({
  setIsOpen,
  item,
  setModalItem,
  addToCart,
}: Icardprops) => {
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="col-span-1 flex flex-col justify-between gap-1 shadow-md p-2 rounded-md">
      <img
        onClick={(e) => {
          setIsOpen(true);
          setModalItem(item);
          console.log(item);
        }}
        src={item.url}
        className="h-[400px] gap-2 w-96"
        alt=""
      />
      <h1 className="drop-shadow-md">{item.title}</h1>
      <div className="flex justify-between">
        <h1 className="drop-shadow-md">$ {item.price}</h1>
        <button
          onClick={handleAddToCart}
          className="px-3 py-1 bg-[#F0C041] rounded-xl shadow-md"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
