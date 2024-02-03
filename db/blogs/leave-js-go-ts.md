---
title: "Leave JS Adopt TypeScript"
subtitle: "Why should you not use plain old javascript and feel the power of typescript."
author: "Shaurya Gupta"
date: "03-02-2024"
---

As a developer, I'm passionate about advocating for TypeScript as a superior alternative to JavaScript. Allow me to share my perspective and present the reasons behind my biased viewpoint.
## What are problems with javascript
Web browsers are limited to understanding HTML, CSS, and JavaScript. JavaScript stands as the sole client-side scripting language recognised by these browsers. Consequently, the majority of web applications must utilise JavaScript in some capacity. While there are alternative options such as HTMX, templ etc. They remain less commonly adopted within the web dev community.

many times js does not make sense such as -

```
[] + {}; // outputs '[object object]'

{} + []; // outputs 0

{} + {}; // outputs '[object object][object object]'

[] + []; // outputs ''

0 == []; // true

0 == "0"; // true

"0" == []; // false

2 + '2' // '22'

2 - '2' // 0
```

These examples might not come up often in real life, but what I'm trying to say is that JavaScript isn't very safe when it comes to types, and it's prone to errors. We're human, and we make mistakes, so using JavaScript can sometimes lead to making more mistakes/bugs in our code.

## Readability
This is a major issue that affects plain JavaScript development overall. Imagine you've written a large app that works well. Now, when you want someone new to understand and work with your JavaScript code, it becomes a big challenge. It's quite easy to end up writing **messy** code with JavaScript.

As the creator of the app from scratch, you might grasp every part of the codebase with just one look. However, that's not necessarily the case for others.

## What is Typescript
TypeScript is a superset of JavaScript. It adds some extra features like optional static typing, classes, and interfaces. One of the best things about it is that it helps IDEs (like Visual Studio Code) catch mistakes as you're typing your code.

```
// JavaScript
function add(a, b) {
  return a + b;
}
```

```
// TypeScript
function add(a: number, b: number): number {
  return a + b;
}
```


TypeScript makes you clearly say what type your variables are, which makes your code easier to read. Let's look at a simple example: we have two "add" functions that both take the same things and give the same answer. The JavaScript function takes 36 characters, while the TypeScript one takes 60. But when you read the TypeScript function, you get a better idea of **what it does** compared to the first one.

You can see the type of arguments passed `(a: number, b: number)` and return type explicitly set of function that is `: number {`.

## Interfaces
```
// JavaScript
function printLabel(x) {
  console.log(x.str);
}

printLabel({ str:"name" }) // output -> name
```

```
// TypeScript
interface object {
  str: string;
}

function printLabel(x: object): void {
  console.log(x.str);
}

printLabel({ str:"name" }) -> name
```

Interfaces are a feature of TypeScript that allows us to define the **structure** or shape of an object and specify the properties and methods that an object has or should have. Their primary function is type checking and aiding developers in catching type-related errors during development.

## Why or When to use Javascript
Now that we've seen why to use TypeScript, let's also consider why you might choose JavaScript over TypeScript. JavaScript is great for small apps where the code is straightforward, like the "add" function we mentioned earlier. It's **quicker** to write, too. For example, in a code snippet involving interfaces, JavaScript uses 46 words, while TypeScript uses 93 characters.

TypeScript first came about in 2012 and has grown over time, becoming more mature. However, JavaScript has also evolved alongside it. With newer updates, JavaScript can now do many of the things TypeScript can.

## conclusion
In conclusion, my biased view is to use whatever you're comfortable coding with. If you can write excellent JavaScript, that's fantastic. If you prefer clean TypeScript code, that's also wonderful.

TypeScript isn't a magic solution for every problem. It might suit your needs, or it might not, depending on different factors. The best approach is to give it a try. If it works well for you, go ahead. If not, you always have JavaScript as an alternative.

Thank you