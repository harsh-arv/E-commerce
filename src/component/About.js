import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1>Navbar</h1>
      <p>1. Show cart items count.</p>
      <p>2. Show relevant navigation links</p>
      <p></p>
      <h1>All products page.</h1>
      <p>   1. Show list of products from the API (using the above server).</p>
      <p>   2. Give button to add a product to cart.</p>
      <p></p>
      <h1>Product detail page.</h1>
      <p>   1. Show all the details of a product.</p>
      <p>   2. Give button to add a product to cart.</p>
      <p></p>
      <h1 >Cart page</h1>
      <p>   1. Show all the items in the cart.</p>
      <p>   2. Each product in cart is editable by clicking on the “+” button. And
        we can edit that product inline. On finish editing the product, It show
        Alert(Quantity Increased).
      </p>
      <p>   3. Each product is deletable, on clicking of the delete button it should
        delete the product and show some sort of Alert(Item Removed from Cart).
      </p>
      <p>   4. Implement a sort button. On clicking it should sort by “price”.</p>
    </div>
  );
};

export default About;
