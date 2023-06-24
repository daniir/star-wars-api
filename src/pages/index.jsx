import Layout from '@/src/layout/layout';
import { fetchData } from '@/src/helpers/fetchData';
import FilmCard from '@/components/filmCard';

export default function Films({ results }){

    return(
        <Layout title="Films">
            <article className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
                {
                    results.map(({ title, episode_id, director, producer, release_date }) => (
                        <FilmCard 
                            key={episode_id}
                            title={title}
                            episode_id={episode_id}
                            director={director}
                            producer={producer}
                            release_date={release_date}
                        />
                    ))
                }
            </article>
        </Layout>
    );
};

export async function getStaticProps(){
    const { results } = await fetchData("films");
    return {
        props: {
            results
        },
    };
};