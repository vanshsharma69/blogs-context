import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

  const {posts,loading}=useContext(AppContext);

  return (
    <div className='h-full w-11/12 max-w-[550px] py-8 flex flex-col gap-y-8 mt-12 mb-10 justify-center items-center'>
      {
        loading ? (<Spinner></Spinner>) : (posts.length===0 ? 
          (<div> 
            <p>No posts Found</p> 
          </div>
        ) : (posts.map((post) => (
          <div key={post.id}> 
          <p className='text-ms font-bold'>{post.title}</p>
          <p className='text-[12px] mt-2'>by <span className='italic' >{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
          <p className='text-[13px] '>Posted on {post.date}</p>
          <p className='text-[14px] mt-4'>
            {post.content}
          </p>
          <div className='flex gap-x-1 mt-2 sm:gap-3'> 
            {
              post.tags.map((tag,index)=>{
                return <span className='text-blue-800 text-[8px] font-bold underline lg:text-[10px] ' key={index}> {`#${tag}`} </span>
              })
            }
          </div>
          
          </div>
        ))))
      }
    </div>
  )
}

export default Blogs
