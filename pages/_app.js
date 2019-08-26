import App from 'next/app'
import Head from 'next/head'
import { AppProvider } from '@shopify/polaris'
import { Provider } from '@shopify/app-bridge-react'
import '@shopify/polaris/styles.css'
import Cookies from 'js-cookie'

class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        const config = {
            apiKey: API_KEY,
            shopOrigin: Cookies.get('shopOrigin'),
            forceRedirect: true,
        }
        return (
            <>
                <Head>
                    <title>Merunas Shopify App</title>
                    <meta charSet="utf-8"/>
                </Head>
                <Provider config={config}>
                    <AppProvider>
                        <Component {...pageProps} />
                    </AppProvider>
                </Provider>
            </>
        )
    }
}

export default MyApp
