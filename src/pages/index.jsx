import Layout from "@/src/layout/layout";
import { fetchData } from "@/src/helpers/fetchData";
import FilmCard from "@/components/filmCard";

export default function Films({ results }) {
  return (
    <Layout title="Films">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
        {results.map(
          ({ title, episode_id, director, producer, release_date }) => (
            <FilmCard
              key={episode_id}
              title={title}
              episode_id={episode_id}
              director={director}
              producer={producer}
              release_date={release_date}
            />
          )
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { results } = await fetchData("films");
  return {
    props: {
      results,
    },
  };
}
