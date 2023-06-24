import { useRouter } from "next/router";

export default function ActionBtn({ path, name }) {
  const router = useRouter();

  return (
    <button
      className="rounded-lg font-bold uppercase p-2 w-72 transition ease-in-out delay-200 bg-yellow-400 hover:-translate-y-1 hover:scale-125 hover:bg-yellow-500 duration-300"
      onClick={() => router.push(path)}>
        { name }
    </button>
  );
}
