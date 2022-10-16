import React from "react";
 export function RecipeImg({
    recipe
}) {
  return <div className="flex justify-start items-center text-lg font-bold w-10/12  max-w-sm shadow-2xl  ">
            <img className="rounded-lg  border-indigo-600 border-2"
             src={recipe.image}/>
        </div>;
}