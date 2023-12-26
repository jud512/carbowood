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
          Röviden: fa vonó szénszál erősítéssel. A vonós hangszerek
          elengedhetetlen tartozéka a vonó, ami pernambukfából készül. Ezt a fát
          eredetileg textilek festésére használták, de a kísérletező
          vonókészítők hamar felismerték a jó mechanikai tulajdonságait, így a
          19. század óta Francois Tourte munkásságának köszönhetően szinte csak
          ebből a fából készítik.
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
        <p>
          A CARBOWOOD ennek az ellenkezője: Fa vonó, de szénszállal erősítve. A
          szénszál extrém szakítószilárdsággal rendelkezik, és húzáskor szinte
          egyáltalán nem nyúlik. Amikor egy rudat meghajlítunk, akkor a külső
          íven a hajlításkor a hajlítóerők húzóerővé transzformálódnak és a rúd
          külső oldala kicsit megnyúlik. Ha szénszálat ragasztunk ennek a rúdnak
          a külső oldalára, akkor a szénszál nem engedi a rúd külső oldalát
          megnyúlni, és ez azt eredményezi, hogy az addig hajlékony anyag
          merevebb lesz. Szénszálas merevítéssel elérhető az, hogy a
          kereskedelemben könnyebben elérhető fákból is megfelelő vonó
          alapanyagot készítsünk. A CARBOWOOD súlyának legnagyobb része fa, kis
          részben tartalmaz szénszálas műanyagot. A szénszál nem teszi ki a vonó
          tömegének nagy részét, hanem csupán két vízszintes szál fut végig a
          vonó keresztmetszetének körülbelül az 1/4 és 3/4-én, így a vonó
          sajátrezgése és annak felharmonikusai a tömör fához hasonlóak. Ezen
          kívül – mivel a szénszálak vízszintes síkban futnak végig a vonó
          hosszában – a föl-le, illetve jobbra-balra való hajlításnak
          különbözőképpen áll ellen a pálca. Föl le irányban rugalmas és
          hajlékony, viszont oldal irányban erős, nem bukik ki a hegedűjáték
          során.
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
