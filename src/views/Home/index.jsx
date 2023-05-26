import Navbar from "../../components/Navbar";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ongles_img_1 from "../../assets/ongles1.jpg";
import ongles_img_2 from "../../assets/ongles2.jpeg";
import kit_lips_booster from "../../assets/kit_lips_booster.jpg";
import "../../styles/home.css";
import Footer from "../../components/Footer";

export default function Home() {
  const products = [
    {
      name: "Press On Nails xl",
      price: "5000 F CFA",
      image: ongles_img_1,
      isBestSeller: true,
      isQuickPreviewAvailable: true,
    },

    {
      name: "KIT LIPS BOOSTER CRÈME",
      price: "10000 F CFA",
      image: kit_lips_booster,
      isBestSeller: true,
      isQuickPreviewAvailable: true,
    },
    {
      name: "Press On Nails xxl",
      price: "8000 F CFA",
      image: ongles_img_2,
      isBestSeller: true,
      isQuickPreviewAvailable: true,
    },
  ];

  const settings = {
    // Options de configuration du diaporama
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    // Ajoutez d'autres options selon vos besoins
  };

  return (
    <div className="home-container">
      <Navbar />
      <Slider {...settings} className="slide-container">
        <div className="slide-2">
          <p>
            Une Manicure parfaite <br /> en un clin d'œil <br /> avec nos press
            on nails <br /> tendance
          </p>
          <Link to="/content1" className="content-link">
            ACHETER VOS PRESS ON NAILS
          </Link>
        </div>
        <div className="slide-3">
          <p>
            Des lèvres irrésistibles <br /> avec le kit LIPS BOOSTER CRÈME{" "}
            <br /> pour sublimer votre sourire.
          </p>
          <Link to="/content2" className="content-link">
            ACHETER VOS LIPS BOOSTER CRÈME
          </Link>
        </div>
      </Slider>
      {/* <div className="guaranteed-effect">
        <div className="box-content">
          <h2>UN EFFET GARANTI TOUTE LA JOURNÉE</h2>
          <p>
            Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur
            « Modifier Texte » ou double-cliquez ici pour ajouter votre contenu
            et personnaliser les polices.
          </p>
          <Link to="/en-savoir-plus" className="more-link">
            EN SAVOIR PLUS
          </Link>
        </div>
      </div> */}
      <div className="press-on-nails">
        <div className="box-content">
          <p>
            Ongles parfaits / <br /> Main irrésistibles
          </p>
          <p>#Optez pour nos press on nails</p>
          <Link>Achetez</Link>
        </div>
      </div>
      <br /><br />
      <div className="best-products">
        <p>
          MEILLEURS VENTES <br /> <h6>CHEZ CAPRICE BEAUTY</h6>{" "}
        </p>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product">
              <img src={product.image} alt="" />
              <br />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
        <Link>ALLER À LA BOUTIQUE</Link>
      </div>
      <br /><br />
      <div className="lips-booster-creme">
        <div className="box-content">
          <p>
            Lèvres captivante /<br /> Séduction absolue
          </p>

          <p>#Choisissez nos lips booster crème</p>
          <Link>Achetez</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
