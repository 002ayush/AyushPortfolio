

function Resume() {
  return (
    <>
      <div className=' border-black text-black w-screen p-10 bg-slate-300'>
          <h1 className='text-3xl text-left mb-10'><u>Education Details</u></h1>
          {/* Education Details */}
          <div className='text-left border'>
             <div className='mb-6'>
                <p>Bachelor of Technology</p>
                <p className='italic text-sm'>Noida Institute of Engineering and Technology</p>
                <p className='italic text-sm'>Computer Science and Engineering</p>
                <p className='italic text-sm'>CGPA - <strong><i>84.5%</i></strong></p>
             </div>
        
          
          
             <div className='mb-6'>
                <p>Class 12</p>
                <p className='italic text-sm'>Kendriya Vidyalaya</p>
                <p className='italic text-sm'>Science Stream</p>
                <p className='italic text-sm'>Percentage - <strong><i>88.2%</i></strong></p>
             </div>

          
         
             <div className='mb-6'>
                <p>Class 10</p>
                <p className='italic text-sm'>Kendriya Vidyalaya</p>
                <p className='italic text-sm'>Percentage - <strong><i>84.4%</i></strong></p>
             </div>

          </div>

    </div>
      
    </>
  )
}

export default Resume
