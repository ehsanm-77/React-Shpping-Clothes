import { Icardprops } from '../../type';
export const Card = ({ item }: Icardprops) => {
  return (
    <div className="col-span-1 flex flex-col justify-between gap-1 shadow-md p-2 rounded-md">
      <img src={item.url} className="h-[400px] gap-2  w-96" alt="" />
      <h1 className="drop-shadow-md">{item.title}</h1>
      <div className="flex justify-between">
        <h1 className="drop-shadow-md">$ {item.price}</h1>

        <button className="px-3 py-1 bg-[#F0C041] rounded-xl shadow-md">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
