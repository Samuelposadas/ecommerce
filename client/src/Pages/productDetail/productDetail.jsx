/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { ButtonDetail } from "../../common/button/button.jsx";
import { blue, lightBlue } from "../../stylesBank/variables.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions/actionProducts";
import { addToCart } from "../../redux/actions/actionCart";
import { Toaster, toast } from "react-hot-toast";
import {
  Wrapper,
  Container,
  ProductImage,
  ProductInfo,
  ProductDescription,
  ProductRating,
  Name,
  Rating,
  SalePrice,
  Images,
  Image,
} from "./styled";
import AddComment from "../../Components/addComment/addComment.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productDetail);
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, []);

  const productComplete = {
    ...product,
    comments: [
      {
        content:
          "This is a comment. This comment is supposed to be longer than one line. Just for testing.",
        stars: 5,
      },
      {
        content:
          "This is another comment. This comment is supposed to be longer than one line. Just for testing.",
        stars: 3,
      }, // cuando traiga el producto, me va a llegar con los comentarios que le corresponden
      {
        content:
          "This product is great... This comment is supposed to be longer than one line. Just for testing.",
        stars: 1,
      },
    ],
  };
  const { img, description, comments, name, salePrice, rating } =
    productComplete;

  const addCart = () => {
    dispatch(addToCart(id));
    toast.success("Added Product");
  };

  const [image, setImage] = useState(img ? img[0] : null);

  return (
    <Wrapper>
      <Container>
        <ProductImage>
          <img src={image} alt="img not fund" />
        </ProductImage>
        <ProductInfo>
          <Name>{name}</Name>
          <Rating>
            {rating
              ? Array(Math.round(rating)).fill(<StarIcon fontSize="40px" />, 0)
              : null}
          </Rating>
          <SalePrice>${salePrice}</SalePrice>
          <Images>
            {img
              ? img.map((item, index) => (
                  <Image
                    src={item}
                    key={index}
                    onClick={() => setImage(item)}
                  ></Image>
                ))
              : null}
          </Images>
          <ButtonDetail backgroundColor={blue} width={"99%"}>
            Buy now
          </ButtonDetail>
          <ButtonDetail
            backgroundColor={lightBlue}
            color={blue}
            onClick={addCart}
            width={"99%"}
          >
            Add to cart
          </ButtonDetail>
          <Link to={`/update/${id}`}>
            <ButtonDetail backgroundColor={blue} width={"99%"}>
              Edit
            </ButtonDetail>
          </Link>
        </ProductInfo>
        <ProductDescription>
          <h1>Description</h1>
          <p>{description}</p>
        </ProductDescription>
        <ProductRating>
          <h1>Add review</h1>
          <AddComment id={id} />

          <h1>Reviews</h1>
          {comments?.map((comment, index) => (
            <div key={index}>
              {Array(Math.round(comment.stars)).fill(
                <StarIcon color="yellow" />,
                0
              )}
              <p>{comment.content}</p>
            </div>
          ))}
        </ProductRating>
      </Container>
      <Toaster />
    </Wrapper>
  );
};

export default ProductDetail;
