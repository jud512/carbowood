import React from "react";
import "./introduction.css";
import imageTP from "../../images/img-introduction.jpg";
import FeaturedGallery from "../featuredGallery/FeaturedGallery";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction-center">
        <div className="img-container">
          <img src={imageTP} alt="Tóth Péter vonókészítő" />
        </div>
        <p>
          Brácsaművészként diplomáztam, de a zene mellett mindig érdekelt a
          famunka, a technika, a hangszerek működése. Emellett hobbiként fúrtam
          faragtam, később az asztalos szakmát is kitanultam. Az asztalos
          szakmában is a szokatlan formatervezési és technikai megoldások
          izgatnak. Mivel fiatalkoromat gyakorlással töltöttem, a
          hangszerkészítést autodidakta módon kellett megtanulnom. Ez vonós
          hangszeres zenészként és famunkában jártas emberként nem jelentett
          nagy kihívást. A saját brácsám elkészítése után -mivel ez egy
          szabványosnál sokkal szélesebb hangszer- muszáj volt egy tokot is
          készíteni. Ezt szénszálas műanyagból építettem, hogy könnyű legyen és
          erős. Néhány vonós hangszer elkészítése után kipróbáltam magam a
          vonókészítésben is. A legnagyobb problémát a megfelelő alapanyag
          beszerzése jelentette. A szénszálas műanyaggal való tapasztalatom és
          az újító kedvem ösztökélt arra, hogy kipróbáljam a fa és a szénszál
          újfajta egyesítését a vonókészítésben. Pernambukfát gyakorlatilag nem
          lehet kapni, ezért kénytelen voltam más fát használni, és ennek a más
          fának a gyengeségeit a szénszál rendkívüli mechanikai tulajdonságaival
          kompenzálni. Az első vonó nem volt túl szép, de meglepően jól
          működött. Innen már nem volt visszaút, muszáj volt további vonókat
          készíteni, további kísérleteket végezni különböző fajta fákkal,
          különböző szén-fa arányokkal. Menet közben természetesen nem
          kerülhettem ki a megfelelő szakirodalom beszerzését és az abban
          fellelhető tudás elsajátítását sem. Az eddig elkészített több tucatnyi
          vonóból és a zenész kollégák visszajelzéseiből nagyon sokat tanultam,
          kirajzolódott, hogy a kompozit vonók által nyitott rengeteg irány
          közül melyek azok, amelyeken érdemes tovább haladnom.
        </p>
      </div>
      <FeaturedGallery />
    </section>
  );
};

export default Introduction;
