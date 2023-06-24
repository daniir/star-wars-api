import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import Head from "next/head";

export default function Layout({ children, title }){
    return(
        <>
            <Head>
                <title>{`SW-API|${title}`}</title>
                <meta name='SatrWars API' content='SWAPI' />
            </Head>
            <NavBar/>
            <main className="container mx-auto">
                { children }
            </main>
            <Footer/>
        </>
    );
};