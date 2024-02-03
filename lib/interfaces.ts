export interface BlogPostInterface {
  title: string;
  author:string
  date: string;
  id: string;
  slug: string;
  subtitle:string;
  content: string;
}

export interface BlogPostsInterface extends Array<BlogPostInterface> { }
