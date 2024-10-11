export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
}
