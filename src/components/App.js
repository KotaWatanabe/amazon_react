import React from "react";
import { ProductShowPage } from "./ProductShowPage";
import { ProductIndexPage } from "./ProductIndexPage";
import Star from "./Star";

function App() {
  return (
    <div>
      <ProductIndexPage />
      <ProductShowPage />
    </div>
  );
}

export { App };
