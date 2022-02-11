import React, { useState } from "react";
import axios from "axios";

export const FormCreateProduct = () => {
  const cargandoImg =
    "https://www.contextsensitivesolutions.org/wp-content/uploads/2021/02/1519081000_compare-ajax-loader.gif";

  const [imagenClou, setImagenClou] = useState({
    img1: "",
    img2: "",
  });

  const [dataProduct, setDataProduct] = useState({
    name: "",
    description: "",
    salePrice: 0,
    purchasePrice: 0,
    img: [],
    stock: 0,
    discount: 0,
    category: null,
    supplier: null,
    subcategory: [],
    specCategory: null,
  });

  const uploadImage = async (e, name) => {
    const files = e.target.files;
    if (!files.length) {
      console.log("don't found image");
      setImagenClou({ ...imagenClou, [name]: "" });
      return;
    }
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "proyecto");
    setImagenClou({ ...imagenClou, [name]: cargandoImg });

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/djnhtnxt1/image/upload",
      data
    );

    if (res.status !== 200) {
      console.log("ERROR AL SUBIR EL ARCHIVO");
    } else {
      setImagenClou({ ...imagenClou, [name]: res.data.secure_url });
    }
  };

  const showUrls = () => {
    const arrayImagenes = [];
    if (imagenClou.img1 && imagenClou.img1 !== "") {
      arrayImagenes.push(imagenClou.img1);
    }
    if (imagenClou.img2 && imagenClou.img2 !== "") {
      arrayImagenes.push(imagenClou.img2);
    }
    setDataProduct({ ...dataProduct, img: arrayImagenes });
  };

  const deleteImage = (nameImage) => {
    setImagenClou({ ...imagenClou, [nameImage]: "" });
  };

  return (
    <div>
      <div>
        {imagenClou.img1 !== "" && (
          <div onClick={() => deleteImage("img1")}>X</div>
        )}
        <img src={imagenClou.img1} style={{ width: "100px" }} />
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => uploadImage(e, "img1")}
        />
      </div>

      <di>
        {imagenClou.img2 !== "" && (
          <div onClick={() => deleteImage("img2")}>X</div>
        )}
        <img src={imagenClou.img2} style={{ width: "100px" }} />
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => uploadImage(e, "img2")}
        />
        <input type="button" onClick={showUrls} value="Enviar" />
      </di>
    </div>
  );
};
