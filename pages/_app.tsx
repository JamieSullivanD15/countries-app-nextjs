import '../styles/globals.scss';

import Layout from '../components/Layout/Layout';

const MyApp = ({ Component, pageProps }) => (
  <Layout {...pageProps}>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
