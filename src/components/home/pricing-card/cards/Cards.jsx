import React, { use } from 'react';
import Card from './card';

const Cards = ({ modelPromise }) => {
  const jsonData = use(modelPromise);
  return (
    <div>
      <div className="grid grid-cols-3 w-[90%] mx-auto gap-[30px]">
        {jsonData.map((card, index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;