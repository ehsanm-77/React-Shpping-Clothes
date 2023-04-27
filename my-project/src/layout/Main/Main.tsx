export const Main = () => {
  return (
    <>
      <section>
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
        <main className="grid grid-cols-1 md:grid-cols-3 p-5">
          <div className="col-span-1 flex flex-col gap-1">
            <img
              src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg"
              className="h-[400px] gap-2"
              alt=""
            />

            <h1>Frill mini dress in yellow polka dot</h1>

            <div className="flex justify-between">
              <h1>$10.9</h1>

              <button className="px-3 py-1 bg-[#F0C041]">Add To Cart</button>
            </div>
          </div>
        </main>
      </section>
      <section></section>
    </>
  );
};
