import Document, { Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from "theme-ui";

// overrides custom document
// is rendered in the server side
// is used to change the initial server side rendered document markup
// commonly ised to implement server side rendering for css-in-js libraries like styled-components or emotion, 
// styled-jsx is included with NextJS by default.
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return(
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="description" content="La Fleur" />
          <meta name="keywords" content="laflerur flowers blog" />
          <meta name="author" content="Linda" />
          {/* <link rel="stylesheet" href="/static/styles.css" /> */}
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
      </body>
      </Html>
    );
  }
}

export default MyDocument;