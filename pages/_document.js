import Document, { Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from "theme-ui";

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