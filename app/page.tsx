import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import weatherAppImg from "../public/static/images/weather-app.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getAvatarUrl() {
  const response = await fetch("https://api.github.com/users/shauryagupta3")
    .then((Response) => Response.json())
    .then((res) => res.avatar_url);
  return response;
}

export default async function Home() {
  const avatar_url = await getAvatarUrl();
  return (
    <>
      <div className="w-full flex items-center flex-col h-full justify-center">
        <main className="max-w-[90%] sm:max-w-screen-md h-screen flex flex-col justify-around">
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
          <div
            id="techstack"
            className="w-full max-h-1/3 rounded-xl p-4 border border-zinc-600"
          >
            {" "}
            <h1 className=" text-4xl font-semibold text-center pb-4">
              Tech Stack
            </h1>{" "}
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
        </main>
        <div id="projects" className="w-[90%] sm:max-w-screen-md">
          {" "}
          <h1 className="text-3xl font-bold">Projects</h1>
          <div className="my-4 flex flex-col w-full gap-2">
          <div className="flex flex-col text-center sm:text-start sm:flex-row p-2 justify-between border rounded-xl border-zinc-500">
              <div className="sm:w-1/2 flex-col h-full justify-between flex">
                <h1 className="text-3xl font-semibold">Weather App</h1>
                <div className="flex justify-center sm:justify-start py-2 gap-2">
                  <Button asChild variant={"secondary"}>
                    <Link href={"https://weather-app-react-a32.pages.dev/"}>Live</Link>
                  </Button>
                  <Button asChild variant={"secondary"}>
                    <Link href={"https://github.com/shauryagupta3/weather-app"}>Code</Link>
                  </Button>
                </div>
                <p>
                  A weather forecast app made with React which uses Open weather
                  api to get data for fetching data. It comes with auto-complete
                  for better user experience.
                </p>
              </div>
              <Image
                src={weatherAppImg}
                alt="weather app image"
                height={100}
                width={300}
              />
            </div>{" "}
            <div className="flex flex-col text-center sm:text-start sm:flex-row p-2 justify-between border rounded-xl border-zinc-500">
              <div className="sm:w-1/2 flex-col h-full justify-between flex">
                <h1 className="text-3xl font-semibold">Weather App</h1>
                <div className="flex justify-center sm:justify-start py-2 gap-2">
                  <Button asChild variant={"secondary"}>
                    <Link href={"/"}>Live</Link>
                  </Button>
                  <Button asChild variant={"secondary"}>
                    <Link href={"/"}>Code</Link>
                  </Button>
                </div>
                <p>
                  A weather forecast app made with React which uses Open weather
                  api to get data for fetching data. It comes with auto-complete
                  for better user experience.
                </p>
              </div>
              <Image
                src={weatherAppImg}
                alt="weather app image"
                height={100}
                width={300}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
