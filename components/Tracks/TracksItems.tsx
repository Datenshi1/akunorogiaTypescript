import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const ImagesItems = ({ result, num }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-0 text-sm ">
        <h1 className="text-md tracking-wide w-64  md:truncate pb-1 pt-16">
          Top {num} : {result.artists[0].name}: {result.name}
        </h1>
        <div className="flex justify-center items-center border border-white border-opacity-25 ">
          <Image src={result.album.images[0].url} width={300} height={300} />
        </div>
        <Link href={result.external_urls.spotify}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-lg hover:text-blue-800 tracking-widest"
          >
            Listen
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ImagesItems;