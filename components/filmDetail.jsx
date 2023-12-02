import Image from "next/image";
import ActionBtn from "@/components/actionBtn";

export default function FilmDetail({
  episode_id,
  title,
  opening_crawl,
  release_date,
}) {
  return (
    <section className="text-white">
      <Image
        className="mx-auto my-10"
        src={`/assets/img/cover_${episode_id}.png`}
        width={350}
        height={250}
        alt={`cover_${episode_id}`}
        priority={true}
      />
      <h1 className="font-bold text-center text-2xl mx-5">
        Star War Episode {episode_id} - {title}
      </h1>
      <h2 className="font-bold text-center text-xl">
        Release Date: {release_date}
      </h2>
      <br />
      <p className="text-justify font-serif mx-5 text-md md:text-lg">
        {opening_crawl}
      </p>
      <div className="flex justify-center my-5">
        <ActionBtn path="/" name="Return" />
      </div>
    </section>
  );
}
