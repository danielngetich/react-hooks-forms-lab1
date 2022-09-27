import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({data,dataItem}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search,setSearch]=useState("")

  function handleSearch(e){
  setSearch(e.target.value)
  }
function addItems(newItem){
  data([...dataItem,newItem])
}
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const itemsToDisplay = dataItem.filter((dItems)=>{
    if(selectedCategory==="All"&&search===""){
      return dItems
    }else if (selectedCategory==="All"&& dItems.name.toLowerCase().includes(search.toLowerCase())){
      return search
    }
  })
  return (
    <div className="ShoppingList">
      <ItemForm addFormData={addItems} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} searched={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
