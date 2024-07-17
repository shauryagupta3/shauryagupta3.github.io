---
title: "Understanding the App Router"
subtitle: "The all new app router in nextjs"
author: "Shaurya Gupta"
date: "16-02-2024"
---
Next.js, a popular React framework, provides a powerful and intuitive routing system out of the box. It simplifies creating routes for your web application by leveraging file-based routing, which allows developers to focus on building components rather than configuring routes. In this blog, we'll delve into the basics of routing in Next.js, explore the `App Router`, and provide some practical examples to get you started.

## Table of Contents

1. [Introduction to Next.js Routing](#introduction-to-nextjs-routing)
2. [File-based Routing](#file-based-routing)
3. [Dynamic Routes](#dynamic-routes)
4. [Nested Routes](#nested-routes)
5. [API Routes](#api-routes)
6. [App Router](#app-router)
7. [Practical Examples](#practical-examples)
8. [Conclusion](#conclusion)

## Introduction to Next.js Routing

Next.js routing is built on the concept of file-based routing. Each file in the `pages` directory of a Next.js project automatically becomes a route. This system makes it easy to create and manage routes without needing a separate routing configuration.

## File-based Routing

In Next.js, the `pages` directory serves as the main entry point for routing. Each file in this directory corresponds to a route in your application.

### Example

```
my-next-app/
├── pages/
│   ├── index.js     // Route: /
│   ├── about.js     // Route: /about
│   └── blog/
│       └── index.js // Route: /blog
```

- `pages/index.js` maps to the root route `/`.
- `pages/about.js` maps to the `/about` route.
- `pages/blog/index.js` maps to the `/blog` route.

## Dynamic Routes

Dynamic routing in Next.js allows you to create routes that accept parameters. This is particularly useful for pages like blog posts or user profiles, where the content varies based on a parameter.

### Example

Create a file named `[id].js` in the `pages` directory:

```
my-next-app/
├── pages/
│   ├── index.js
│   └── post/
│       └── [id].js // Route: /post/:id
```

In `[id].js`, you can access the dynamic parameter using the `useRouter` hook from Next.js:

```javascript
// pages/post/[id].js
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Post;
```

## Nested Routes

Next.js supports nested routing by creating subdirectories within the `pages` directory. This allows you to organize your routes hierarchically.

### Example

```
my-next-app/
├── pages/
│   ├── index.js
│   └── blog/
│       ├── index.js   // Route: /blog
│       └── [slug].js  // Route: /blog/:slug
```

- `pages/blog/index.js` maps to `/blog`.
- `pages/blog/[slug].js` maps to `/blog/:slug`.

## API Routes

Next.js also provides a convenient way to create API endpoints using the `pages/api` directory. Each file in this directory maps to an API endpoint.

### Example

Create a file named `hello.js` in the `pages/api` directory:

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, world!' });
}
```

This file creates an API endpoint at `/api/hello`.

## App Router

The `App Router` in Next.js is a special component that wraps your entire application, allowing you to manage global state, handle layout, and more. The `App Router` is typically defined in `pages/_app.js`.

### Example

```javascript
// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

In this example, `MyApp` is the `App Router` that wraps every page in the application. You can use this component to add global styles, context providers, or layout components.

## Practical Examples

### Adding Global Styles

To add global styles to your Next.js app, import the CSS file in `pages/_app.js`:

```javascript
// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### Using Context API

You can use the `App Router` to provide global state using React's Context API:

```javascript
// pages/_app.js
import { createContext, useState } from 'react';
import '../styles/globals.css';

export const MyContext = createContext();

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({});

  return (
    <MyContext.Provider value={[state, setState]}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
```

### Adding a Layout

You can add a layout to your application by wrapping the `Component` with a layout component:

```javascript
// pages/_app.js
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

## Conclusion

Next.js offers a powerful and flexible routing system that makes it easy to create and manage routes in your web application. With file-based routing, dynamic routes, nested routes, and API routes, Next.js covers a wide range of routing needs. The `App Router` further enhances the framework by providing a way to manage global state, layout, and more. Whether you're building a simple website or a complex web application, Next.js routing provides the tools you need to succeed.

Happy coding!