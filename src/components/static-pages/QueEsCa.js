import Head from "next/head";

const QueEsCa = () => {
  return (
    <div>
      <Head>
        <title>Gourmet La Vanguardia - Què és</title>

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
        <h2>Què és Gourmet La Vanguardia</h2>
        <p>
          Gourmet La Vanguardia és la passió per la gastronomia i per
          la viticultura, per tots aquells productes d'alta qualitat que són un
          autèntic plaer per al paladar. A través d'aquesta passió, et portem
          els millors productes Gourmet directament a casa teva. Ens pots trucar
          al 935 500 105 o entrar a gourmetlavanguardia.com i fer la teva
          comanda d'entre tota la selecció que oferim.
        </p>
        <h2>Gourmet La Vanguardia ofereix:</h2>
        <ul>
          <li>
            <strong>La Selecció Gourmet:</strong>cada mes preparem un tast de
            productes gourmet de les millors marques del mercat a un preu molt
            especial.
          </li>
          <li>
            <strong>Club de Vins:</strong>és el servei d'enviament mensual de
            Gourmet La Vanguardia que et permetrà conèixer i gaudir cada mes de
            les millors collites i denominacions d'origen a preus increïbles.
          </li>
          <li>
            <strong>Botiga Gourmet:</strong> t'oferim una selecció acurada de
            productes d'alta gastronomia. Conserves, envasats, frescos, curats,
            fumats, del celler, dolços... tot el que et fa falta per tenir a
            casa un autèntic rebost gourmet.
          </li>
        </ul>
        <h4>Som especialistes en productes Gourmet.</h4>
      </div>
    </div>
  );
};

export default QueEsCa;
