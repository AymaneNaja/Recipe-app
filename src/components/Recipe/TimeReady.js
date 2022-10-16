import React from "react";
export function TimeReady({recipe}) {
  return <div className="flex justify-start items-center text-lg font-bold gap-2">
    <label className="font-bold text-indigo-500 ">Time to to Prepare:</label>
            <p className="font-semibold">{recipe.readyInMinutes}min</p></div>;
}
  