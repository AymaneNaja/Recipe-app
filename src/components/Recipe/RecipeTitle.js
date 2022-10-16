import React from 'react'

export const RecipeTitle = ({recipe}) => {
  return (
    <div>
    <p className="font-bold text-indigo-700 formal-text text-2xl w-10/12 purple-grad">{recipe.title} </p>

    </div>
  )
}

