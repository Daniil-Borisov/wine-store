import Head from "next/head";

const QuienesSomos = () => {
  return (
    <div>
      <Head>
        <title>Gourmet La Vanguardia - Quiénes somos</title>

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
        <h2>Equipo Gourmet La Vanguardia</h2>
        <p>
          Detrás de Gourmet La Vanguardia hay un equipo de profesionales de
          diferentes ámbitos con una cosa en común: la pasión por la alta
          gastronomía y por la viticultura. MONDOFINO es la empresa que está
          destrás de este proyecto, un grupo de especialistas en marketing,
          nuevas tecnologías y el mercado gourmet que, de la mano de La
          Vanguardia, tiene como objetivo ofrecer una auténtica experiencia
          gastronómica a sus clientes.
        </p>
      </div>
    </div>
  );
};

export default QuienesSomos;
