import Head from "next/head";

const QuienesSomosCa = () => {
  return (
    <div>
      <Head>
        <title>Gourmet La Vanguardia - Qui som</title>

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
        <h2>Equip Gourmet La Vanguardia</h2>
        <p>
          Darrera de Gourmet La Vanguardia hi ha un equip de professionals de
          diferents àmbits amb una cosa en comú: la passió per l'alta
          gastronomia i la viticultura. MONDOFINO és l'empresa que està al darrere
          d'aquest projecte, un grup d'especialistes en marketing, noves
          tecnologies i el mercat gourmet que de la mà de La Vanguardia té com a
          objectiu oferir una autèntica experiència gastronòmica als seus
          clients.
        </p>
      </div>
    </div>
  );
};

export default QuienesSomosCa;
