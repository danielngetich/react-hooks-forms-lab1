import React,{useState} from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({addFormData}) {
const[name,setName]=useState("")
const[category,setCategory]=useState("Produce")

function setFormData(e){
e.preventDefault()
const newItem={
  id:uuid(),
  name:name,
  category:category
}
addFormData(newItem)
}
  return (
    <form className="NewItem" onSubmit={setFormData}>
      <label>
        Name:
        <input type="text" name="name"onChange={(e)=>setName(e.target.value)} value={name}/>
      </label>

      <label>
        Category:
        <select name="category"onChange={(e)=>setCategory(e.target.value)} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
