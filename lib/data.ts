import { productInterface, productsInterface } from "./interfaces";

export const fetchProducts = async (): Promise<productInterface[]> => {
  try {
    const res: {products:productInterface[]} = await fetch(
      "https://dummyjson.com/products"
    ).then((res) => res.json());
    return await res.products;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch data ${error}`);
  }
};
