import React, { useState } from "react";

export default function Products({ addToCart }) {
  const [products] = useState([
    {
      name: "AA Battery",
      cost: "$2.99",
      image:
        "https://5.imimg.com/data5/JV/CY/MY-21893711/dura-cell-500x500.jpg",
    },
    {
      name: "Blanket",
      cost: "$19.99",
      image:
        "https://target.scene7.com/is/image/Target/GUEST_52caac0a-d243-4d87-abd0-74ba6fa52071?wid=488&hei=488&fmt=pjpeg",
    },
    {
      name: "Toothbrush",
      cost: "$2.99",
      image:
        "https://images.unsplash.com/photo-1520013573795-38516d2661e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    {
      name: "Tablet",
      cost: "$8.99",
      image:
        "https://f1af951e8abcbc4c70b9-9997fa854afcb64e87870c0f4e867f1d.lmsin.net/1000005311208-1000005311207_02-750.jpg",
    },
  ]);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
