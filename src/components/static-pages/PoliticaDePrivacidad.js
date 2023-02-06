import Head from "next/head";

const PoliticaDePrivacidad = () => {
  return (
    <div>
      <Head>
        <title>Gourmet La Vanguardia - Política de Privacidad</title>

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
        <h2>Política de Privacidad</h2>
        <h4>Datos de identificación</h4>
        <h3>Fecha de publicación: 24/05/2018</h3>
        <p>
          La Vanguardia Ediciones SL, titular de la página web
          www.gourmetlavanguardia.com (en adelante, la Compañía).
        </p>
        <p>
          Domicilio social: Avenida Diagonal, 477, 9a planta, 08036 Barcelona.
          <br />
          Teléfono: 93 4812500
          <br />
          Correo electrónico:{" "}
          <a href="mailto:enlinea@lavanguardia.es">enlinea@lavanguardia.es</a>
        </p>
        <p> y Mondofino, SL</p>
        <p>
          Domicilio social: Passeig de Gràcia, nº 91, 08008 Barcelona.
          <br />
          Teléfono: 935 500 105
        </p>
        <p>
          Correo electrónico:{" "}
          <a href="mailto:clientes@gourmetlavanguardia.com">
            clientes@gourmetlavanguardia.com
          </a>
        </p>
        <h4>Protección de datos personales</h4>
        <p>
          La Compañía le informa que a través de nuestra página web obtenemos
          sus datos personales para su tratamiento.
        </p>
        <p>
          A continuación le detallamos estos tratamientos, sus fines, los datos
          personales que utilizamos y la base legal que legitima su realización.
        </p>
        <h5>1. Registro de Usuario</h5>
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalidad Principal</td>
              <td>Datos</td>
              <td>Base legal aplicable</td>
              <td>Plazo Conservación</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Crear su área de usuario registrado para la gestión de sus
                compras
              </td>
              <td>email, contraseña</td>
              <td>
                Interés legítimo en ofrecer la gestión de compras a través de una
                área segura
              </td>
              <td>Mientras no se solicite la baja del registro</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalidades secundarias</td>
              <td>Datos</td>
              <td>Base legal aplicable</td>
              <td>Plazo Conservación</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gestionar el área de usuario registrado</td>
              <td>
                nombre y apellidos, DNI, dirección completa, método de contacto
                (teléfono móvil, teléfono adicional)
              </td>
              <td>
                Interés legítimo en ofrecer mejoras del servicio y atender
                solicitud compra
              </td>
              <td>Mientras no se solicite la baja del registro</td>
            </tr>
            <tr>
              <td>
                Envío de comunicaciones electrónicas sobre otros productos de
                Gourmet La Vanguardia
              </td>
              <td>email</td>
              <td>
                Envío de comunicaciones comerciales de productos o servicios
                similares de la propia empresa(Art 21.2 LSSI)
              </td>
              <td>Mientras no se solicite el cese de envíos</td>
            </tr>
            <tr>
              <td>
                Envío de comunicaciones comerciales de otros productos de LA
                VANGUARDIA
              </td>
              <td>email</td>
              <td>Consentimiento</td>
              <td>
                Si nos ha dado su consentimiento, mientras no se solicite el
                cese de envios
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        Si no desea que tratemos sus datos para la creación de su área de
        usuario registrado, no podremos tramitar sus compras. Para el resto de
        finalidades Ud. podrá solicitar el cese del tratamiento en cualquier
        momento, incluidas aquellas para las que nos hubiera otorgado su
        consentimiento previamente.
        <br />
        <h5>2. Pago y facturación de productos</h5>
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalidad Principal</td>
              <td>Datos</td>
              <td>Base legal aplicable</td>
              <td>Plazo Conservación</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pago de productos, facturación y entrega</td>
              <td>
                nombre, apellidos, península (Si/No), datos de contacto
                (teléfono móvil, email), dirección completa, dirección de
                facturación, tarjeta crédito
              </td>
              <td>Contrato</td>
              <td>
                Los datos de su compra quedarán registrados en su área de
                usuario y los conservaremos mientras Ud. no solicite la baja.
                Además, conservaremos datos de facturación por imperativo legal.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalidades secundarias</td>
              <td>Datos</td>
              <td>Base legal aplicable</td>
              <td>Plazo Conservación</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No existen</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        Si no desea que tratemos sus datos para la finalidad comunicada, no
        podremos tramitar su compra
        <br />
        <h5>3. Usuarios del Club de Vinos</h5>
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalidad Principal</td>
              <td>Datos</td>
              <td>Base legal aplicable</td>
              <td>Plazo Conservación</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Crear su área de usuario del Club de Vinos para la gestión de
                sus compras
              </td>
              <td>
                Nombre, apellidos, email, contraseña, fecha nacimiento, NIF,
                dirección completa, datos de contacto (teléfono móvil, teléfono
                adicional), datos de facturación
              </td>
              <td>
                Interés legítimo en ofrecer la gestión de compras a través de un
                área segura
              </td>
              <td>Mientras no se solicite la baja de socio</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalidades secundarias</td>
              <td>Datos</td>
              <td>Base legal aplicable</td>
              <td>Plazo Conservación</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gestionar el área de usuario registrado</td>
              <td>
                nombre y apellidos, DNI, dirección completa, método de contacto
                (teléfono móvil, teléfono adicional) email
              </td>
              <td>
                Interés legítimo en ofrecer mejoras del servicio y atender
                solicitudes de compra
              </td>
              <td>Mientras no se solicite la baja de socio</td>
            </tr>
            <tr>
              <td>
                Envío de comunicaciones electrónicas sobre otros productos de
                Gourmet La Vanguardia
              </td>
              <td>email</td>
              <td>
                Envío de comunicaciones comerciales de productos o servicios
                similares de la propia empresa (Art 21.2 LSSI)
              </td>
              <td>Mientras no se solicite el cese de envios</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        Si no desea que tratemos sus datos para la creación de su área de socio,
        no podremos tramitar sus compras. Para el resto de finalidades Ud. podrá
        solicitar el cese del tratamiento en cualquier momento, incluidas
        aquellas para las que nos hubiera otorgado su consentimiento
        previamente.
        <br />
        <h5>4. Lista Robinson</h5>
        <p>
          La Lista Robinson en un sistema gratuito de exclusión publicitaria. Al
          inscribirse en dicha lista, sólo las empresas de las que sea cliente o
          que haya autorizado podrán enviarle publicidad. Más informción en{" "}
          <a
            href="https://www.listarobinson.es"
            target="_blank"
            rel="noreferrer"
          >
            https://www.listarobinson.es
          </a>
        </p>
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalidad Principal</td>
              <td>Datos</td>
              <td>Base legal aplicable</td>
              <td>Plazo Conservación</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bloquear el envío de comunicacions electrónicas</td>
              <td>Los propios de la Lista Robinson </td>
              <td>Interés público</td>
              <td>Consultar Política de Privacidad de la lista Robinson</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalidades secundarias</td>
              <td>Datos</td>
              <td>Base legal aplicable</td>
              <td>Plazo Conservación</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No existen</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <p>
          Usamos la Lista Robinson para comprobar en que casos podemos enviarle
          comunicaciones publicitarias.
        </p>
        <h4>Cesión de datos</h4>
        <p>
          Sus datos personales no serán cedidos a terceros, salvo aquellos que
          sean necesarios para entregar los productos objeto de sus compras o
          reserva de promoción y no serán utilizados ni conservados por estos
          terceros más allá de esta finalidad.
        </p>
        <p>
          Es posible que algunos de nuestros proveedores, por ejemplo Google,
          procesen datos fuera de las fronteras de la Unión Europea. En estos
          casos, exigimos al provedor estar adscrito a un protocolo de
          adecuación de protección de datos aprobado por la Unión Europea, por
          regla general el tratado Privacy Shield entre USA y la UE.
        </p>
        <h4>Derechos del interesado</h4>
        <p>
          La Compañía le informa que Usted puede retirar el consentimiento dado
          para el tratamiento de sus datos personales en cualquier momento. Para
          ello ponemos a su disposición mecanismos que Usted puede utilizar
          cuando así lo desee. A modo de ejemplo, estos mecanismos pueden
          incluir botones de activar y desactivar tratamientos que encontrará en
          su Área de usuario Registrado. También mediante un enlace que
          incluimos en todos nuestros mensajes de correo y que permite cancelar
          su suscripción de manera inmediata.
        </p>
        <p>
          En cualquier caso, Usted siempre puede ejercer sus derechos de acceso,
          rectificación, supresión, limitación, oposición al tratamiento o
          portabilidad de los datos, enviando un mensaje de correo electrónico a{" "}
          <a href="mailto:protecciondedatos@grupogodo.com">
            protecciondedatos@grupogodo.com.
          </a>{" "}
        </p>
        <p>
          Finalmente le informamos que para cualquier información adicional
          respecto al tratamiento de sus datos personales puede contactar con
          nuestro Delegado de Protección de Datos enviando un mensaje de correo
          electrónico a<a href="mailto:dpo@grupogodo.com"> dpo@grupogodo.com</a>
          .
        </p>
        <p>
          {" "}
          Asímismo, si considera que sus derechos no se atienden adecuadamente,
          le recordamos su derecho a solicitar la tutela de la Agencia Catalana
          de Protecció de Dades o de la Agencia Española de Protección de Datos.
        </p>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidad;
