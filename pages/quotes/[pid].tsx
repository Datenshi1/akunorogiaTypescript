import { useRouter } from "next/router";
import Details from "../../components/Details/Details";
import useSwr from "swr";
import Custom404 from "../404";
import Page from "../../layouts/layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  const { data, error } = useSwr(pid ? `/api/quotes/${pid}` : null, fetcher);
  if (error)
    return (
      <>
        <Custom404 />
      </>
    );
  if (!data)
    return (
      <div className="text-2xl flex justify-center items-center p-8 ">
        Loading...
      </div>
    );
  return (
    <Page
      meta={{
        title: `${data.title}`,
        description: "Quote Page",
      }}
    >
      <Details results={data} />
    </Page>
  );
}
