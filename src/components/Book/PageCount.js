import React from "react";
export function PageCount({book}) {
  const descript=book.volumeInfo.description.replace(/(<([^>]+)>)/ig, '');
  return <div className='flex gap-1'>
                        <label htmlFor='pageCount' className='text-grad font-bold'>Page Count:</label>
                        <p className='pageCount text-black text-base'>{book.volumeInfo.pageCount}</p>
                    </div>;
}
  