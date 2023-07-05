export interface ProductType {
  fields: {
    id: number;
    imageUrl: string;
    info: string;
    price: number;
    status: string;
    title: string;
    underTitle: string;
    urlId?: string;
  };
  sys: { id: string };
}
