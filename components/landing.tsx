'use client'

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";

export function PortfolioLanding() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const currentRoute = usePathname();

  return (
    <section
      className="group relative min-h-screen bg-gray-900"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none -inset-x-0 -inset-px absolute opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <nav
        className="bg-transparent fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="items-center justify-between flex w-auto"
            id="navbar-sticky">
            <ul className="flex p-4 font-medium rounded-lg flex-row space-x-8 mt-0 bg-gray-800 border-gray-700 border">
              <li>
                <Link href="#landing"
                  className={'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'}
                >Biandré Streso</Link>
              </li>
              <li>
                <Link href="#timeline"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Biography</Link>
              </li>
              <li>
                <Link href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold text-white">Biandré Streso</h1>
          <h2 className="text-sky-500 text-5xl font-bold ">Software Engineer</h2>
        </div>
      </div>
    </section>
  );
}
