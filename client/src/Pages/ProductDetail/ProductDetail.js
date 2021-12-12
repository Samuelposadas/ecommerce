import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Info, Product } from "./styles";
import StarIcon from "@mui/icons-material/Star";
import { ButtonDetail } from "../../common/Btn/BtnStyled";
import { blue, lightBlue } from "../../bankStyles/variables";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../actions";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetail);
  useEffect(() => {
    dispatch(getProductDetail(id));
    console.log("ENTRO");
  }, []);
  console.log(product);
  const productComplete = {
    ...product,
    comments: [
      { content: "dsadsadsaaa", stars: 5 },
      { content: "dsadsads", stars: 3 }, // cuando traiga el producto, me va a llegar con los comentarios que le corresponden
      { content: "dsadsads", stars: 1 },
      { content: "dsadsads", stars: 1 },
      { content: "dsadsads", stars: 1 },
      { content: "dsadsads", stars: 1 },
      { content: "dsadsads", stars: 1 },
    ],
  };
  console.log(productComplete);
  const { img, description, comments, name, salePrice, rating } =
    productComplete;
  return (
    <Container>
      <Product>
        <img src={img ? img[0] : null} alt="img not fund" />
        <h3>Product description:</h3>
        <p>{description}</p>
        <h3>Comments on the product:</h3>
        {/* <p>Comment</p> */}
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {Array(Math.round(comment.stars)).fill(
              <StarIcon fontSize="40px" />,
              0
            )}
            <p>{comment.content}</p>
          </div>
        ))}
      </Product>
      <Info>
        <p className="name">{name}</p>
        <p className="rating">
          {rating
            ? Array(Math.round(rating)).fill(<StarIcon fontSize="40px" />, 0)
            : null}
        </p>
        <p className="price">${salePrice}</p>
        <ButtonDetail backgroundColor={blue}>Buy now</ButtonDetail>
        <ButtonDetail backgroundColor={lightBlue} color={blue}>
          Add to cart
        </ButtonDetail>
      </Info>
    </Container>
  );
};

export default ProductDetail;
//--------------------------------------------------------------------------------------***********************

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getProductDetail } from "../../actions";
// import { ProductDetailStyled } from "./productDetailStyled";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { name, img, description } = useSelector(
//     (state) => state.productDetail
//   );
//   useEffect(() => {
//     dispatch(getProductDetail(id));
//   }, []);
//   return (
//     <ProductDetailStyled>
//       {name ? (
//         <section>
//           <picture>
//             <img src={img[0]} alt="" />
//           </picture>
//           <h1>{name}</h1>
//           <div>{description}</div>
//         </section>
//       ) : null}
//     </ProductDetailStyled>
//   );
// };

// export default ProductDetail;
