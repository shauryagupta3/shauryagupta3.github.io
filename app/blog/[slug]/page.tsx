import { Metadata } from "next";

export default async function Slug({params}:{params:{slug:string}}) {
    return (
    <div>
      <p>slug : {params.slug}</p>
    </div>
  );
}

export const generateMetadata = ({ params }: {params:{slug:string}}): Metadata => {
    return {
      title: `${params.slug}`,
      description:``,
    };
  };