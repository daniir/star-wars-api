import Link from "next/link";
import Image from "next/image";

export default function FilmCard({
  title,
  episode_id,
  director,
  producer,
  release_date,
}) {
  const id = episode_id <= 3 ? episode_id + 3 : episode_id - 3;
  const producers = producer.split(",").join("\n");
  return (
    <section className="text-center text-white p-1">
      <Image
        className="mx-auto"
        src={`/assets/img/cover_${episode_id}.png`}
        width={390}
        height={350}
        alt={`cover_${episode_id}`}
        priority={true}
      />
      <h2 className="font-bold uppercase">{title}</h2>
      <p className="font-bold">Director:</p>
      <p className="whitespace-pre-line">{director}</p>
      <p className="font-bold">Producer:</p>
      <p className="whitespace-pre-line">{producers}</p>
      <p className="font-bold">Release date:</p>
      <p className="whitespace-pre-line">{release_date}</p>
      <div className="flex justify-center items-baseline my-5">
        <Link href={`/films/${id}`}>
          <button className="font-bold uppercase rounded-lg transition ease-in-out delay-200 bg-yellow-400 hover:-translate-y-1 hover:scale-125 hover:bg-yellow-500 duration-300 p-2">
            View detail
          </button>
        </Link>
      </div>
    </section>
  );
}
