import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ProductosGourmetOnlineADomiciolio = () => {
  return (
    <div>
      <Head>
        <title>
          ▷ Productos gourmet online a domicilio | Los mejores alimentos
          delicatessen en tu casa
        </title>
        <meta
          name="description"
          content="¿Te consideras un experto gastrónomo, un sibarita y estás a la última en tendencias gourmet? Gourmet La Vanguardia te lleva a casa una amplia selección de productos y packs gourmet de las mejores marcas. Compra ahora online y recíbelo en tu domicilio. ✅"
        />
        <meta
          name="keywords"
          content="gourmet, gastrónomo, sibarita, exquisito, bon vivant, epicúreo producto/s, artículos, existencias, género, mercaderías, mercancías a domicilio, en casa, entregas a domicilio, online, en línea, productos gourmet a domicilio, alimentos gourmet a domicilio"
        />
      </Head>
      <style jsx>{`
        h2 {
          display: block;
          font-size: 1.5em;
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          font-weight: bold;
        }
        body {
          margin: 0;
          padding: 0;
        }

        .mobile {
          display: none;
        }

        #banner-top {
          text-align: center;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url('img-landing-a-domicilio/productos-gourmet-a-domicilio.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          padding: 40px;
          color: white;
        }

        #banner-top h1 {
          font-size: 4em;
        }

        #banner-top p {
          width: 50%;
          margin: 0 auto;
        }

        #categories {
          text-align: center;
        }

        .row {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          margin-bottom: 80px;
        }

        .row2 {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: space-evenly;
          -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
          margin-bottom: 80px;
        }

        .col {
          width: 40%;
          height: 300px;
          /* background: url('https://via.placeholder.com/500x200.png'); */
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;

          margin-left: 20px;
          margin-right: 20px;
          transition: 0.6s;
          transition-timing-function: ease;
          border-radius: 4.5px;
        }

        .col a {
          text-decoration: none;
          color: #242c3b;
          width: 100%;
          height: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          overflow: hidden;
        }

        .col a:hover h3 {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
          background-color: rgba(255, 255, 255, 1);
        }

        .col:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }

        #cat1 {
          background: url('/img-landing-a-domicilio/CATEGORIA CHARCUTERIA.jpg');
        }
        #cat2 {
          background: url('/img-landing-a-domicilio/CATEGORIA-FRESCOS.jpg');
        }
        #cat3 {
          background: url('/img-landing-a-domicilio/CATEGORIA-BODEGA.jpg');
        }
        #cat4 {
          background: url('/img-landing-a-domicilio/CATEGORIA CONSERVAS.jpg');
        }
        #cat5 {
          background: url('/img-landing-a-domicilio/CATEGORIA-LACTEOS.jpg');
        }
        #cat6 {
          background: url('/img-landing-a-domicilio/CATEGORIA-DULCES.jpg');
        }
        #cat7 {
          background: url('/img-landing-a-domicilio/CATEGORIA SNACKS.jpg');
        }
        #cat8 {
          background: url('/img-landing-a-domicilio/CATEGORIA-PASTA-Y-ARROZ.jpg');
        }
        #cat9 {
          background: url('/img-landing-a-domicilio/CATEGORIA-CONDIMENTOS.jpg');
        }
        #cat10 {
          background: url('/img-landing-a-domicilio/CATEGORIA ACEITES Y VINAGRES.jpg');
        }

        .col h3 {
          font-size: 2em;
          padding: 10px;
          background-color: rgba(255, 255, 255, 0.5);
          letter-spacing: 5px;
          transition: 0.6s;
          transition-timing-function: ease;
        }

        .banner img {
          max-width: 100%;
          width: auto;
          margin-bottom: 120px;
        }

        .row2 h2 {
          font-size: 3em;
          margin: 0;
        }

        .col2 {
          width: 40%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }

        .col2 img {
          width: auto;
          max-width: 100%;
          position: -webkit-sticky;
          position: sticky;
          top: 40px;
        }

        .sidebar {
          background: #e0e1e1;
          float: right;
          width: 300px;
          text-align: center;
          padding: 20px;
        }

        .sidebar input {
          padding: 10px;
        }

        #title-sidebar {
          font-size: 2em;
          margin: 0;
          text-align: center;
        }

        .content {
          margin: auto;
          width: 80%;
          padding: 0 40px;
          /* margin-left: 20%; */
          /* margin-right: 50%; */
        }

        .content h2 {
          font-size: 3em;
          margin: 0;
        }

        .content p {
          padding-left: 30px;
        }

        p {
          text-align: justify;
          font-size: 1.2em;
          line-height: 35px;
        }

        @media only screen and (max-width: 900px) {
          .mobile {
            display: block;
          }

          .desktop {
            display: none;
          }

          .sueps {
            display: none;
          }

          .topheader {
            background-position: 30% 53% !important;
            height: 48px !important;
          }

          #banner-top h1 {
            font-size: 2em;
          }

          .row2 h2 {
            font-size: 2em;
          }

          .content h2 {
            font-size: 2em;
          }

          #banner-top p {
            font-size: 0.8em;
            line-height: 25px;
          }

          #banner-top p {
            width: 100%;
          }

          .row {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin-bottom: 40px;
          }

          .col {
            width: 90%;
            margin: 0 auto;
            height: 200px;
          }

          .row .col:nth-child(1) {
            margin-bottom: 40px;
          }

          .banner {
            position: relative;
          }

          .banner button {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 10%;
            padding: 20px 40px;
            font-size: 1.5em;
            width: 90%;
          }

          .row2 {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }

          .col2 {
            width: 90%;
            margin: auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }

          .row2:nth-child(even) .col2:nth-child(1) {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
          }

          .content {
            width: 90%;
            margin: 0 auto;
            padding: 0;
          }
        }
      `}</style>
      <div className="wrapper w100">
        <section className="cesta">
          <div className="clear" />
          <div id="landing">
            <div id="banner-top">
              <h1>Productos gourmet online a domicilio</h1>
              <p>
                ¿Te consideras un experto gastrónomo, una de esas personas a las
                que les encantan los productos delicatesen y que está a la
                última en tendencias gourmet? Gourmet La Vanguardia te lleva a
                casa una amplia selección de vinos, productos gourmet y packs de
                las mejores marcas. Compra ahora online y recíbelo en tu
                domicilio.
              </p>
            </div>
            <div id="categories">
              <h2>Las Categorias más gourmet con envío a domicilio</h2>
              <p style={{ textAlign: 'center' }}>
                Te llenamos la despensa con los productos más gourmet.
              </p>
              <div className="row">
                <div className="col" id="cat1">
                  <span role="img" aria-label="comprar charcuteria online">
                    {' '}
                  </span>
                  <a href="https://gourmetlavanguardia.com/categoria/4/charcuteria-">
                    <h3>CHARCUTERIA</h3>
                  </a>
                </div>
                <div className="col" id="cat2">
                  <span
                    role="img"
                    aria-label="comprar productos frescos online"
                  >
                    {' '}
                  </span>
                  <a href="https://gourmetlavanguardia.com/categoria/10278/producto-fresco">
                    <h3>FRESCOS</h3>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col" id="cat3">
                  <span role="img" aria-label="comprar vino online">
                    {' '}
                  </span>
                  <a href="https://gourmetlavanguardia.com/categoria/8/celler">
                    <h3>BODEGA</h3>
                  </a>
                </div>
                <div className="col" id="cat4">
                  <span role="img" aria-label="conservas a domicilio">
                    {' '}
                  </span>
                  <a href="https://gourmetlavanguardia.com/categoria/10280/conservas-de-tierra">
                    <h3>CONSERVAS</h3>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col" id="cat5">
                  <span role="img" aria-label="leche y quesos">
                    {' '}
                  </span>
                  <a href="https://gourmetlavanguardia.com/categoria/10301/pastoret---lacteos">
                    <h3>LÁCTEOS</h3>
                  </a>
                </div>
                <div className="col" id="cat6">
                  <span role="img" aria-label="comprar dulces online">
                    {' '}
                  </span>
                  <a href="https://gourmetlavanguardia.com/categoria/7/dulces-">
                    <h3>DULCES</h3>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col" id="cat7">
                  <span role="img" aria-label="snacks">
                    {' '}
                  </span>
                  <a href="https://gourmetlavanguardia.com/categoria/10287/snacks-y-tostadas">
                    <h3>SNACKS</h3>
                  </a>
                </div>
                <div className="col" id="cat8">
                  <span role="img" aria-label="pasta y arroz">
                    {' '}
                  </span>
                  <a href="https://gourmetlavanguardia.com/categoria/10217/pasta-y-arroz">
                    <h3>PASTA Y ARROZ</h3>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col" id="cat9">
                  <span role="img" aria-label="condimentos">
                    {' '}
                  </span>
                  <a href="https://gourmetlavanguardia.com/categoria/10303/sabores-del-mundo">
                    <h3>CONDIMENTOS</h3>
                  </a>
                </div>
                <div className="col" id="cat10">
                  <span role="img" aria-label="aceites y vinagres">
                    {' '}
                  </span>
                  <a href="https://gourmetlavanguardia.com/categoria/6/aceite-y-condimentos">
                    <h3>ACEITES Y VINAGRES</h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="banner">
              <img
                className="desktop"
                src="/img-landing-a-domicilio/vinoteca.jpg"
                alt="entrega de vinos a domicilio"
              />
              <img
                className="mobile"
                src="/img-landing-a-domicilio/vinoteca.jpg"
                alt="entrega de vinos a domicilio"
              />
              {/* <button class="mobile">CTA</button> */}
            </div>
            <div id="blog">
              <div className="row2">
                <div className="col2">
                  <h2>Lo mejor de la gastronomía gourmet directa a tu mesa</h2>
                  <p>
                    Deja espacio en tu despensa, busca sitio en tu nevera y
                    prepara la mesa para una ocasión especial. Nosotros nos
                    encargamos de hacerte llegar la mejor selección de
                    gastronomía gourmet hasta tu casa. Colaboramos con las
                    mejores marcas del sector, visitamos grandes y pequeñas
                    bodegas del país; para llevarte lo mejor en alta gastronomía
                    y una oferta de vinos exclusiva al mejor precio.
                    <br />
                    Descubre todo nuestro catálogo de productos gourmet y
                    bodega, elige el que más te guste y te lo llevamos
                    directamente a tu mesa. Siempre hay una buena ocasión para
                    una comida o cena gourmet.
                  </p>
                </div>
                <div className="col2">
                  <img
                    src="/img-landing-a-domicilio/Tostada-con-sardinas.jpg"
                    alt="tapas con sardinas"
                  />
                </div>
              </div>
              <div className="row2">
                <div className="col2">
                  <img
                    src="/img-landing-a-domicilio/productos-gourmet-online-domicilio.jpg"
                    alt="Un menú preparado con productos gourmet online a domicilio"
                  />
                </div>
                <div className="col2">
                  <h2>Delicatesen a domicilio, ¿cómo preparar un buen menú?</h2>
                  <p>
                    Desde las{' '}
                    <a href="https://gourmetlavanguardia.com/categoria/2/conservas-de-mar">
                      conservas más gourmet
                    </a>{' '}
                    hasta productos más cotidianos como la{' '}
                    <a href="https://gourmetlavanguardia.com/categoria/10297/harinas">
                      harina
                    </a>
                    ,{' '}
                    <a href="https://gourmetlavanguardia.com/categoria/10217/pasta-y-arroz">
                      el arroz o las pastas
                    </a>
                    , pero con un toque premium. Todo ello te ayudará a elaborar
                    un menú de nivel para tus invitados. Tampoco hay que
                    olvidarse de algún dulce (como nuestros{' '}
                    <a href="https://gourmetlavanguardia.com/categoria/10186/turrones">
                      turrones gourmet
                    </a>
                    ) para cerrar la sobremesa. Visita nuestra tienda online y
                    descubre montones de ideas delicatesen para sorprender a
                    cualquier persona.
                    <br />
                    Si lo que buscas es algo para un plato principal te
                    ofrecemos productos frescos a domicilio. Por otro lado, si
                    lo que quieres es algo de picoteo, te invitamos a descubrir
                    nuestros{' '}
                    <a href="https://gourmetlavanguardia.com/categoria/10287/snacks-y-tostadas">
                      snacks y tostadas
                    </a>
                    , que combinan a la perfección con otros elementos como las
                    anchoas o el foie. Con todo esto, tendrás una cena gourmet a
                    domicilio de nivel.
                    <br />
                    ¿Postre y café? Sí por favor. Y es que también podemos
                    enviarte a casa los mejores lácteos y el café más premium.
                    Porque una comida gourmet lo ha de ser desde el principio
                    hasta el final.
                  </p>
                </div>
              </div>
              <div className="row2">
                <div className="col2">
                  <h2>
                    Los mejores delicatesen a domicilio también pueden ser
                    precocinados
                  </h2>
                  <p>
                    ¿Sabías que los alimentos gourmet también pueden ser
                    preparados en pocos minutos? En Gourmet La Vanguardia te
                    damos la posibilidad de comprar los mejores productos
                    gourmet precocinados, para que solo tengas que servir al
                    instante y comer.
                    <br />
                    Prueba nuestra selección de{' '}
                    <a href="https://gourmetlavanguardia.com/categoria/10314/legumbres-y-precocinados">
                      legumbres y precocinados
                    </a>{' '}
                    gourmet y prepara una cena en pocos minutos.
                    <br />
                    ¿Te gusta la comida italiana delicatesen? Prepárate una
                    pizza con una de nuestras bases y añádele otros elementos
                    como foie o ahumados.
                  </p>
                </div>
                <div className="col2">
                  <img
                    src="/img-landing-a-domicilio/productos-delicatessen-online-domicilio.jpg"
                    alt="Una masa de pizza precocinada también puede ser delicatesen"
                  />
                </div>
              </div>
              <div className="row2">
                <div className="col2">
                  <img
                    src="/img-landing-a-domicilio/3r h2.jpg"
                    alt="queso fundido con calabazin"
                  />
                </div>
                <div className="col2">
                  <h2>
                    Elige entre la gran variedad de artículos gourmet que te
                    ofrecemos y disfrútalos con quien quieras mañana mismo
                  </h2>
                  <p>
                    En pareja, en familia, entre amigos, en el afterwork con
                    compañeros de trabajo o simplemente para darte un capricho
                    solo. Porque tú y los tuyos os merecéis lo mejor y al mejor
                    precio. Además, dependiendo de la cantidad de productos que
                    compres, el envío te puede salir totalmente gratis.
                    ¡Sumérgete en nuestro catálogo y sorprende a tus seres
                    queridos!
                    <br />
                    Disfruta de la amplia gama de productos gourmet que ha
                    seleccionado nuestro equipo de expertos y, lo mejor de todo,
                    te llevamos tu pedido donde nos digas en tan sólo 24/48h.
                  </p>
                </div>
              </div>
              <div className="row2">
                <div className="col2">
                  <h2>
                    Ponemos a tu alcance una gran variedad de producto gourmet
                    para disfrutar a domicilio
                  </h2>
                  <p>
                    Una de nuestras especialidades son los vinos. Somos amantes
                    del buen vino. Por eso trabajamos con un equipo de enólogos,
                    sommeliers y expertos que recorren grandes y pequeñas
                    bodegas para crear selecciones exclusivas y crear un
                    catálogo con grandes nombres, pequeñas joyas por descubrir y
                    vinos difíciles de conseguir en la distribución tradicional.
                    <br />
                    Nuestro objetivo es ofrecer una oferta inmejorable para que
                    puedas crear en tu casa una bodega de auténtico experto.
                    <br />
                    Tintos, vinos blancos y rosados, cava y champagne, de la
                    bodega a tu domicilio. Además, ponemos a tu disposición
                    accesorios para los amantes del vino.
                  </p>
                  <p>
                    Tanto si eres una persona experta en la materia como si eres
                    una recién iniciada, disfrutarás seguro con nuestras
                    referencias y recomendaciones.
                  </p>
                </div>
                <div className="col2">
                  <img
                    src="/img-landing-a-domicilio/mesa-con-aperitivos-ortiz.jpg"
                    alt="articulos gourmet a domicilio"
                  />
                </div>
              </div>
              <div className="row2">
                <div className="col2">
                  <img
                    src="/img-landing-a-domicilio/productos-gourmet-delicatessen-online-domicilio.jpg"
                    alt="Una selección de los mejores delicatesen en línea a domicilio"
                  />
                </div>
                <div className="col2">
                  <h2>
                    Descubre los mejores{' '}
                    <strong>delicatesen en línea a domicilio</strong>
                  </h2>
                  <p>
                    ¿Te gustaría recibir en tu domicilio los mejores productos
                    delicatesen? Imagínate un vermut con unas anchoas de la
                    Escala, el mejor vermut de Reus o unas patatas fritas
                    premium. Todo ello, preparado con mimo y puesto en tu mesa
                    con apenas un par de clicks. En{' '}
                    <a href="https://gourmetlavanguardia.com/">
                      Gourmet La Vanguardia
                    </a>{' '}
                    encontrarás los mejores productos delicatesen tanto de
                    ámbito local, nacional como internacional. Uno de nuestros
                    principales valores es el de potenciar el mercado de
                    proximidad, por ello siempre encontraras productos gourmet
                    elaborados muy cerca de ti.
                    <br />
                    Encuentra tu comida gourmet en línea a domicilio en nuestra
                    tienda on-line y no te compliques.
                  </p>
                </div>
              </div>
              <div className="banner">
                <img
                  className="desktop"
                  src="/img-landing-a-domicilio/Comprar-dulces-online.jpg"
                  alt="catànies"
                />
                <img
                  className="mobile"
                  src="/img-landing-a-domicilio/Comprar-dulces-online.jpg"
                  alt="catànies"
                />
                {/* <button class="mobile">CTA</button> */}
              </div>
              {/* <div class="sidebar sticky desktop">
                <p id="title-sidebar">¿Te encanta el <br><strong>mundo gourmet</strong>?</p>
                <p>Subscríbete a la newsletter más sabrosa. Recibiras semanalmente nuevos productos deliciosos para hacer de tu paladar, aguas.</p>
                <input type="email" name="" id="" placeholder="Email">
            </div> */}
              <div className="content">
                <div className="row3">
                  <h2>1.) ¿Por qué pedir productos gourmet a domicilio?</h2>
                  <p>
                    Porque ahora es un buen momento para disfrutar de una comida
                    o una cena de alta gastronomía en casa. No renuncies a tu
                    faceta de bon vivant, no entierres al epicúreo que llevas
                    dentro. Si no puedes acudir a tu restaurante favorito
                    nosotros te ofrecemos la posibilidad de seguir disfrutando
                    de la buena comida, de darte un capricho porque te lo
                    mereces, de compartir con los más íntimos una comida
                    especial. Además, no hay nada más grato en esta vida que
                    cocinar para los tuyos y recibir su enhorabuena. Con
                    nuestros productos de calidad y una buena mano en la cocina,
                    el éxito estará garantizado. No te prives de una gran
                    celebración.
                    <br />
                    No olvides tus momentos de placer gastronómico, nosotros te
                    llevamos tus artículos gourmet favoritos a casa para
                    continuar disfrutando de las pequeñas cosas de la vida.
                  </p>
                </div>
                <div className="row3">
                  <h2>2.) ¿Cuánto tardaría en recibir mi pedido en casa?</h2>
                  <p>
                    Uno de nuestros objetivos, una de nuestras casi obsesiones
                    es que tu experiencia en Gourmet La Vanguardia sea
                    excelente. Por eso, ponemos muchos esfuerzos en que entre
                    que realizas tu pedido y recibes la mercancía en casa pase
                    el mínimo tiempo posible. Trabajamos duro para que todas las
                    mercancías salgan de nuestro almacén poco después de recibir
                    los pedidos y así llegar a las casas de nuestros clientes en
                    24 horas, aunque en algunas ocasiones por las
                    características de algún género sobre todo en el caso de los
                    frescos, puede llegar a 48 horas.
                    <br />
                    Si vives en Barcelona o alrededores, también tienes la
                    opción de comprar tus productos delicatesen y recogerlos por
                    tu cuenta a través de nuestro servicio Click&amp;Collect. De
                    esta manera, podrás disfrutar antes de esa cena y/o comida
                    gourmet. Si lo que quieres es comodidad, ponemos a tu
                    disposición un envío económico: 5.90€ por pedido (GRATIS si
                    tu compra supera los 99€). Come bien, comer gourmet y como y
                    cuando quieras.
                  </p>
                </div>
                <div className="row3">
                  <h2>3.) ¿Dónde puedo comprar productos gourmet online?</h2>
                  <p>
                    En nuestra página web puedes acceder a todo nuestro catálogo
                    de productos gourmet. Navega por nuestras categorías y
                    descubre los productos, selecciones, packs y ofertas que
                    ponemos a tu disposición. Ibéricos, embutidos premium y
                    quesos, foie, salmón, pasta y arroz, conservas premium de
                    mar y lo mejor de la tierra, condimentos y salsas gourmet,
                    productos frescos, lácteos y para la bodega, vino, cava,
                    champagne francés, destilados y mixers premium.
                    <br />
                    Además, si lo prefieres puedes realizar tus pedidos por
                    teléfono llamando al 935 500 105, donde te atenderemos
                    gustosamente para que en cinco minutos tengas tu pedido
                    hecho y listo para ser preparado para su envío. Asimismo, si
                    tienes cualquier duda al respecto, también puedes
                    contactarnos a través de{' '}
                    <a href="https://gourmetlavanguardia.com/atencion">
                      este formulario
                    </a>
                    .
                  </p>
                </div>
                <div className="row3">
                  <h2>
                    4.) ¿Quién realiza la selección de nuestros exquisitos
                    productos?
                  </h2>
                  <p>
                    Nos sentimos especialmente satisfechos de contar con la
                    colaboración de los mejores expertos en gastronomía y
                    enología, sin ellos nuestro proyecto no sería el mismo. Son
                    ellos los que nos ayudan en la selección de lo excelente
                    entre lo mejor, siempre buscando productos de calidad
                    premium tanto de proximidad, dando importancia al Km 0,
                    grandes productores nacionales como productos de importación
                    de la mejor calidad. Trabajamos constantemente para
                    ofrecerte los mejores productos tradicionales, sin
                    olvidarnos de aquellos que son referencia gastronómica en
                    sectores de vanguardia. Y es que para nosotros, en la
                    variedad está el gusto.
                  </p>
                </div>
                <div className="row3">
                  <h2>
                    5.) ¿Cómo se envían los productos frescos y de charcutería?
                  </h2>
                  <p>
                    Nuestros operadores logísticos disponen de una categoría de
                    envío en frío para enviar a tu domicilio todo el género que
                    precisa de este requisito. Nuestro objetivo es que los
                    productos fríos lleguen a tu casa en las condiciones óptimas
                    y directos para consumir. Nuestra experiencia a lo largo de
                    los años nos consolida en este tipo de servicio. Te
                    aseguramos de que los productos que adquieras con nosotros
                    te llegarán en las mejores condiciones posibles para su
                    consumo. Desde nuestros almacenes a tu mesa en un suspiro.
                  </p>
                </div>
                <div className="row3">
                  <h2>
                    6.) Vivo fuera de España, ¿puedo realizar una compra online?
                  </h2>
                  <p>
                    Por el momento, desde Gourmet La Vanguardia solo podemos
                    enviar nuestros productos gourmet a todos los rincones de la
                    Península e Islas Baleares, por lo que podemos decir que tan
                    solo realizamos envíos dentro de España (exceptuando
                    Canarias, Ceuta y Melilla). Si tienes cualquier duda acerca
                    de nuestra política de envíos nacionales puedes ponerte en
                    contacto con nosotros a través del{' '}
                    <a href="https://gourmetlavanguardia.com/atencion">
                      siguiente formulario
                    </a>
                    .
                    <br />
                    Recuerda que si resides en Barcelona siempre puedes pasar a
                    recoger el pedido físicamente a través de nuestro servicio
                    Click &amp; Collect / Click &amp; Car.
                  </p>
                </div>
                <div className="row3">
                  <h2>7.) Envío de vino a domicilio ¿cómo funciona?</h2>
                  <p>
                    Funciona exactamente igual que si compraras cualquier otro
                    producto. Tan solo tienes que acceder a nuestra sección de
                    bodega para descubrir los mejores vinos online con los que
                    acompañar tu comida gourmet. Y es que un buen maridaje eleva
                    la experiencia gourmet a otro nivel.
                    <br />
                    También puedes echar un vistazo a nuestra Vinoteca en Casa,
                    la mejor manera de descubrir nuevos vinos al mejor precio.
                    Descubre la selección mensual propuesta por nuestros
                    enólogos. Date de alta y recibe cada mes esta selección
                    especial sin ningún tipo de permanencia, y si el mes que
                    viene no te convence la selección siempre puedes saltarla.
                    <br />
                    Ah, y también te podemos enviar cava a domicilio. Porque si
                    tienes prevista una celebración, es indispensable tener en
                    tu bodega una botella con el mejor cava.
                  </p>
                </div>
                <div className="row3">
                  <h2>
                    8.) ¿Tienes que hacer un regalo gourmet? ¡Echa un vistazo a
                    nuestros packs!
                  </h2>
                  <p>
                    ¡Los mejores productos delicatesen a domicilio también
                    pueden ser un regalo! Y es que regalar gourmet siempre es
                    una buena idea. Packs gourmet, cestas de jamón, botellas del
                    mejor vino con copas premium… pásate por nuestra sección de
                    regalos gourmet y descubre increíbles propuestas con las que
                    obsequiar a amigos, familiares o aquellas personas con las
                    que quieras tener un detalle.
                    <br />
                    Ah, y en las fechas especiales también tenemos ofertas y
                    packs especiales: día del padre, día de la madre, Black
                    Friday, etc. Durante esas fechas, acuérdate de pasarte por
                    nuestra tienda online gourmet para encontrar el regalo
                    adecuado.
                    <br />
                    No te compliques, con nuestros productos y marcas gourmet
                    siempre juegas sobre seguro.
                  </p>
                </div>
                <div className="row3">
                  <h2>9.) ¿Son todo productos gourmet españoles?</h2>
                  <p>
                    En España tenemos productos delicatesen de primera calidad.
                    Por este motivo, nuestros proveedores principales son
                    españoles. Esto no quiere decir que nuestro catálogo se base
                    100% en productos nacionales. Sabemos apreciar los sabores
                    gourmet más allá de nuestras fronteras por lo que también
                    nos gusta incluir algunos de los que marquen la diferencia
                    en nuestro catálogo.
                    <br />
                    Por ejemplo, no hay duda de que la pasta italiana es
                    insuperable. Por este motivo nuestra pasta proviene de
                    Italia. Lo mismo podemos decir del vinagre de Módena.
                    Productos gourmet insuperables y que no tienen por qué ser
                    españoles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </section>
        {/*  */}
      </div>
      <div className="sticky-stopper" />
    </div>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default ProductosGourmetOnlineADomiciolio;
