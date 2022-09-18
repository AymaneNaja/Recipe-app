import React from "react";
export function MoreInfoBtn({book}) {
  return <div className='font-bold bg-sky-600 hover:bg-blue-900 text-white transition-all
                    text-xl w-2/4 p-2 text-center rounded-lg'>
                        <a className=' text-decoration-none text-white' href={book.volumeInfo.infoLink}>More Info</a>
                    </div>;
}
  