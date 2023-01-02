import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import InvoiceContextProvider from '../contexts/Invoice'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <InvoiceContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </InvoiceContextProvider>
    </Provider>
  )
}
