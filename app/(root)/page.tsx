import Image from "next/image";
import SearchForm from "@/app/components/SearchForm";

export default async function Home({searchParams} : {
    searchParams: Promise <{ query?: string }>
}) {

    const query = (await searchParams).query;
  return (
    <>
        <section className={"green_container"}>
            <h1 className="heading"> Empower Your Pitch, <br /> Ignite Collaborations </h1>
            <p className={"sub-heading !max-w-3xl"}> Share your ideas, shape the future, and rise in the virtual startup world.</p>


            <SearchForm query={query} />
        </section>

    </>
  );
}
