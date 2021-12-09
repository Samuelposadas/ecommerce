import React, { FC } from "react";
import { productsMock } from "../../mock/productsMock";

//components
import Card from "../../Components/Card/Card";

const Home: FC = () => {
  return (
    <div>
      <h1>this is a Home Page</h1>
      {productsMock?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
