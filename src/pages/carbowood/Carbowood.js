import React from "react";

import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import "./carbowood.css";

const Carbowood = () => {
  return (
    <>
      <Hero hero="otherHero">
        <Banner banner="bannerOther" title="Mi az a CarboWood?"></Banner>
      </Hero>
      <div className="carbowoodContainer">
        <p>
          A vonós hangszerek elengedhetetlen tartozéka a vonó, ami
          pernambukfából készül. Ezt a fát eredetileg textilek festésére
          használták, de a kísérletező vonókészítők hamar felismerték a jó
          mechanikai tulajdonságait, így a 19. század óta Francois Tourte
          munkásságának köszönhetően szinte csak ebből a fából készítik.
        </p>
        <p>
          A pernambukfát az évek során gyakorlatilag teljesen kiirtották, emiatt
          a fokozottan veszélyeztetett fajok listájára került, így egyre
          nehezebben és egyre rosszabb minőségben lehet csak beszerezni. Évek
          óta folynak kísérletek e fának a pótlására a vonókészítésben.
        </p>
        <p>
          Az egyik lehetőség egy másik fával való helyettesítése. A szintén
          egzotikus kígyófa adhat valamiféle megoldást, de ez a fa kevésbé
          merev, mint a pernambuk, így inkább csak barokk vonók készítésére
          használják.
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
        <p>
          A CARBOWOOD ennek az ellenkezője: Fa vonó, de szénszállal erősítve. A
          szénszál extrém szakítószilárdsággal rendelkezik. Ha szénszálat
          ragasztunk egy hajlékony rúd külső oldalára, akkor hajlításkor a
          hajlítóerők húzóerővé transzformálódnak, és azt eredményezik, hogy az
          addig hajlékony anyag merevebb lesz. Az így feljavított mechanikai
          tulajdonságú anyaggal elérhető az, hogy a kereskedelemben könnyebben
          elérhető fákból is megfelelő vonó alapanyagot készítsünk. A CARBOWOOD
          súlyának legnagyobb része fa, kis részben tartalmaz szénszálas
          műanyagot. A szénszál nem teszi ki a vonó közepének a nagy részét,
          hanem csupán két vízszintes szál fut végig a vonó keresztmetszetének
          körülbelül a 2/5 és 4/5-én, így a vonó sajátrezgése és annak
          felharmonikusai a tömör fához hasonlóak. Ezen kívül – mivel a
          szénszálak vízszintes síkban futnak végig a vonó hosszában – a föl-le,
          illetve jobbra-balra való hajlításnak különbözőképpen áll ellen a
          pálca. Föl le irányban rugalmas és hajlékony, viszont oldal irányban
          erős, nem bukik ki a hegedűjáték során. A két szénszál vastagságával,
          egymáshoz viszonyított távolságával, a felhasznált fa típusával nagy
          mértékben variálható a vonó hajlékonysága, merevsége, rezonanciája,
          súlya.
        </p>
        <p>
          A két szénszál a csúcsnál követi a vonó formáját, ugyanígy a két
          szélső fa réteg is hajlítva van. Ezért hagyományos fa vonókkal
          ellentétben nem fut ki a fa erezete, hanem követi a vonócsúcs ívét,
          ebből következően sosem törik le a csúcs.
        </p>
      </div>
    </>
  );
};

export default Carbowood;
