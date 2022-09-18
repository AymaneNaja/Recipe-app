import React from "react";
export function BookCategories({book}) {
  return <div className='gap-1 flex'>
                        <label htmlFor='categories' className='text-grad font-bold '>Categories:</label>
                        <p className='categories text-black text-base'>{[...book.volumeInfo.categories]}</p>
                    </div>;
}
  