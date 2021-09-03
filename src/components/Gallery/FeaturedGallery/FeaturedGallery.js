// import React, { useState, useRef, useEffect } from "react";
// import "./FeaturedGallery.css";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import "./FeaturedItem";
// import FeaturedItem from "./FeaturedItem";
// import { fire, db } from "../../../util/firebase";

// const FeaturedGallery = () => {
//   const [slide, setSlide] = useState(1);
//   const [availableMerchandise, setAvailableMerchandise] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const catSlide1 = useRef();
//   const catSlide2 = useRef();
//   const catSlide3 = useRef();
//   const catSlide4 = useRef();


//   const nextSlideHandler = () => {
//     if (slide <= 3) {
//       setSlide(slide + 1);
//       document.getElementById("catradio" + slide).checked = true;
//     } else {
//       setSlide(1);
//       document.getElementById("catradio" + slide).checked = true;
//     }
//   };
//   const previousSlideHandler = () => {
//     if (slide > 1) {
//       setSlide(slide - 1);
//       document.getElementById("catradio" + slide).checked = true;
//     } else {
//       setSlide(1);
//       document.getElementById("catradio" + slide).checked = true;
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (!loading) {
//     return (
//       <div className="test">
//         <div className="catslider">
//           <h4 className="featuredHeader">Featured</h4>
//           <div className="prevSlideButton">
//             <ArrowBackIosIcon onClick={previousSlideHandler} />
//           </div>
//           <div className="catslides">
//             <input
//               type="radio"
//               name="cat-radio-btn"
//               id="catradio1"
//               ref={catSlide1}
//             />
//             <input
//               type="radio"
//               name="cat-radio-btn"
//               id="catradio2"
//               ref={catSlide2}
//             />
//             <input
//               type="radio"
//               name="cat-radio-btn"
//               id="catradio3"
//               ref={catSlide3}
//             />
//             <input
//               type="radio"
//               name="cat-radio-btn"
//               id="catradio4"
//               ref={catSlide4}
//             />

//             <div className="catslide first">
//               <div className="catslideInfo">
//                 <FeaturedItem
//                   image={availableMerchandise[0].image}
//                   brand={availableMerchandise[0].brand}
//                   size={availableMerchandise[0].size}
//                   item={availableMerchandise[0].item}
//                   price={availableMerchandise[0].price}
//                   sellerName={availableMerchandise[0].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[1].image}
//                   brand={availableMerchandise[1].brand}
//                   size={availableMerchandise[0].size}
//                   item={availableMerchandise[1].item}
//                   price={availableMerchandise[1].price}
//                   sellerName={availableMerchandise[1].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[2].image}
//                   brand={availableMerchandise[2].brand}
//                   size={availableMerchandise[0].size}
//                   item={availableMerchandise[2].item}
//                   price={availableMerchandise[2].price}
//                   sellerName={availableMerchandise[2].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[3].image}
//                   brand={availableMerchandise[3].brand}
//                   size={availableMerchandise[0].size}
//                   item={availableMerchandise[3].item}
//                   price={availableMerchandise[3].price}
//                   sellerName={availableMerchandise[3].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[4].image}
//                   brand={availableMerchandise[4].brand}
//                   size={availableMerchandise[0].size}
//                   item={availableMerchandise[4].item}
//                   price={availableMerchandise[4].price}
//                   sellerName={availableMerchandise[4].sellerName}
//                 />
//               </div>
//             </div>

//             <div className="catslide">
//               <div className="catslideInfo">
//                 <FeaturedItem
//                   image={availableMerchandise[5].image}
//                   brand={availableMerchandise[5].brand}
//                   size={availableMerchandise[0].size}
//                   item={availableMerchandise[5].item}
//                   price={availableMerchandise[5].price}
//                   sellerName={availableMerchandise[5].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[6].image}
//                   brand={availableMerchandise[6].brand}
//                   size={availableMerchandise[6].size}
//                   item={availableMerchandise[6].item}
//                   price={availableMerchandise[6].price}
//                   sellerName={availableMerchandise[6].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[7].image}
//                   brand={availableMerchandise[7].brand}
//                   size={availableMerchandise[7].size}
//                   item={availableMerchandise[7].item}
//                   price={availableMerchandise[7].price}
//                   sellerName={availableMerchandise[7].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[8].image}
//                   brand={availableMerchandise[8].brand}
//                   size={availableMerchandise[8].size}
//                   item={availableMerchandise[8].item}
//                   price={availableMerchandise[8].price}
//                   sellerName={availableMerchandise[8].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[9].image}
//                   brand={availableMerchandise[9].brand}
//                   size={availableMerchandise[9].size}
//                   item={availableMerchandise[9].item}
//                   price={availableMerchandise[9].price}
//                   sellerName={availableMerchandise[9].sellerName}
//                 />
//               </div>
//             </div>

//             <div className="catslide">
//               <div className="catslideInfo">
//                 <FeaturedItem
//                   image={availableMerchandise[10].image}
//                   brand={availableMerchandise[10].brand}
//                   size={availableMerchandise[10].size}
//                   item={availableMerchandise[10].item}
//                   price={availableMerchandise[10].price}
//                   sellerName={availableMerchandise[10].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[11].image}
//                   brand={availableMerchandise[11].brand}
//                   size={availableMerchandise[11].size}
//                   item={availableMerchandise[11].item}
//                   price={availableMerchandise[11].price}
//                   sellerName={availableMerchandise[11].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[12].image}
//                   brand={availableMerchandise[12].brand}
//                   size={availableMerchandise[12].size}
//                   item={availableMerchandise[12].item}
//                   price={availableMerchandise[12].price}
//                   sellerName={availableMerchandise[12].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[13].image}
//                   brand={availableMerchandise[13].brand}
//                   size={availableMerchandise[13].size}
//                   item={availableMerchandise[13].item}
//                   price={availableMerchandise[13].price}
//                   sellerName={availableMerchandise[13].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[14].image}
//                   brand={availableMerchandise[14].brand}
//                   size={availableMerchandise[14].size}
//                   item={availableMerchandise[14].item}
//                   price={availableMerchandise[14].price}
//                   sellerName={availableMerchandise[14].sellerName}
//                 />
//               </div>
//             </div>

//             <div className="catslide">
//               <div className="catslideInfo">
//                 <FeaturedItem
//                   image={availableMerchandise[15].image}
//                   brand={availableMerchandise[15].brand}
//                   size={availableMerchandise[15].size}
//                   item={availableMerchandise[15].item}
//                   price={availableMerchandise[15].price}
//                   sellerName={availableMerchandise[15].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[16].image}
//                   brand={availableMerchandise[16].brand}
//                   size={availableMerchandise[16].size}
//                   item={availableMerchandise[16].item}
//                   price={availableMerchandise[16].price}
//                   sellerName={availableMerchandise[16].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[17].image}
//                   brand={availableMerchandise[17].brand}
//                   size={availableMerchandise[17].size}
//                   item={availableMerchandise[17].item}
//                   price={availableMerchandise[17].price}
//                   sellerName={availableMerchandise[17].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[18].image}
//                   brand={availableMerchandise[18].brand}
//                   size={availableMerchandise[18].size}
//                   item={availableMerchandise[18].item}
//                   price={availableMerchandise[18].price}
//                   sellerName={availableMerchandise[18].sellerName}
//                 />
//                 <FeaturedItem
//                   image={availableMerchandise[19].image}
//                   brand={availableMerchandise[19].brand}
//                   size={availableMerchandise[19].size}
//                   item={availableMerchandise[19].item}
//                   price={availableMerchandise[19].price}
//                   sellerName={availableMerchandise[19].sellerName}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="nextSlideButton">
//             <ArrowForwardIosIcon onClick={nextSlideHandler} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

// export default FeaturedGallery;
