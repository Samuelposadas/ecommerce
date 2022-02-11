import React, { useEffect, useState } from "react";
import { Container, Star } from "./styled.jsx";
import StarIcon from "@mui/icons-material/Star";
import { ButtonDetail } from "../../common/button/button.jsx";
import { blue } from "../../stylesBank/variables";
import { addComment } from "../../redux/actions/actionProducts";
import { useDispatch } from "react-redux";
const AddComment = ({ id }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});
  const handleClick = () => {
    const review = {
      content: comment,
      stars: +rating,
      id_Product: id,
      id_User: 1, // aca iria el id del usuario q hace el comment, por ahora harcodeado
    };
    dispatch(addComment(review));
    setRating(null);
    setComment("");
  };
  const validate = (input) => {
    let errors = {};
    if (input.length > 250) {
      errors.comment = "Comment should be less than 250 characters long";
    } else {
      errors.comment = "";
    }
    return errors;
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  useEffect(() => {
    setErrors(validate(comment));
  }, [comment]);
  return (
    <Container>
      <input
        placeholder=""
        type="text"
        value={comment}
        onChange={handleChange}
      />
      {errors.comment && <p>{errors.comment}</p>}
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
        disabled={!rating || !comment || errors.comment ? true : false}
      >
        Add review
      </ButtonDetail>
    </Container>
  );
};

export default AddComment;
