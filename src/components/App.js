import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setColor] = useState(false)

  // console.log(itemData)

  function handleDarkModeClick(){
    setColor((isDarkMode) => !isDarkMode)
}

  return (
    <div className={"App " + (isDarkMode ? "light" : "dark")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList items={items} />
  
    </div>
  );
}

// Create a Filter component by refactoring the <select> element out of the 
// ShoppingList component. Changing the selection in the dropdown should still 
// change which items are displayed in the shopping list.
// You will need to pass a callback function as a prop called 
// onCategoryChange to the Filter component in order for the test to pass.



export default App;
