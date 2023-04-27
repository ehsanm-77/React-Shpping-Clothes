import { Icardprops } from '../../type';
export const Card = ({ className, item }: Icardprops) => {
  return (
    <div className="col-span-1 flex flex-col gap-1">
      <img src={item.url} className="h-[400px] gap-2  w-96" alt="" />
      <h1>{item.title}</h1>
      <div className="flex justify-between">
        <h1>$ {item.price}</h1>

        <button className="px-3 py-1 bg-[#F0C041]">Add To Cart</button>
      </div>
    </div>
  );
};

// import { Icardprops } from '../../type';
// export const Card = ({ className, item }: Icardprops) => {
//   return (
//     <div className="col-span-1 flex flex-col gap-1">
//       <img
//         src={}
//         className="h-[400px] gap-2"
//         alt=""
//       />

//       <h1>Frill mini dress in yellow polka dot</h1>

//       <div className="flex justify-between">
//         <h1>$10.9</h1>

//         <button className="px-3 py-1 bg-[#F0C041]">Add To Cart</button>
//       </div>
//     </div>
//   );
// };
