import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";

async function getAvatarUrl() {
  const response = await fetch("https://api.github.com/users/shauryagupta3")
    .then((Response) => Response.json())
    .then((res) => res.avatar_url);
  return response;
}

interface project {
  title: string;
  code_link: string;
  repo_link: string;
  img_url: string;
  description: string;
}

const projects: project[] = [
  {
    title: "Weather App",
    code_link: "https://shauryagupta3.github.io",
    repo_link: "https://github.com/shauryagupta3/weather-app",
    img_url: "/static/images/weather-app.png",
    description:
      "A weather forecast app made with React which uses Open weather api for fetching data. Implemented pagination in search bar for better user experience. Gives user detailed information about current weather along with forecast for upcoming week.",
  },
  {
    title: "Lift Simulation",
    code_link: "https://shauryagupta3.github.io/lift-simulation-js/",
    repo_link: "https://github.com/shauryagupta3/lift-simulation-js",
    img_url: "/static/images/lift-simulation.png",
    description:
      "A visual simulation of how lift systems works doing calls to system. Maintaining queues for management of lifts and vivid animations for better visual representation.",
  },
  {
    title: "BlackJack",
    code_link: "https://blackjack-js.pages.dev/",
    repo_link: "https://github.com/shauryagupta3/blackjack-game",
    img_url: "/static/images/blackjack.png",
    description:
      "Classic blackjack game implemented with visual cards to be played. Also added a casino like betting system if player wins bet is 2x else bet is gone.",
  },
  {
    title: "The Protein Project",
    code_link: "",
    repo_link: "https://github.com/shauryagupta3/Protein-Project",
    img_url:
      "https://raw.githubusercontent.com/shauryagupta3/Protein-Project/main/img/screenshot.jpeg",
    description:
      "The Protein Project is a powerful application designed to help you discover the most optimal combination of foods that maximize your protein intake while adhering to your specified calorie limit.We've harnessed the potential of fast-food dataset from USA, which we've supplemented with manually added entries to enhance the variety of our recommendations.",
  },
];

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
              <div className="flex justify-start gap-2">
                <Button variant={"outline"} size={"icon"} asChild>
                  <Link href={"https://github.com/shauryagupta3"}>
                    <GitHubLogoIcon className="h-6 w-6" />
                  </Link>
                </Button>
                <Button variant={"outline"} size={"icon"} asChild>
                  <Link href={"/static/cv_wo_ph.pdf"}>
                    <FileIcon className="h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div
            id="techstack"
            className="w-full max-h-1/3 rounded-xl p-4 border border-zinc-600"
          >
            {" "}lift-simulation
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
        <div id="projects" className="mt-8 w-[90%] sm:max-w-screen-md">
          {" "}
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="my-4 flex flex-col w-full gap-2">
            {projects.map((e, i) => (
              <div
                key={i}
                className="flex flex-col text-center sm:text-start sm:flex-row p-2 justify-between border rounded-xl border-zinc-500"
              >
                <div className="sm:w-1/2 flex-col h-full justify-between flex">
                  <h1 className="text-3xl font-semibold">{e.title}</h1>
                  <div className="flex justify-center sm:justify-start py-2 gap-2">
                    {e.code_link != "" ? (
                      <Button asChild variant={"secondary"}>
                        <Link href={e.code_link}>Live</Link>
                      </Button>
                    ) : (
                      ""
                    )}
                    <Button asChild variant={"secondary"}>
                      <Link href={e.repo_link}>Code</Link>
                    </Button>
                  </div>
                  <p>{e.description}</p>
                </div>
                <div className="self-center">
                  <Image
                    src={e.img_url}
                    alt="weather app image"
                    height={100}
                    width={300}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="about"
          className="p-4 my-4 rounded-xl text-white bg-zinc-900 w-[90%] sm:max-w-screen-md dark:text-black dark:bg-zinc-100"
        >
          <h1 className="text-3xl mb-2 font-semibold">About</h1>
          <p>
            Hello! I&apos;m Shaurya, a CS student at Delhi University. My coding
            journey spans languages like JS, TS, Golang, C++, Rust and Java.
            Proficient in databases, different web frameworks and RESTful APIs.
            I like to solve problems and learn more about Data Structures and
            Algorithms as well.
          </p>
        </div>
      </div>
    </>
  );
}
