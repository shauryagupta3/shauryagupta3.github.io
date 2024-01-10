export interface productInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export interface productsInterface extends Array<productInterface> {}

export interface BlogPostInterface {
  title: string;
  date: string;
  id: string;
}

export interface BlogPostsInterface extends Array<BlogPostInterface> {}
