import Image from "next/image";
import ActionBtn from '@/components/actionBtn';

export default function FilmDetail({ episode_id, title, opening_crawl, }) {

  return (
    <section className="text-white">
      <Image
        className="mx-auto mb-10 mt-10"
        src={`/assets/img/cover_${episode_id}.png`}
        width={350}
        height={250}
        alt={`cover_${episode_id}`}
        priority={true}
      />
      <h1 className="font-bold text-center text-2xl">
        Star War Episode {episode_id} - {title}
      </h1>
      <br />
      <p className="text-justify font-serif text-lg">
        {opening_crawl}
      </p>
      <div className="flex justify-center my-5">
        <ActionBtn path="/" name="Return" />
      </div>
    </section>
  );
}
