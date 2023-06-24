import FilmDetail from '@/components/filmDetail';
import { fetchData } from '@/src/helpers/fetchData';
import Layout from '@/src/layout/layout';

export default function Episode({ film }){
    
    const { episode_id, title, opening_crawl } = film;

    return(
        <Layout title={title}>
            <article>
                <FilmDetail
                    episode_id={episode_id}
                    title={title}
                    opening_crawl={opening_crawl}
                />
            </article>
        </Layout>
    );
};

export async function getStaticPaths(){
    const { results } = await fetchData("films");
    const paths = results.map(({ episode_id }) => ({
        params: { id: episode_id.toString() }
    }));
    return {
        paths,
        fallback: false,
    };
};

export async function getStaticProps({params}){
    const { id } = params;
    const film = await fetchData(`films/${id}`);
    return {
        props: {
            film,
        },
    };
};