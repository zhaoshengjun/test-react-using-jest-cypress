import React from "react";
import ReactDOM from "react-dom";
import ItemList from "../item-list";

test('should render "no items" when passing empty list', () => {
  const container = document.createElement("div");
  ReactDOM.render(<ItemList items={[]} />, container);
  expect(container.textContent).toBe("no items");
});
