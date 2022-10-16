import React from "react";
export function Servings({recipe}) {
  return <div className="flex justify-start items-center text-lg font-bold gap-2"> 
        <label className="font-bold text-indigo-500">Servings :</label>
         <p className="font-semibold">{recipe.servings}</p></div>;
}
  