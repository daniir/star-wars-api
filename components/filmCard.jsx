import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
} from "@nextui-org/react";

export default function FilmCard({ title, episode_id, director, producer }) {
  const id = episode_id <= 3 ? episode_id + 3 : episode_id - 3;
  const producers = producer.split(",").join("\n");
  return (
    <Card className="py-4 bg-opacity-10 w-full">
      <CardHeader className="pb-0 pt-2 flex-col items-center">
        <h4 className="font-bold text-large text-white">{title}</h4>
      </CardHeader>
      <CardBody>
        <Image
          width={300}
          height={300}
          alt={`StarWar_Episode_${id}`}
          className="mx-auto"
          src={`/assets/img/cover_${episode_id}.png`}
        />
      </CardBody>
      <Divider className="my-2" />
      <CardFooter className="flex justify-around">
        <div>
          <h4 className="text-white font-semibold">Director: </h4>
          <p className="text-white whitespace-pre-line">{director}</p>
        </div>
        <Divider orientation="vertical" />
        <div>
          <h4 className="text-white font-semibold">Producers: </h4>
          <p className="text-white whitespace-pre-line">{producers}</p>
        </div>
        <Divider orientation="vertical" />
        <Button className=" bg-yellow-500">
          <Link href={`/films/${id}`}>
            <span className="text-white text-tiny font-semibold">
              View info
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
