import React from "react";
 export function DietComp({
    recipe
}) {
  const diets=[...recipe.diets]
  return <div className="flex justify-start items-start text-lg font-bold gap-2">
            <label className=" font-bold text-indigo-500">Diets:</label>
            <p className="font-semibold">{diets.length>=1?diets+',':'none specific'}</p>
            </div>;
}

  