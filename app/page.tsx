import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getImagesForTechStack } from "@/lib/images";
import Image from "next/image";

async function getAvatarUrl() {
  const response = await fetch("https://api.github.com/users/shauryagupta3")
    .then((Response) => Response.json())
    .then((res) => res.avatar_url);
  console.log(response);
  return response;
}

export default async function Home() {
  const avatar_url = await getAvatarUrl();
  return (
    <div className="w-full flex h-screen justify-center">
      <main className="max-w-[90%] sm:max-w-screen-md h-full flex flex-col justify-between">
        <div id="hero" className=" flex justify-around w-full h-2/3">
          {" "}
          <div className="flex w-full h-full flex-col justify-center ">
            <Avatar>
              <AvatarImage src={avatar_url} />
              <AvatarFallback>...</AvatarFallback>
            </Avatar>
            <h1 className="text-5xl font-bold">Hi, I am</h1>
            <h1 className="text-7xl text-indigo-400 font-bold">Shaurya</h1>
            <h1 className="text-xl font-semibold">I code</h1>
          </div>
        </div>
        <div id="techstack" className="w-full rounded-xl p-4 border border-zinc-600">
          {" "}
          <h1 className=" text-5xl text-center pb-4">Tech Stack</h1>{" "}
          <ul className="w-full px-4 gap-x-10 grid list-disc  grid-cols-2 sm:grid-cols-4">
            <li>typescript</li>
            <li>javascript</li>
            <li>java</li>
            <li>spring</li>
            <li>golang</li>
            <li>rust</li>
            <li>tailwind</li>
            <li>react</li>
            <li>nextjs</li>
            <li>express</li>
            <li>postgreSQL</li>
            <li>mongoDB</li>
          </ul>
        </div>
        <div id="projects" className="">
          {" "}
          <h1>projects</h1>
        </div>
        <div id="about" className="">
          {" "}
          <h1>about</h1>
        </div>
      </main>
    </div>
  );
}
