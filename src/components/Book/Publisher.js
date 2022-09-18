import React from "react";
export function Publisher({book}) {
  return <div className='gap-1 flex'>
                        <label htmlFor='publisher' className='text-grad font-bold '>Publisher:</label>
                        <p className='publisher text-black text-base'>{book.volumeInfo.publisher}</p>
                    </div>;
}
  