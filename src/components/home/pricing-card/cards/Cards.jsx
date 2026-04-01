import React, { use } from 'react';
import Card from './card';

const Cards = ({ modelPromise, carts, setCart }) => {
  const jsonData = use(modelPromise);
  return (
    <div>
      <div className="grid grid-cols-3 w-[90%] mx-auto gap-[30px]">
        {jsonData.map((card, index) => (
          <Card key={index} card={card} carts={carts} setCart={setCart}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;