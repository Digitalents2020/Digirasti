import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../App.css";
//React Form Hook library documentation: https://github.com/react-hook-form/react-hook-form

const Tietoturva = () => {
  const [submitted, setSubmitted] = useState(false);
  const [points, setPoints] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  //The above "CriteriaMode: all" means that all errors for the field are displayed at once

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);

    let sum = 0;

    if (data.kysymys1 === "B") {
      sum += 1;
    }

    if (data.kysymys2 === "B") {
      sum += 1;
    }

    if (data.kysymys3 === "A") {
      sum += 1;
    }

    if (data.kysymys4 === "A") {
      sum += 1;
    }

    if (data.kysymys5 === "A") {
      sum += 1;
    }

    if (data.kysymys6 === "B") {
      sum += 1;
    }

    if (data.kysymys7 === "A") {
      sum += 1;
    }

    if (data.kysymys8 === "B") {
      sum += 1;
    }

    if (data.kysymys9 === "A") {
      sum += 1;
    }

    if (data.kysymys10 === "B") {
      sum += 1;
    }

    setPoints(sum);
    setSubmitted(true);
  };

  //If form is submited succesfully the "success" message below is rendered

  if (submitted) {
    return (
      <div className="form-box">
        <div className="pageContentFrame">
          <h2 className="infoHeader">Tulokset</h2>

          <h3>Oikeat vastaukset</h3>
          <br />
          <p>{points}/10 vastausta oikein.</p>
          <br />
          <p>
            Kysymys 1: Tietoturva tarkoittaa yksilön, yrityksen tai
            palveluntarjoajan tietojen suojaamista ulkopuolisilta.{" "}
            <strong>
              Perustelu: Tietoturva tarkoittaa tiedon luottamuksellisuuden,
              saatavuuden ja eheyden ylläpitämistä. Sen uhkia ovat mm.
              huijausyritykset, erilaiset virusohjelmat, luvaton pääsy ja tiedon
              luvaton käyttö.{" "}
            </strong>
          </p>
          <br></br>
          <p>
            Kysymys 2: Tietosuoja tarkoittaa toimenpiteitä, joilla pyritään
            varmistamaan henkilötietojen asianmukainen käsittely ja
            yksityisyyden säilyminen.{" "}
            <strong>
              Perustelu: Tietosuoja ei viittaa mihinkään tiettyyn paikkaan vaan
              toimintatapoihin, joilla taataan, että tiedot pysyvät suojassa.
            </strong>
          </p>
          <br></br>
          <p>
            Kysymys 3: Ei.{" "}
            <strong>
              {" "}
              Perustelu: Tietosuoja on osa jokaiselle perustuslaissa määriteltyä
              yksityisyyden suojaa, joka turvaa yksilön vapauksien ja oikeuksien
              toteutumista henkilötietojen käsittelyssä.
            </strong>
          </p>
          <br></br>
          <p>
            Kysymys 4: Ei.{" "}
            <strong>
              Perustelu: Pankkivirkailijat tai erilaiset viranomaiset eivät
              koskaan pyydä sinun käyttäjätunnuksiasi tai salasanaasi mihinkään
              tarkoitukseen. Tällainen sähköposti on mitä todennäköisimmin
              huijausyritys. Älä ikinä anna käyttäjätunnustasi ja salasanaasi
              kenellekään, vaikka niiden pyytäjä vaikuttaisi viralliselta
              taholta.
            </strong>
          </p>
          <br></br>
          <p>
            Kysymys 5: Ei. Perustelu: Jokaiseen salasanalliseen palveluun on
            ehdottomasti syytä olla käytössä eri salasana. Näin varmistat, että
            yhden salasanasi joutuessa vääriin käsiin useamman palvelun sisällöt
            eivät kuitenkaan ole vaarassa.
          </p>
          <br></br>
          <p>
            Kysymys 6: AC!DC!Thunderstruckki83.{" "}
            <strong>
              Perustelu: Mitä pidempi salasana ja mitä enemmän se pitää
              sisällään isoja kirjaimia, erikoismerkkejä ja numeroita, sen
              turvallisempi se on. Ylen Digitreenien salasanakoneen mukaan
              hakkereilla menisi alle sekunti vaihtoehdon c), noin kuusi
              sekuntia vaihtoehdon a) ja useita satoja vuosia vaihtoehdon b)
              murtamiseen.
            </strong>
          </p>
          <br></br>
          <p>
            Kysymys 7: Evästeillä tarkoitetaan avaamiesi verkkosivustojen luomia
            tiedostoja, jotka helpottavat netissä liikkumistasi tallentamalla
            selaustietoja.{" "}
            <strong>
              Perustelu: Ole tarkkana siitä, mitä evästeitä ja miltä sivustoilta
              hyväksyt selaimesi käyttöön. Osa evästeistä on ns. välttämättömiä
              (eli toiminnallisia tai automaattisia) evästeitä, jotka on
              hyväksyttävä, että käytettävä sivusto toimisi oikein. Sen lisäksi
              sivustoilla voi olla ei-pakollisia evästeitä, joilla useimmiten
              seurataan käyttäjän - eli sinun - käyttäytymistä ja mieltymyksiä.
              Voit lukea tarkemmin kunkin sivuston evästeistä sivustojen
              evästeasetusten kautta.
            </strong>
          </p>
          <br></br>
          <p>
            Kysymys 8: Kiinnität huomiota viestin ulkoasuun, lähettäjään ja
            sisältöön. Ohitat viestin roskapostina ja tietojen kalasteluna.
            <strong>
              Perustelu: Arvioi aina kriittisesti myös virallisilta
              vaikuttavilta tahoilta tulevat ilmoitukset sähköpostissa.
              Erityisesti kirjoitusvirheet ja huono suomen kieli saattavat olla
              merkkejä erilaisista huijaus- tai kalasteluyrityksistä
              (“phishing”). Myös erilaisten rahalähetysten ja palkintojen
              suhteen on syytä muistaa, että sähköpostin maailmassa valitettavan
              usein viestit, jotka ovat liian hyviä ollakseen totta, eivät sitä
              ole.
            </strong>
          </p>
          <br></br>
          <p>
            Kysymys 9: Tyhjentää selaushistoria.{" "}
            <strong>
              Perustelu: Kotikoneella, omalla puhelimella tai tabletilla
              selaushistorian tyhjentäminen ei ole pakollista, mutta julkisia
              koneita käyttäessäsi tyhjennä aina selaushistoriasi ja erilaisten
              verkkopalvelujen kuten sähköpostin salasanat ja käyttäjätunnukset.
              Jotkut yleisessä käytössä olevat päätteet tyhjentävät nämä tiedot
              automaattisesti, mutta sen varaan ei koskaan kannata laskea.
            </strong>
          </p>
          <br></br>
          <p>
            Kysymys 10: Kirjoittaa itselleen johonkin ylös.{" "}
            <strong>
              Perustelu: Muistin avuksi on hyvä, että kirjoitat salasanasi eri
              palveluihin johonkin ylös. Erittäin tärkeää on kuitenkin muistaa,
              että salasanoja ja muita kirjautumistietoja, kuten
              käyttäjätunnusta, ei tule koskaan säilyttää samassa paikassa ja
              samalla lapulla. Kuka tahansa pystyisi molempien tietojen avulla
              kirjautumaan tunnuksillasi eri palveluihin.
            </strong>
          </p>
        </div>
        <Link to="/tippuvat_kirjaimet" className="nextPracButton" role="button">
          Seuraava tehtävä
        </Link>
      </div>
    );
  }

  return (
    <div className="mainPageFrame">
      <h1 className="pageHeader">Tietoturvatehtävä</h1>
      <div className="pageContentFrame">
        <h2 className="infoHeader">Ohje:</h2>
        <p>Tässä kyselyssä vastaat tietoturvaan liittyviin kysymyksiin.</p>
      </div>
      <div className="pageContentFrame formTietoturva">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Mitä tietoturvalla tarkoitetaan?</h3>
          <ul>
            <li>
              <input
                {...register("kysymys1", { required: true })}
                name="kysymys1"
                type="radio"
                value="A"
                id="kysymys1A"
              />
              <label htmlFor="kysymys1A" className="answer">
                Tietoturva tarkoittaa turvalliseksi luokiteltua tietoa.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys1", { required: true })}
                name="kysymys1"
                type="radio"
                value="B"
                id="kysymys1B"
              />
              <label htmlFor="kysymys1B" className="answer">
                Tietoturva tarkoittaa yrityksen tai palveluntarjoajan tietojen
                suojaamista ulkopuolisilta.
              </label>
            </li>
          </ul>
          <br />

          <h3>Mitä tietosuojalla tarkoitetaan?</h3>
          <ul>
            <li>
              <input
                {...register("kysymys2", { required: true })}
                name="kysymys2"
                type="radio"
                value="A"
                id="kysymys2A"
              />
              <label htmlFor="kysymys2A" className="answer">
                Tietosuoja tarkoittaa paikkaa, jossa tieto pysyy suojassa
                muilta.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys2", { required: true })}
                name="kysymys2"
                type="radio"
                value="B"
                id="kysymys2B"
              />
              <label htmlFor="kysymys2B" className="answer">
                Tietosuoja tarkoittaa toimenpiteitä, joilla pyritään
                varmistamaan henkilötietojen asianmukainen käsittely ja
                yksityisyyden säilyminen.
              </label>
            </li>
          </ul>
          <br />

          <h3>Minun täytyy itse huolehtia tietosuojastani.</h3>
          <ul>
            <li>
              <input
                {...register("kysymys3", { required: true })}
                name="kysymys3"
                type="radio"
                value="A"
                id="kysymys3A"
              />
              <label htmlFor="kysymys3A" className="answer">
                Ei
              </label>
            </li>
            <li>
              <input
                {...register("kysymys3", { required: true })}
                name="kysymys3"
                type="radio"
                value="B"
                id="kysymys3B"
              />
              <label htmlFor="kysymys3B" className="answer">
                Kyllä
              </label>
            </li>
          </ul>
          <br />

          <h3>
            Pankkivirkailija pyytää sinulta sähköpostilla käyttäjätunnusta ja
            salasanaa pankkipalveluun, jotta hän voi tehdä sinulle ylimääräisen
            talletuksen. Voitko antaa ne?
          </h3>
          <ul>
            <li>
              <input
                {...register("kysymys4", { required: true })}
                name="kysymys4"
                type="radio"
                value="A"
                id="kysymys4A"
              />
              <label htmlFor="kysymys4A" className="answer">
                Ei
              </label>
            </li>
            <li>
              <input
                {...register("kysymys4", { required: true })}
                name="kysymys4"
                type="radio"
                value="B"
                id="kysymys4B"
              />
              <label htmlFor="kysymys4B" className="answer">
                Kyllä
              </label>
            </li>
          </ul>
          <br />

          <h3>
            Pari eri salasanaa riittää kaikille eri käyttäjätileille (esim.
            sähköpostiin, sosiaalisen median kanaville, foorumeille, työnhaun
            sivustoille jne.)
          </h3>
          <ul>
            <li>
              <input
                {...register("kysymys5", { required: true })}
                name="kysymys5"
                type="radio"
                value="A"
                id="kysymys5A"
              />
              <label htmlFor="kysymys5A" className="answer">
                Ei
              </label>
            </li>
            <li>
              <input
                {...register("kysymys5", { required: true })}
                name="kysymys5"
                type="radio"
                value="B"
                id="kysymys5B"
              />
              <label htmlFor="kysymys5B" className="answer">
                Kyllä
              </label>
            </li>
          </ul>
          <h3>Mikä seuraavista salasanoista on turvallisin?</h3>
          <ul>
            <li>
              <input
                {...register("kysymys6", { required: true })}
                name="kysymys6"
                type="radio"
                value="A"
                id="kysymys6A"
              />
              <label htmlFor="kysymys6A" className="answer">
                Jonne12
              </label>
            </li>
            <li>
              <input
                {...register("kysymys6", { required: true })}
                name="kysymys6"
                type="radio"
                value="B"
                id="kysymys6B"
              />
              <label htmlFor="kysymys6B" className="answer">
                AC!DC!Thunderstruckki83
              </label>
            </li>
            <li>
              <input
                {...register("kysymys6", { required: true })}
                name="kysymys6"
                type="radio"
                value="C"
                id="kysymys6C"
              />
              <label htmlFor="kysymys6C" className="answer">
                password123
              </label>
            </li>
          </ul>
          <br />
          <h3>Mitä tarkoitetaan evästeillä?</h3>
          <ul>
            <li>
              <input
                {...register("kysymys7", { required: true })}
                name="kysymys7"
                type="radio"
                value="A"
                id="kysymys7A"
              />
              <label htmlFor="kysymys7A" className="answer">
                Evästeillä tarkoitetaan avaamiesi verkkosivustojen luomia
                tiedostoja, jotka helpottavat netissä liikkumistasi
                tallentamalla selaustietoja.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys7", { required: true })}
                name="kysymys7"
                type="radio"
                value="B"
                id="kysymys7B"
              />
              <label htmlFor="kysymys7B" className="answer">
                Evästeillä tarkoitetaan nettisivujen automaattista kääntämistä
                suomen kielelle.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys7", { required: true })}
                name="kysymys7"
                type="radio"
                value="C"
                id="kysymys7C"
              />
              <label htmlFor="kysymys7C" className="answer">
                Evästeillä tarkoitetaan näppäimistön pikakomentoja.
              </label>
            </li>
          </ul>
          <br />
          <h3>
            Saat sähköpostiisi postilta ilmoituksen noudettavasta paketista.
            Viestin suomen kielessä on vähän kirjoitusvirheitä ja sinua
            pyydetään klikkaamaan siinä olevaa linkkiä. Mitä teet?
          </h3>
          <ul>
            <li>
              <input
                {...register("kysymys8", { required: true })}
                name="kysymys8"
                type="radio"
                value="A"
                id="kysymys8A"
              />
              <label htmlFor="kysymys8A" className="answer">
                Klikkaat sähköpostissa olevaa linkkiä ja täytät sinne omat
                tietosi. Toivottavasti saat uuden mysteerisen pakettisi pian!
              </label>
            </li>
            <li>
              <input
                {...register("kysymys8", { required: true })}
                name="kysymys8"
                type="radio"
                value="B"
                id="kysymys8B"
              />
              <label htmlFor="kysymys8B" className="answer">
                Kiinnität huomiota viestin ulkoasuun, lähettäjään ja sisältöön.
                Ohitat viestin roskapostina ja tietojen kalasteluna.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys8", { required: true })}
                name="kysymys8"
                type="radio"
                value="C"
                id="kysymys8C"
              />
              <label htmlFor="kysymys8C" className="answer">
                Muistelet, ettet ole mielestäsi tilannut mitään viime aikoina
                verkkokaupoista... Viesti näyttää vähän epäilyttävältä. Olet
                kuitenkin niin innoissasi ilmaisesta tavarasta, että klikkaat
                linkkiä ja täytät sinne tietosi.
              </label>
            </li>
          </ul>
          <br />
          <h3>
            Kun olet käyttänyt julkista tietokonetta, on lopettaessasi tärkeää:
          </h3>
          <ul>
            <li>
              <input
                {...register("kysymys9", { required: true })}
                name="kysymys9"
                type="radio"
                value="A"
                id="kysymys9A"
              />
              <label htmlFor="kysymys9A" className="answer">
                Tyhjentää selaushistoria.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys9", { required: true })}
                name="kysymys9"
                type="radio"
                value="B"
                id="kysymys9B"
              />
              <label htmlFor="kysymys9B" className="answer">
                Asentaa koneelle virusturvaohjelma.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys9", { required: true })}
                name="kysymys9"
                type="radio"
                value="C"
                id="kysymys9C"
              />
              <label htmlFor="kysymys9C" className="answer">
                Odottaa 5 minuuttia, että kaikki syöttämäsi tiedot katoavat
                automaattisesti.
              </label>
            </li>
          </ul>
          <br />
          <h3>Itse luomasi salasanat eri palveluihin kannattaa</h3>
          <ul>
            <li>
              <input
                {...register("kysymys10", { required: true })}
                name="kysymys10"
                type="radio"
                value="A"
                id="kysymys10A"
              />
              <label htmlFor="kysymys10A" className="answer">
                Pitää mahdollisimman lyhyinä.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys10", { required: true })}
                name="kysymys10"
                type="radio"
                value="B"
                id="kysymys10B"
              />
              <label htmlFor="kysymys10B" className="answer">
                Kirjoittaa itselleen johonkin ylös.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys6", { required: true })}
                name="kysymys6"
                type="radio"
                value="C"
                id="kysymys6C"
              />
              <label htmlFor="kysymys6C" className="answer">
                Olla aina englanniksi.
              </label>
            </li>
          </ul>
          <br />
          <button className="actionButton" type="submit">
            Lähetä vastaukset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tietoturva;
