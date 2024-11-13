export default function Body() {
    return (
        <section >
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Gita Verse of the Day
                </h1>
                <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन
                </p>
                <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
                The system of doing work to gain reward is primitive and we should all rise above that and focus on doing our karma without wishing for any results
                </p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2 justify-items-center">
                    <div className="text-center">
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                        ISKCON - Ramanuja
                        </h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                        Ramanuja Gita Bhashya
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                        Gurudev Sri Sri Ravi Shankar
                        </h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                        Bhagavad Gita
                        </p>
                    </div>
                    </div>
            </div>
        </section>
    );
}