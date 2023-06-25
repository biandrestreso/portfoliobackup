'use client';

import React from 'react';

export function PortfolioTimeline() {
    return (
        <section className="flex items-center justify-center bg-gradient-to-b from-gray-900 to-blue-800 min-h-screen">
            <ol className="relative border-l border-sky-500 ">
                <li className="mb-10 ml-8">
                    <span
                        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"></path></svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">D.F. Malherbe High School</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2014 - 2018
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                </li>
                <li className="mb-10 ml-8">
                    <span
                        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"></path></svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Nelson Mandela University
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2020 - 2022
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Cum Laude Diploma Software Development</p>
                </li>
                <li className="ml-8">
                    <span
                        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"></path></svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">CompRSA
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022 - Present
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Junior Software Engineer</p>
                </li>
            </ol>
        </section>
    );
}
