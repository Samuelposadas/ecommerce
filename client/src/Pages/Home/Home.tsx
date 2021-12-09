import React, { FC } from "react";

import { productsMock } from "../../mock/productsMock";
import Card from "../../Components/Card/Card";

const Home: FC = () => {
  return (
    <div>
      <h1>this is a Home page</h1>
      {productsMock?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
