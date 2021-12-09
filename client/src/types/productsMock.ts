export interface iProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  rating: number;
}

export type iProducts = Array<iProduct>;
