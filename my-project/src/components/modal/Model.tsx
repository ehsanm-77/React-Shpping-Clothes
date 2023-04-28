import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Imodal } from '../../type';

export const MyDialog = ({
  setIsOpen,
  isOpen,
  modalItem,
  addToCart,
  item,
}: Imodal) => {
  const handleAddToCart = () => {
    console.log(item);
    addToCart(item);
  };
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <Dialog.Panel className="rounded-md bg-white flex m-16 h-full shadow-md">
            <img src={modalItem.url} alt="" className="" />
            <div>
              <div className="flex justify-between items-center p-3">
                <Dialog.Title>{modalItem.title}</Dialog.Title>
                <button
                  className="py-1 px-2 bg-slate-100 m-1 rounded-full shadow-md focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </div>
              <div className="p-3">
                <Dialog.Description>{modalItem.desc}</Dialog.Description>
                <div className="flex justify-between items-center mt-10 px-20">
                  <div>Price : $ {modalItem.price}</div>
                  <button
                    className="px-3 py-1 bg-[#F0C041] rounded-xl shadow-md focus:outline-none"
                    onClick={() => {
                      handleAddToCart(); // <-- Invoke the function with ()
                      setIsOpen(false);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
