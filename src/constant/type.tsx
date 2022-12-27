/* eslint-disable no-undef */

//Product Type:
export interface Product {
  id: string | number;
  name: string;
  imgUrl: string;
  price: number;
  type: ProductMenu;
}

export enum ProductMenu {
  ALL = 'ALL'
}

export type ProducSizeType = {
  id: number;
  name: string;
  value: number;
};

export const productSize: ProducSizeType[] = [
  {
    id: 1,
    name: 'Nhỏ',
    value: 0
  },
  {
    id: 2,
    name: 'Vừa',
    value: 6000
  },
  {
    id: 3,
    name: 'Lớn',
    value: 10000
  }
];

export const productTopping = [
  {
    id: 0,
    name: 'Kem Phô Mai Macchiato',
    value: 0
  },
  {
    id: 1,
    name: 'Expresso',
    value: 6000
  },
  {
    id: 2,
    name: 'Thạch Cà Phê',
    value: 10000
  },
  {
    id: 3,
    name: 'Trân Châu Trắng',
    value: 10000
  },
  {
    id: 4,
    name: 'Chân Trâu đen',
    value: 10000
  }
];
