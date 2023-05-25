import Navbar from "../../components/Navbar";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ongles_img_1 from "../../assets/ongles1.jpg";
import ongles_img_2 from "../../assets/ongles2.jpeg";
import ongles_img_3 from "../../assets/ongles3.jpg";
import snapchat_logo from "../../assets/snapchat_logo.png";
import facebook_logo from "../../assets/facebook_logo.png";
import instagram_logo from "../../assets/instagram_logo.png";
import "../../styles/home.css";

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
      name: "LIPS BOOSTER CRÈME",
      price: "10000 F CFA",
      image: ongles_img_3,
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
            / Ongles parfait <br /> Main irrésistibles
          </p>
          <p>#Optez pour nos press on nails</p>
          <Link>Achetez</Link>
        </div>
      </div>
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
      <div className="lips-booster-creme">
        <div className="box-content">
          <p>
            / Lèvres captivante <br /> Séduction absolue
          </p>

          <p>#Choisissez nos lips booster crème</p>
          <Link>Achetez</Link>
        </div>
      </div>
      <footer>
        <div className="address-container">
          <div className="address box-container">
            <p style={{ fontSize: "20px" }}>ADDRESS</p>
            <br />
            <p>Cocody, Angré</p>
          </div>
          <div className="contact box-container">
            <p style={{ fontSize: "20px" }}>CONTACT</p>
            <br />
            <p>Tel: 0747650257</p>
            <p>Email: contact@bimaroom.com</p>
          </div>
          <div className="opening-hours box-container">
            <p style={{ fontSize: "20px" }}>HORAIRES D'OUVERTURES</p>
            <br />
            <p>Du lundi au samedi</p>
            <p>De 10h à 20h</p>
          </div>
        </div>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/profile.php?id=100021732518907&mibextid=LQQJ4d">
            <img src={facebook_logo} alt="Facebook" />
          </a>
          <a href="https://instagram.com/caprice_bysasha?igshid=MzRlODBiNWFlZA==">
            <img src={instagram_logo} alt="Instagram" />
          </a>
          <a href="https://t.snapchat.com/Qxxoc7iX">
            <img src={snapchat_logo} alt="Twitter" />
          </a>
        </div>
      </footer>
    </div>
  );
}
