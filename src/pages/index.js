import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://ibb.co/BfHpwrk" />
        <title>{title || 'Sulayman Ibrahim'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Sulayman Portfolio'} />
      </Helmet>
      <App />
    </>
  );
};
