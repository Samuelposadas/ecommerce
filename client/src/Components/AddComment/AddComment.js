import React, { useState } from "react";
import { Container, Star } from "./styles";
import StarIcon from "@mui/icons-material/Star";
import { ButtonDetail } from "../../common/Btn/BtnStyled";
import { blue } from "../../bankStyles/variables";
import { addComment } from "../../redux/actions/actionProducts";
import { useDispatch } from "react-redux";
const AddComment = ({ id }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");
  const handleClick = () => {
    const review = {
      content: comment,
      stars: rating,
      id_Product: id,
      id_User: 1, // aca iria el id del usuario q hace el comment, por ahora harcodeado
    };
    dispatch(addComment(review));
    setRating(null);
    setComment("");
  };
  return (
    <Container>
      <input
        placeholder="Comment..."
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <Star key={ratingValue}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              ></input>
              <StarIcon
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                className={
                  ratingValue <= (hover || rating) ? "star" : "starDisable"
                }
              />
            </Star>
          );
        })}
      </div>
      <ButtonDetail
        backgroundColor={blue}
        width={"100px"}
        onClick={handleClick}
      >
        Add review
      </ButtonDetail>
    </Container>
  );
};

export default AddComment;