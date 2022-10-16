

export function DishTypes({
   recipe
}) {
 return <div className="flex justify-start items-start text-lg  gap-2 w-full mr-1 flex-wrap">
           <label className="font-bold text-indigo-500 ">Dish Type :</label>
           {recipe.dishTypes.length>=1?<p className="font-semibold">{recipe.dishTypes+''}</p>:'none specific'}
           </div>;
}

 