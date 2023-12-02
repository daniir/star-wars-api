import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-zinc-800 to-zinc-900 rounded-md p-10 mt-10">
      <div className="flex flex-wrap items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-world mr-2"
          width="75"
          height="75"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
        <Link href="https://swapi.dev/" target="_blank">
          <p className="text-center font-bold font-sans italic text-3xl text-white hover:text-yellow-400">
            About Star Wars API Page
          </p>
        </Link>
      </div>
    </footer>
  );
}
