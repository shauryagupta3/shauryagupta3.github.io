import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (<div className="flex justify-center p-2 m-4 items-center gap-1 border border-zinc-600 rounded-xl">
    <p className="font-medium">Made with Nextjs</p>
    (<Link className="text-blue-600" href={"https://github.com/shauryagupta3/shauryagupta3.github.io"}>source code</Link>)
  </div>);
}
