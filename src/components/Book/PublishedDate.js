import React from "react";
export function PublishedDate({book}) {
  return <div className='gap-1 flex'>
                        <label htmlFor='publishedDate' className='text-grad font-bold '>PublishedDate:</label>
                        <p className='language text-black text-base'>{book.volumeInfo.publishedDate}</p>
                    </div>;
}
  