import React ,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name,setName]=useState("")
  const[category,setCategory]=useState("")

  function handleSubmit(e){
e.preventDefault()
onItemFormSubmit({
  id: uuid(),
      name,
      category,
})
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e)=>setCategory(e.target.value)} value={category}>
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
