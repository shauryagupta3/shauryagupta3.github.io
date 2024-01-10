import { fetchProducts } from "@/lib/data";
import { productInterface, productsInterface } from "@/lib/interfaces";

export default async function Blog() {
  const products: productInterface[] = await fetchProducts();
  return (
    <div>
      <p>blogs</p>
      <ul>
        {products.map((e) => {
          return <li key={e.id}>{e.title}</li>;
        })}
      </ul>
    </div>
  );
}

export const metadata = {
  title: "blog",
  description: "all blog posts",
};
