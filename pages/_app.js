import App from 'next/app'
import Head from 'next/head'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/styles.css'

class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <title>Merunas Shopify App</title>
                    <meta charSet="utf-8"/>
                </Head>
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </>
        )
    }
}

export default MyApp
