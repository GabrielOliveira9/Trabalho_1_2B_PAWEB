import Link from "next/link";

const Home = async ({}) => {
    return (
        <main className="h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24 text-gray-800">
                Aplicação que permite visualizar os produtos cadastrados na Aplicação doSitio.
            </h1>
            <div className='flex justify-center w-full'>
                <Link href="/login" className='inline-block px-6 py-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold mb-2 transition duration-300 ease-in-out'>
                  Login
                </Link>
            </div>
        </main>
    );
};

export default Home;
