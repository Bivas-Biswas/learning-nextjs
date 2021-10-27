import 'styles/globals.css'
import 'styles/layout.css'
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

    if (Component.getLayout) {
        return Component.getLayout(
            <>
                <Head>
                    <title>Global Head tag</title>
                    <meta name={'description'} content={'Test Global head tag'}/>
                </Head>
                <Component {...pageProps}/>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>Global Head tag</title>
                <meta name={'description'} content={'Test Global head tag'}/>
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
