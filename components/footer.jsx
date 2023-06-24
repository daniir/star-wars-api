import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-zinc-800 to-zinc-900 rounded-md p-10 mt-10">
        <div className="w-full mx-auto flex flex-wrap items-center justify-center">
            <Link href="https://swapi.dev/" target='_blank'>
                <p className="text-center font-bold font-sans italic text-3xl text-yellow-300 hover:text-yellow-400">
                    About SWAPI Page
                </p>
            </Link>
        </div>
    </footer>
  )
};
