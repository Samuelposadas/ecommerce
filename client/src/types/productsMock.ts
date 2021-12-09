export interface iProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  rating: number;
  category: string;
}

export type iProducts = Array<iProduct>;
