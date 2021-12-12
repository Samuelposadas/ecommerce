// import React from "react";
// import { useParams } from "react-router-dom";

// import { Container, Info, Product } from "./styles";
// import StarIcon from "@mui/icons-material/Star";
// import { ButtonDetail } from "../../common/Btn/BtnStyled";
// import { blue, lightBlue } from "../../bankStyles/variables";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const product = {
//     ...productsMock[id],
//     comments: [
//       { content: "dsadsadsaaa", stars: 5 },
//       { content: "dsadsads", stars: 3 }, // cuando traiga el producto, me va a llegar con los comentarios que le corresponden
//       { content: "dsadsads", stars: 1 },
//       { content: "dsadsads", stars: 1 },
//       { content: "dsadsads", stars: 1 },
//       { content: "dsadsads", stars: 1 },
//       { content: "dsadsads", stars: 1 },
//     ],
//   };

//   return (
//     <Container>
//       <Product>
//         <img src={product.image} alt="img not fund" />
//         <h3>Product description:</h3>
//         <p>{product.description}</p>
//         <h3>Comments on the product:</h3>
//         {/* <p>Comment</p> */}
//         {product.comments.map((comment, index) => (
//           <div key={index} className="comment">
//             {Array(Math.round(comment.stars)).fill(
//               <StarIcon fontSize="40px" />,
//               0
//             )}
//             <p>{comment.content}</p>
//           </div>
//         ))}
//       </Product>
//       <Info>
//         <p className="name">{product.name}</p>
//         <p className="rating">
//           {Array(Math.round(product.rating)).fill(
//             <StarIcon fontSize="40px" />,
//             0
//           )}
//         </p>
//         <p className="price">${product.price}</p>
//         <ButtonDetail backgroundColor={blue}>Buy now</ButtonDetail>
//         <ButtonDetail backgroundColor={lightBlue} color={blue}>
//           Add to cart
//         </ButtonDetail>
//       </Info>
//     </Container>
//   );
// };

// export default ProductDetail;
