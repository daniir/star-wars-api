import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex justify-center bg-gradient-to-t from-zinc-800 to-zinc-900 p-10 mb-10 rounded-md">
      <Image
        src="/star-wars-4.svg"
        alt="Star_Wars_Logo"
        width={250}
        height={250}
      />
    </div>
  );
}
