import React from "react";

import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import "./carbowood.css";
import imgKompBow from "../../images/carbowood/comp_bow.JPG";
import imgPernabuk from "../../images/carbowood/pernambuk.jpg";
import imgCsucs from "../../images/carbowood/csucs.JPG";
import logo from "../../images/logo_wb.png";

const Carbowood = () => {
  return (
    <>
      <Hero hero="otherHero">
        <Banner banner="bannerOther" title="Mi az a CarboWood?"></Banner>
      </Hero>
      <div className="carbowoodContainer">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 style={{ margin: "0 8px 0 0" }}>Mi az a</h2>
            <img src={logo} alt="" width="300px" />
            <h2 style={{ margin: "0 0 0 8px" }}>?</h2>
          </div>

          <p>Röviden: fa vonó szénszál erősítéssel. </p>
          <p>
            A vonós hangszerek elengedhetetlen tartozéka a vonó, ami
            tradícionálisan pernambukfából készül. Ezt a fát régen textilek
            festésére használták, de a kísérletező vonókészítők hamar
            felismerték a jó mechanikai tulajdonságait, így a 19. század óta
            François Tourte munkásságának köszönhetően szinte csak ebből a fából
            készítik.
          </p>
          <div className="img-container">
            <img
              className="img-text-tourte"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/F.X.Tourte_engraving_by_J.Frey_1818.jpg/800px-F.X.Tourte_engraving_by_J.Frey_1818.jpg"
              alt=""
              width="150px"
            />
            <p className="img-title">François Tourte</p>
          </div>
        </div>

        <p>
          A pernambukfát az évek során gyakorlatilag teljesen kiirtották, emiatt
          a fokozottan veszélyeztetett fajok listájára került, így egyre
          nehezebben és egyre rosszabb minőségben lehet csak beszerezni. Évek
          óta folynak kísérletek e fának a pótlására a vonókészítésben.
        </p>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="img-text-left"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3a/%C3%81rvore_pau-brasil_%28Paubrasilia_echinata%29_por_Jani_Pereira.jpg"
              alt=""
              height="250px"
            />
            <img
              className="img-text-left"
              src={imgPernabuk}
              alt=""
              height="250px"
            />
          </div>
          <div></div>
          <p className="img-title">Pernambuk fa (Paubrasilia echinata)</p>
        </div>

        <p>
          Az egyik lehetőség egy másik fával való helyettesítése. A szintén
          egzotikus kígyófa adhat valamiféle megoldást, de ez a fa kevésbé
          merev, mint a pernambuk, így inkább csak barokk vonók készítésére
          használják. A vasfából (olneya tesota) is jó minőségű vonók
          készíthetők, de ez is védett faj, így ez sem lehet alternatíva.
        </p>

        <p>
          Másik lehetőség a szénszálas vonók alkalmazása, egy harmadik irány
          pedig a szénszál és fa valamilyen fajta kompozíciója. Tömegtermelésben
          gyártanak fa-szén kompozit vonókat oly módon, hogy egy szénszálas
          műanyag mag köré egy vékony fa furnért préselnek, mintegy
          becsomagolják a fával a szénszálas műanyagot, így ez a vonó csak
          kinézetében fa, mechanikai és hangzásbeli tulajdonságait tekintve
          szénszálas műanyag.
        </p>
        <div style={{ textAlign: "center" }}>
          <img
            className="img-text-left"
            src={imgKompBow}
            alt=""
            height="250px"
          />
          <p className="img-title">Gyári kompozit vonó kettéfűrészelve</p>
        </div>

        <p>
          A CARBOWOOD ennek az ellenkezője: Fa vonó, de szénszállal erősítve. A
          szénszál extrém szakítószilárdsággal rendelkezik, és húzáskor szinte
          egyáltalán nem nyúlik. Nem szükséges, hogy a rúd teljes
          keresztmetszetében szénszálból álljon, ahogyan azt egyes
          sorozatgyártású vonóknál tapasztalhatjuk. Elég csak vékony rétegben
          alkalmazni azt a szükséges pontokon. A szénszál középvonalhoz
          viszonyított elhelyezése befolyásolja a rúd merevségét. Minél inkább a
          hajlítandó rúd szélén van, annál jobban merevíti azt, és minél inkább
          a közepén helyezkedik el, annál inkább semleges a hatása. Mivel a
          szénszál nem teszi ki a vonó tömegének nagy részét, hanem csupán két
          vízszintes szál fut végig a vonó keresztmetszetének körülbelül az 1/4
          és 3/4-én, így a vonó sajátrezgése és annak felharmonikusai a tömör
          fához hasonlóak.
        </p>
        <p>
          Szénszálas merevítéssel elérhető az, hogy a kereskedelemben könnyebben
          elérhető fákból is megfelelő vonó alapanyagot készítsünk. A CARBOWOOD
          súlyának legnagyobb része fa, kis részben tartalmaz szénszálas
          műanyagot. Ezen kívül – mivel a szénszálak vízszintes síkban futnak
          végig a vonó hosszában – a föl-le, illetve jobbra-balra való
          hajlításnak különbözőképpen áll ellen a pálca. Föl le irányban
          rugalmas és hajlékony, viszont oldal irányban erős, nem bukik ki a
          hegedűjáték során.
        </p>
        <p>
          A két szénszál vastagságával, egymáshoz viszonyított távolságával, a
          felhasznált fa típusával nagymértékben variálható a vonó
          hajlékonysága, merevsége, rezonanciája, súlya. A két szénszál a
          csúcsnál követi a vonó formáját, ugyanígy a két szélső fa réteg is
          hajlítva van. Ezért hagyományos fa vonókkal ellentétben nem fut ki a
          fa erezete, hanem követi a vonócsúcs ívét, ebből következően sosem
          törik le a csúcs.
        </p>
        <div style={{ textAlign: "center" }}>
          <img className="img-text-left" src={imgCsucs} alt="" height="250px" />
          <p className="img-title">
            A két szélső faréteg erezete és a szénszálak követik a csúcs ívét
          </p>
        </div>
        <p>
          A Carbowood vonók közti különbség a felhasznált fa fajtájából adódik.
          A jelenlegi készletben a leglágyabb a mahagóni, közepesen lágy a
          padauk, meglehetősen feszes a purplehart, a juhar és a platánfa. A
          wenge, a tali pedig nagyon feszes. Az európai fafajokkal a
          kísérletezés folyamatban van. Juhar, platán, és kőris fákból már
          készítettem vonókat, meggyőzőek az eredmények. Óriási előny, hogy ezek
          használatával teljesen ki lehet váltani nem csak a veszélyeztetett
          trópusi fákat, hanem bármilyen trópusi fát. Így a vonók alapanyaga
          teljes mértékben fenntartható forrásból származhat.
        </p>
      </div>
    </>
  );
};

export default Carbowood;
