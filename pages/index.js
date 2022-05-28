import Head from 'next/head';
import InputLibrary from '~/components/InputLibrary';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Aerolex</title>
                <meta name="Aerolex" content="Aerolex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="home">
                    <div className='content'>
                        <InputLibrary />
                        <button className="btn-secondary ">
                            Create Account
                        </button>
                        <button className="btn-danger-lg">
                            Login
                        </button>
                    </div>
                </div>
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
