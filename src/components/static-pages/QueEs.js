import Head from "next/head";

const QueEs = () => {
  return (
    <div>
      <Head>
        <title>Gourmet La Vanguardia - Qué es</title>

        <script src="https://cdn.tailwindcss.com" />
      </Head>
      <style jsx>{`
        li {
          margin-left: 40px;
          margin-top: 1em;
        }
        p {
          margin: 1em 0;
        }
        h2 {
          font-size: 2em;
        }
        h3,
        h4 {
          font-size: 1.8em;
        }
        h5 {
          font-size: 1.5em;
        }
        thead td {
          color: #fff;
          background-color: #666;
        }
        table,
        td {
          border: 1px solid #ccc;
        }
      `}</style>
      <div className="avisolegal p-8 mx-auto max-w-[1440px] prose">
        <h2>Qué es Gourmet La Vanguardia</h2>
        <p>
          Gourmet La Vanguardia es la pasión por la gastronomía y por la
          viticultura, por todos aquellos productos de alta calidad que son un
          auténtico placer para el paladar. A través de esta pasión, te llevamos
          los mejores productos Gourmet directamente a tu casa. Nos puedes
          llamar al 935 500 105 o entrar en gourmetlavanguardia.com y hacer tu
          pedido de entre toda la selección que ofrecemos.
        </p>
        <h2>Gourmet La Vanguardia ofrece:</h2>
        <ul>
          <li>
            <strong>La Selección Gourmet:</strong> cada mes preparamos una cata
            de productos gourmet de las mejores marcas del mercado a un precio
            muy especial.
          </li>
          <li>
            <strong>Club de Vinos:</strong> es el servicio de envío mensual de
            Gourmet La Vanguardia que te permitirá conocer y disfrutar cada mes
            de las mejores cosechas y denominaciones de origen a precios
            increíbles.
          </li>
          <li>
            <strong>Tienda Gourmet:</strong> te ofrecemos una cuidada selección
            de productos de alta gastronomía. Conservas, envasados, frescos,
            ahumados, de la bodega, dulces… todo lo que te hace falta para tener
            en casa una auténtica despensa gourmet.
          </li>
        </ul>
        <h4>Somos especialistas en productos Gourmet.</h4>
      </div>
    </div>
  );
};

export default QueEs;
