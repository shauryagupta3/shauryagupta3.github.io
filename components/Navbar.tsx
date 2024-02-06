"use client";

import Link from "next/link";
import { ModeToggle } from "./Dark-mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const linksInNav: { title: string; href: string; description: string }[] = [
  {
    title: "Linkedin",
    href: "https://in.linkedin.com/in/shauryagupta3gg",
    description: "linkedin profile",
  },
  {
    title: "Github",
    href: "https://github.com/shauryagupta3",
    description: "Github profile",
  },
  {
    title: "Resume",
    href: "/static/cv_wo_ph",
    description: "Latest resume",
  },
];

const linksInNavMobile: { title: string; href: string }[] = [
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Linkedin",
    href: "https://in.linkedin.com/in/shauryagupta3gg",
  },
  {
    title: "Github",
    href: "https://github.com/shauryagupta3",
  },
];

export default function Navbar() {
  const [visible, setVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [show, setShow] = React.useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`w-full flex justify-center sticky z-50 ${
        visible ? "top-0" : ""
      } bg-white dark:bg-zinc-950 transition duration-1000 ease-in-out`}
    >
      <div className="flex justify-between w-[95%] m-4 p-2 items-center border rounded-lg border-zinc-600">
        <Link href={"/"} className="text-xl">
          <h2 className="font-semibold">Home</h2>
        </Link>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog?page=1" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                    {linksInNav.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>
        <div className="flex gap-2">
          <ModeToggle />
          <div className="block sm:hidden">
            <Button onClick={() => setShow(!show)} variant={"secondary"}>
              <HamburgerMenuIcon />
            </Button>
            <ul
              className={`${
                show ? "flex" : "hidden"
              } mt-4 absolute border-box gap-2 text-right text-xl left-0 w-full p-4 flex-col bg-white dark:bg-zinc-950`}
            >
              {linksInNavMobile.map((e, i) => (
                <Link key={i} href={e.href}>
                  <li
                    onClick={() => setShow(false)}
                    className="dark:bg-zinc-900 bg-zinc-200  px-4 py-2 rounded-xl"
                  >
                    {e.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
