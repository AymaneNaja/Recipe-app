import React from "react";

export function Booklang({book}) {
      return (<div className='gap-1 flex'>
                        <label htmlFor='language' className='text-grad font-bold '>Language:</label>
                        <p className='language text-black text-base'>{book.volumeInfo.language}</p>
                    </div>);
    }
  
  