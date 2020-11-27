import '../styles/global.css';
import { Global } from '@emotion/react';
import xw from 'xwind';

const App = ({ Component, pageProps }) => (
  <>
    <Global styles={xw`XWIND_GLOBAL`} />
    <Component {...pageProps} />
  </>
);

export default App;
