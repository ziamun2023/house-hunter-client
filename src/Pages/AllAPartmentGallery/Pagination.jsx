import React from 'react';

const Pagination = ({totalPost,postPerpage,setCurrentPage}) => {
    const pages=[]
    for(let i=1 ; i <= Math.ceil(totalPost/postPerpage); i++ ){
        pages.push(i)
    }
    const action=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Use "auto" for instant scrolling without smooth animation
          });
    }
    return (
        <div className='mt-10 text-center  '>
            {
                pages.map((items,index)=> <button  key={index}  onClick={()=>setCurrentPage(items)} >
              <div onClick={action}  className='mx-2 bg-black text-[20px] px-5 rounded-md '>
              {items}
              </div>
             </button>
                  
              )
            }
        </div>
    );
};

export default Pagination;