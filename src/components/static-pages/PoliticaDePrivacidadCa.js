import Head from "next/head";

const PoliticaDePrivacidadCa = () => {
  return (
    <div>
      <Head>
        <title>Gourmet La Vanguardia - Política de Privacitat</title>

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
      <div className="avisolegal p-8 mx-auto max-w-[1440px]">
        <h2>Política de Privacitat</h2>
        <h4>Dades d'identificació</h4>
        <h3>Data de publicació: 24/05/2018</h3>
        <p>
          La Vanguardia Ediciones SL, titular de la pàgina web
          www.gourmetlavanguardia.com (en endavant la Companyia).
        </p>
        <p>
          Domicili social: Avinguda Diagonal, 477, 9a planta, 08036 Barcelona.
          <br />
          Telèfon: 93 4812500
          <br />
          Correu electrònic:{" "}
          <a href="mailto:enlinea@lavanguardia.es">enlinea@lavanguardia.es</a>
        </p>
        <p> i Mondofino, SL</p>
        <p>
          Domicili social: Passeig de Gràcia, nº 91, 08008 Barcelona.
          <br />
          Teléfono: 935 500 105
        </p>
        <p>
          Correu electrònic:{" "}
          <a href="mailto:clientes@gourmetlavanguardia.com">
            clientes@gourmetlavanguardia.com
          </a>
        </p>
        <h4>Protecció de dades personals</h4>
        <p>
          La Companyia l'informa que a través de la nostra pàgina web obtindrem
          les seves dades personals pel seu tractament.
        </p>
        <p>
          A continuació li detallem aquests tractaments, les seves finalitats,
          les dades personals que utilitzem i la base legal que legitima la seva
          realització.
        </p>
        <h5>1. Registre d'Usuari</h5>
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalitat Principal</td>
              <td>Dades</td>
              <td>Base legal aplicable</td>
              <td>Termini Conservació</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Crear la seva àrea d'usuari registrat per la gestió de les seves
                compres
              </td>
              <td>email, contrasenya</td>
              <td>
                Interès legítim en oferir la gestió de compres a través d'una
                àrea segura
              </td>
              <td>Mentre no es sol·liciti la baixa del registre</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalitats secundàries</td>
              <td>Quines dades</td>
              <td>Base legal aplicable</td>
              <td>Termini Conservació</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gestionar l'àrea d'usuari registrat</td>
              <td>
                nom i congnoms, DNI, adreça completa, mètode de contacte
                (telèfon mòbil, telèfon addicional)
              </td>
              <td>
                Interès legítim en oferir millores del servei i atendre
                sol·licitut de compra
              </td>
              <td>Mentre no es sol·liciti la baixa del registre</td>
            </tr>
            <tr>
              <td>
                Enviament de comunicacions electrèniques sobre altres productes
                de Gourmet La Vanguardia
              </td>
              <td>email</td>
              <td>
                Enviament de comunicacions comercials de productes o serveis
                similars de la pròpia empresa (Art 21.2 LSSI)
              </td>
              <td>Mentre no es sol·liciti el cessament d'enviaments</td>
            </tr>
            <tr>
              <td>
                Enviament de comunicacions comercials d'altres productes de LA
                VANGUARDIA
              </td>
              <td>email</td>
              <td>Consentiment</td>
              <td>
                Si ens ha donat els seu consentiment, mentre no se sol·liciti el
                cessament d'enviaments
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        Si no desitja que tractem les seves dades per a la creació de la seva
        àrea d'usuari registrat, no podrem tramitar les seves compres. Per a la
        resta de finalitats vostè podrà sol·licitar el cessament del tractament
        en qualsevol moment, incloses aquelles per a les quals ens hagués
        atorgat el seu consentiment prèviament.
        <br />
        <h5>2. Pagament i facturació de productes</h5>
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalitat Principal</td>
              <td>Dades</td>
              <td>Base legal aplicable</td>
              <td>Termini de Conservació</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pagament de productes, facturació i entrega</td>
              <td>
                nom, cognoms, península (Si/No), dades de contacte (telèfon
                mòbil, email), adreça completa, adreça de facturació, targeta
                crèdit
              </td>
              <td>Contracte</td>
              <td>
                Les dades de la seva compra quedaran registrades a la seva àrea
                d'usuari i les conservarem mentre vostè no sol·liciti la baixa.
                A més, conservarem dades de facturació per imperatiu legal.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalitats secundàries</td>
              <td>Quines dades</td>
              <td>Base legal aplicable</td>
              <td>Termini de Conservació</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No existeixen</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        Si no desitja que tractem les seves dades per a la finalitat comunicada,
        no podrem tramitar la seva compra.
        <br />
        <h5>3. Usuaris del Club de Vins</h5>
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalitat Principal</td>
              <td>Dades</td>
              <td>Base legal aplicable</td>
              <td>Termini de Conservació</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Crear la seva àrea d'usuari del Club de Vins per la gestió de
                les seves compres
              </td>
              <td>
                Nom, cognoms, email, contrasenya, data naixement, NIF, adreça
                completa, dades de contacte (telèfon mòbil, telèfon addicional),
                dades de facturació
              </td>
              <td>
                Interès legítim en oferir la gestió de compres a través d'una
                àrea segura
              </td>
              <td>Mentre no se sol·liciti la baixa de soci</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalitats secundàries</td>
              <td>Dades</td>
              <td>Base legal aplicable</td>
              <td>Termini de Conservació</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gestionar l'àrea d'usuari registrat</td>
              <td>
                Nom i cognoms, DNI, adreça completa, mètode de contacte (telèfon
                mòbil, telèfon addicional)
              </td>
              <td>
                Interès legítim en oferir millores del servei i atendre
                sol·licituts de compra
              </td>
              <td>Mentre no se sol·liciti la baixa de soci</td>
            </tr>
            <tr>
              <td>
                Enviament de comunicacions electròniques sobre altres productes de
                Gourmet La Vanguardia
              </td>
              <td>email</td>
              <td>
                Enviament de comunicacions comercials de productes o serveis
                similars de la propia empresa (Art 21.2 LSSI)
              </td>
              <td>Mentre no se sol·liciti el cessament d'enviaments</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        Si no desitja que tractem les seves dades per a la finalitat comunicada,
        no podrem tramitar la seva compra.
        <br />
        <h5>4. Llista Robinson</h5>
        <p>
          La Llista Robinson en un sistema gratuït d'exclusió publicitària. En
          inscriure't en aquesta llista, només les empreses de què sigui client o
          que hagi autoritzat podran enviar-li publicitat. Més informació a{" "}
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
              <td>Finalitat Principal</td>
              <td>Dades</td>
              <td>Base legal aplicable</td>
              <td>Termini de Conservació</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bloquejar l'enviament de comunicacions electròniques</td>
              <td>Les pròpies de la Llista Robinson </td>
              <td>Interès públic</td>
              <td>Consultar Política de Privacitat de la llista Robinson</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table width="100%" border="0" cellSpacing="0" cellPadding="7">
          <thead>
            <tr>
              <td>Finalitats secundàries</td>
              <td>Dades</td>
              <td>Base legal aplicable</td>
              <td>Termini de Conservació</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No existeixen</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <p>
          Fem servir la Llista Robinson per comprovar en quins casos podem
          enviar-li comunicacions publicitàries.
        </p>
        <h4>Cessió de dades</h4>
        <p>
          Les seves dades personals no seran cedides a tercers, llevat dels que
          siguin necessaris per a lliurar els productes objecte de les seves
          compres o reserva de promoció i no seran utilitzades ni conservades
          per aquests tercers més enllà d'aquesta finalitat.
        </p>
        <p>
          És possible que alguns dels nostres proveïdors, per exemple Google,
          processin dades fora de les fronteres de la Unió Europea. En aquests
          casos, exigim al proveïdor estar adscrit a un protocol d'adequació de
          protecció de dades aprovat per la Unió Europea, per regla general el
          tractat Privacy Shield entre USA i la UE.
        </p>
        <h4>Drets de l'interessat</h4>
        <p>
          La Companyia l'informa que Vostè pot retirar el consentiment donat per
          al tractament de les seves dades personals en qualsevol moment. Per a
          això posem a la seva disposició mecanismes que podrà utilitzar quan
          així ho desitgi. A tall d'exemple, aquests mecanismes poden incloure
          botons d'activar i desactivar tractaments que trobarà a la seva Àrea
          d'usuari Registrat. També mitjançant un enllaç que incloem a tots els
          nostres missatges de correu i que permet cancel·lar la seva
          subscripció de manera immediata.
        </p>
        <p>
          En qualsevol cas, Vostè sempre pot exercir els seus drets d'accés,
          rectificació, supressió, limitació, oposició al tractament o
          portabilitat de les dades, enviant un missatge de correu electrònic a{" "}
          <a href="mailto:protecciondedatos@grupogodo.com">
            protecciondedatos@grupogodo.com.
          </a>{" "}
        </p>
        <p>
          Finalment l'informem que per a qualsevol informació addicional
          respecte al tractament de les seves dades personals pot contactar amb
          el nostre Delegat de Protecció de Dades enviant un missatge de correu
          electrònic a<a href="mailto:dpo@grupogodo.com"> dpo@grupogodo.com</a>.
        </p>
        <p>
          {" "}
          Així mateix, si considera que els seus drets no s'atenen adequadament,
          li recordem el seu dret a sol·licitar la tutela de l'Agència Catalana
          de Protecció de Dades o de l'Agència Espanyola de Protecció de Dades.
        </p>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidadCa;
