export interface BlogPostInterface {
  title: string;
  date: string;
  id: string;
  slug: string;
  content: string;
}

export interface BlogPostsInterface extends Array<BlogPostInterface> { }
