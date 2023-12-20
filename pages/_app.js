import '../styles/globals.css';

import NavFooter from '@/components/NavFooter';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div>
                <main>
                    <Component {...pageProps} />
                </main>
               <NavFooter/>
            </div>
        </>
    );
}

export default MyApp;
