/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { ButtonDetail } from "../../common/button/button.jsx";
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
  OldSalePrice,
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
          "This is a comment. This comment is supposed to be longer than one line. Just for testing purposes.",
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

  const { img, description, comments, name, salePrice, rating, discount } =
    productComplete;

  const addCart = () => {
    dispatch(addToCart(id));
    toast.success("Added Product");
  };

  const [image, setImage] = useState(false);

  return (
    <Wrapper>
      <Container>
        <ProductImage>
          <img src={image || (img ? img[0] : null)} alt="img not fund" />
        </ProductImage>
        <ProductInfo>
          <Name>{name}</Name>
          <Rating>
            {rating
              ? Array(Math.round(rating)).fill(<StarIcon fontSize="40px" />, 0)
              : null}
          </Rating>
          {discount ? (
            <>
              <OldSalePrice>{salePrice} USD</OldSalePrice>
              <SalePrice>
                {salePrice - (salePrice * discount) / 100} USD
              </SalePrice>
            </>
          ) : (
            <SalePrice>{salePrice} USD</SalePrice>
          )}
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
          <ButtonDetail width={"100%"}>Buy now</ButtonDetail>
          <ButtonDetail onClick={addCart} width={"100%"}>
            Add to cart
          </ButtonDetail>
          <Link to={`/update/${id}`}>
            <ButtonDetail width={"100%"}>Edit</ButtonDetail>
          </Link>
        </ProductInfo>
        <ProductDescription>
          <p>Description</p>
          <p>{description}</p>
        </ProductDescription>
        <ProductRating>
          <p>Add review</p>
          <AddComment id={id} />

          <p>Reviews</p>
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
