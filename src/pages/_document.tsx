import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import Script from 'next/script';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }
  render() {
    // const { locale } = this.props.__NEXT_DATA__;
    // const dir = getDirection(locale);
    return (
      // <Html dir={dir}>
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=optional"
            rel="stylesheet"
          />
          <meta
            name="facebook-domain-verification"
            content="f1ebvua8wgnah6py8mnq0jxplhxx1j"
          />
          <script
            type="text/javascript"
            src="https://track.adform.net/Serving/TrackPoint/?pm=2050973&amp;ADFPageName=WebsiteName%7CSectionName%7CSubSection%7CPageName&amp;ADFdivider=%7C&amp;ord=996274480400&amp;ADFtpmode=2&amp;loc=https%3A%2F%2Fgourmetlavanguardia.com%2F&amp;Set1=es-ES%7Ces-ES%7C3440x1440%7C24"
          ></script>
          <script
            type="text/javascript"
            async={true}
            src="https://track.adform.net/serving/scripts/trackpoint/async/"
          ></script>
          <script
            src="https://diffuser-cdn.app-us1.com/diffuser/diffuser.js"
            async={true}
          ></script>

          <meta
            name="keywords"
            content="gourmet la vanguardia, botiga gourmet, tienda gourmet, gourmet, club de vins la vanguardia, club de vinos la vanguardia, delicatessen, alta gastronomia, alta gastronomía, productos selectos, productes selectes, imperia, riera ordeix, alemany, rummo, flamigni, capa negra, consorcio del jabugo, anxoves de l'escala, caviaroli, paco lafuente, amer, antinori, can mabres, chivite, gavottes, jules destrooper, paul and pippa, taittinger, the fine cheese co., walkers, fever-tree, citadelle, magellan, gin tonic"
          />
          {/* <meta
            name="description"
            content="Tienda Online de Productos Gourmet de La Vanguardia. Botiga Online de Productes Gourmet de La Vanguardia"
          />
          <meta property="og:title" content="Gourmet La Vanguardia" />

          <meta
            property="og:description"
            content="Tienda Online de Productos Gourmet de La Vanguardia. Botiga Online de Productes Gourmet de La Vanguardia"
          /> */}

          <script
            type="text/javascript"
            src="https://prism.app-us1.com?a=650657655&amp;u=https%3A%2F%2Fgourmetlavanguardia.com%2F&amp;t=828ee8ad-2244-4441-9214-f013a49c7254"
            async={true}
          ></script>
          <meta
            httpEquiv="origin-trial"
            content="A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
          />
          <script
            type="text/javascript"
            src="https://trackcmp.net/t_prism_sitemessages.php?trackid=650657655&amp;prismid=828ee8ad-2244-4441-9214-f013a49c7254&amp;url=https%3A%2F%2Fgourmetlavanguardia.com%2F"
            async={true}
          ></script>
          <meta
            httpEquiv="origin-trial"
            content="A9+ldib+sKhGj2FcIjq5GnvBZFuIiXID0+NkE6k7cEk71MhaHFGqo3wUlUFmZ6d9w0KPwx9UxGiCTYWtRnTGDQkAAACAeyJvcmlnaW4iOiJodHRwczovL2NyaXRlby5uZXQ6NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY4MDY1Mjc5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="
          />
          <meta
            httpEquiv="origin-trial"
            content="AzLNuh8GFzfIOcwvhEg7Ymr7YCzlYVTKeD7i2iETABbRf+sL2FAx+r+HlTtxSi1zgUFxBlJVoxgLjuhqiwTjAw4AAACAeyJvcmlnaW4iOiJodHRwczovL2NyaXRlby5jb206NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY4MDY1Mjc5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N974FG8"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
