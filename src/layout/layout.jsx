import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import Head from "next/head";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{`SW-API | ${title}`}</title>
        <meta name="SatrWars API" content={title} />
        <meta name="description" content={description} />
      </Head>
      <NavBar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
}
