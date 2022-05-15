if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import '@/public/styles/font.css';
import '@/public/styles/global.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import Nav from '@/components/Nav';
import { SEO } from '@/components/SEO';
import { TagsProvider } from '@/components/tags/TagsContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MD6N0LS362" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          {/* @ts-ignore */}
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MD6N0LS362', {
            page_path: window.location.pathname
          });
          `
          }}
        />
      </Head>
      <SEO />
      <div className="w-full h-full">
        <TagsProvider>
          <Nav />
          <main className="w-full">
            <Component {...pageProps} />
          </main>
        </TagsProvider>
      </div>
    </>
  );
};

export default MyApp;
