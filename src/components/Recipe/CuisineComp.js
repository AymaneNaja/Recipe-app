import React from "react";
export function CuisineComp({
    recipe
}) {
  return (<div className="flex justify-start items-center text-lg  gap-2 mt-6">
            <label className="font-bold text-indigo-500">Cuisine:</label>
            {recipe.cuisines.length>=1?<p className="flex gap-2 font-semibold">{recipe.cuisines+''}</p>:'none specific'} 
            </div>)
}
  