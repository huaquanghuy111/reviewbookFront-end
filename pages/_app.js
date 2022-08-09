import Layout from '../components/Layout'
import ProtectRoute from '../components/ProtectRoute'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </Layout>
  )
}

export default MyApp
