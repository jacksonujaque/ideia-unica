// pages/_app.js

import './Home.css'; // Substitua pelo caminho correto do seu arquivo CSS global
import Index from './index.js'; // Importe o index.js ou o componente desejado

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <Index />
    </Component>
  );
}

export default MyApp;

