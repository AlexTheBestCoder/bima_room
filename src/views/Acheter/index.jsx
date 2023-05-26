import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/acheter.css";
import nails_img_1 from "../../assets/press_on_nails_1.jpg";
import nails_img_2 from "../../assets/press_on_nails_2.jpg";
import nails_img_3 from "../../assets/press_on_nails_3.jpg";
import nails_img_4 from "../../assets/press_on_nails_4.jpg";
import nails_img_5 from "../../assets/press_on_nails_5.jpg";
import nails_img_6 from "../../assets/ongles2.jpeg";
import kit_lips_booster from "../../assets/kit_lips_booster.jpg"

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </div>
  );
};

const ProductList = () => {
  const [press_on_nails] = useState([
    {
      id: 1,
      title: "Press On Nails XXL",
      price: "$10",
      image: nails_img_1,
      category: "press_on_nails", // Ajoute la propriété category ici
    },
    {
      id: 2,
      title: "Press On Nails XL",
      price: "$20",
      image: nails_img_2,
      category: "press_on_nails", // Ajoute la propriété category ici
    },
    {
      id: 3,
      title: "Press On Nails",
      price: "$30",
      image: nails_img_3,
      category: "press_on_nails", // Ajoute la propriété category ici
    },
    {
      id: 4,
      title: "Press On Nails",
      price: "$40",
      image: nails_img_4,
      category: "press_on_nails", // Ajoute la propriété category ici
    },
    {
      id: 5,
      title: "Press On Nails",
      price: "$50",
      image: nails_img_5,
      category: "press_on_nails", // Ajoute la propriété category ici
    },
    {
      id: 6,
      title: "Press On Nails",
      price: "$60",
      image: nails_img_6,
      category: "press_on_nails", // Ajoute la propriété category ici
    },
    // Ajoute d'autres produits ici si nécessaire
  ]);

  const [lips_booster_creme] = useState([
    {
      id: 2,
      title: "Kit Lips Booster Crème",
      price: "$15",
      image: kit_lips_booster,
      category: "lips_booster_creme", // Ajoute la propriété category ici
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const filteredProductsLips = press_on_nails.filter((product) => {
    const matchesSearchQuery = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "" || product.category === filterCategory;
    return matchesSearchQuery && matchesCategory;
  });
  const filteredProductsPressOnNails = lips_booster_creme.filter((product) => {
    const matchesSearchQuery = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "" || product.category === filterCategory;
    return matchesSearchQuery && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="buy-container">
        <div className="filters">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Recherche..."
          />
          <select value={filterCategory} onChange={handleCategoryChange}>
            <option value="">Toutes les catégories</option>
            <option value="press_on_nails">Press On Nails</option>
            <option value="lips_booster_creme">Lips Booster Crème</option>
          </select>
        </div>
        <br />
        <div className="product-list">
          {filteredProductsLips.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          {filteredProductsPressOnNails.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
