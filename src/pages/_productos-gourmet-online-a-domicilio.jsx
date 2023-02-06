import Vinoteca from '@/assets/productos-gourmet-online-a-domicilio/vinoteca.jpg';
import TostadaConSardinas from '@/assets/productos-gourmet-online-a-domicilio/Tostada-con-sardinas.jpg';
import ProductosGourmetOnlineDomicilio from '@/assets/productos-gourmet-online-a-domicilio/productos-gourmet-online-domicilio.jpg';
import ProductosDelicatessenOnlineDomicilio from '@/assets/productos-gourmet-online-a-domicilio/productos-delicatessen-online-domicilio.jpg';
import QuesoFundidoConCalbacin from '@/assets/productos-gourmet-online-a-domicilio/3r h2.jpg';
import MesaConAperitivosOrtiz from '@/assets/productos-gourmet-online-a-domicilio/mesa-con-aperitivos-ortiz.jpg';
import ProductosGourmetDelicatessenOnlineDomicilio from '@/assets/productos-gourmet-online-a-domicilio/productos-gourmet-delicatessen-online-domicilio.jpg';
import ComprarDulcesOnline from '@/assets/productos-gourmet-online-a-domicilio/Comprar-dulces-online.jpg';
import Image from 'next/image';

const ProductosGourmetOnlineADomiciolio = () => {
  return (
    <div>
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
              <Image
                objectFit="cover"
                className="desktop"
                src={Vinoteca}
                alt="entrega de vinos a domicilio"
              />
              <Image
                objectFit="cover"
                className="mobile"
                src={Vinoteca}
                alt="entrega de vinos a domicilio"
              />
              {/* <button class="mobile">CTA</button> */}
            </div>
            <div id="blog">
              <div className="row2">
                <div className="col2 image">
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
                <div className="col2 image">
                  <Image
                    objectFit="cover"
                    src={TostadaConSardinas}
                    alt="tapas con sardinas"
                  />
                </div>
              </div>
              <div className="row2">
                <div className="col2 image">
                  <Image
                    objectFit="cover"
                    src={ProductosGourmetOnlineDomicilio}
                    alt="Un menú preparado con productos gourmet online a domicilio"
                    objectFit="cover"
                  />
                </div>
                <div className="col2 image">
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
                <div className="col2 image">
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
                <div className="col2 image">
                  <Image
                    objectFit="cover"
                    src={ProductosDelicatessenOnlineDomicilio}
                    alt="Una masa de pizza precocinada también puede ser delicatesen"
                  />
                </div>
              </div>
              <div className="row2">
                <div className="col2 image">
                  <Image
                    objectFit="cover"
                    src={QuesoFundidoConCalbacin}
                    alt="queso fundido con calabazin"
                  />
                </div>
                <div className="col2 image">
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
                <div className="col2 image">
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
                <div className="col2 image">
                  <Image
                    objectFit="cover"
                    src={MesaConAperitivosOrtiz}
                    alt="articulos gourmet a domicilio"
                  />
                </div>
              </div>
              <div className="row2">
                <div className="col2 image">
                  <Image
                    objectFit="cover"
                    src={ProductosGourmetDelicatessenOnlineDomicilio}
                    alt="Una selección de los mejores delicatesen en línea a domicilio"
                  />
                </div>
                <div className="col2 image">
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
                <Image
                  objectFit="cover"
                  className="desktop"
                  src={ComprarDulcesOnline}
                  alt="catànies"
                />
                <Image
                  objectFit="cover"
                  className="mobile"
                  src={ComprarDulcesOnline}
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

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ProductosGourmetOnlineADomiciolio;
