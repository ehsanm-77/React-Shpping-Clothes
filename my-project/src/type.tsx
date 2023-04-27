export interface Icardprops {
  className: string;
  item: {
    id: number;
    title: string;
    url: string;
    price: number;
    desc: string;
  };
}
export type dbType = {
  id: number;
  title: string;
  url: string;
  price: number;
  desc: string;
};
export interface Imain {
  db: dbType;
}
