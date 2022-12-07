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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          quaerat magni cumque laboriosam odit saepe excepturi repudiandae hic
          perferendis maiores minima quibusdam, blanditiis dolorem. Sunt placeat
          et quidem explicabo ipsam ex nisi cum iste error at aspernatur hic
          sint accusantium facilis laborum voluptatem sequi a quis, quibusdam
          doloremque ducimus, distinctio non rerum numquam? Vitae assumenda vero
          maxime rem nesciunt dolores asperiores odit culpa, possimus
          voluptatum. Adipisci, vitae ad! Voluptates facere accusantium culpa
          doloremque sit nulla enim modi, qui maxime quidem quis, cupiditate
          iure praesentium corporis quisquam! Facere tempora pariatur deserunt
          corrupti, debitis quibusdam ex ipsa, dicta laboriosam iure nobis totam
          cumque dignissimos laudantium iusto rem autem officia veniam
          aspernatur. Voluptate, mollitia! Fugit obcaecati exercitationem
          itaque? Enim laudantium nihil id nostrum nesciunt, sit aut quae.
          Tempora laborum optio iure repudiandae, dolorum doloribus iusto, fugit
          non culpa laboriosam blanditiis possimus iste nihil illo? Magni illo
          ad quae, incidunt quisquam qui dolores natus minima, sequi officia
          cumque maxime inventore aliquam quidem?
        </p>
      </div>
      <FeaturedGallery />
    </section>
  );
};

export default Introduction;
