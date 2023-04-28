export interface Icardprops {
  className: string;
  item: {
    id: number;
    title: string;
    url: string;
    price: number;
    desc: string;
    size: string[];
  };
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setModalItem: React.Dispatch<
    React.SetStateAction<{
      id: number;
      title: string;
      url: string;
      price: number;
      desc: string;
      size: string[];
    }>
  >;
  modalItem: {
    id: number;
    title: string;
    url: string;
    price: number;
    desc: string;
    size: string[];
  };
  setItemArr: React.Dispatch<
    React.SetStateAction<{
      id: number;
      title: string;
      url: string;
      price: number;
      desc: string;
      size: string[];
    }>
  >;
  itemArr: Ialikhadmbashi[];
}
export interface Ialikhadmbashi {
  id: number;
  title: string;
  url: string;
  price: number;
  desc: string;
  size: [];
}
export type dbType = {
  id: number;
  title: string;
  url: string;
  price: number;
  desc: string;
  size: string[];
};
export interface Imain {
  db: dbType[];
  handleFilter: (selectedSize: string) => void;
  handleOrder: (selectedSize: string) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setModalItem: React.Dispatch<
    React.SetStateAction<{
      id: number;
      title: string;
      url: string;
      price: number;
      desc: string;
      size: string[];
    }>
  >;
  modalItem: {
    id: number;
    title: string;
    url: string;
    price: number;
    desc: string;
    size: string[];
  };
}
export interface Imodal {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  modalItem: {
    id: number;
    title: string;
    url: string;
    price: number;
    desc: string;
    size: string[];
  };
}
