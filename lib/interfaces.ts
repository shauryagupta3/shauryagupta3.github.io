export interface productInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail:string,
}

export interface productsInterface extends Array<productInterface> {}
