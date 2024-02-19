import React from 'react'

function EnrollmentSection({courseDetail}) {
  return (
    <div>
        {courseDetail.free?<div className='mt-5 border rounded p-2 text-center'>
            <h2 className='text-gray-500'>Learn and Build Project,Access Source Code and Track your Progress for Free!</h2>
            <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>
              Enroll Now</button>
        </div>
        :<div className='mt-5 border rounded p-2 text-center'>
            <h2 className='text-gray-500'>Buy course,Source Code and track your progress in affordable prices</h2>
            <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>
              Buy Course </button>
        </div>}
        <div className='mt-5 border rounded p-2 text-center'>
            <h2 className='text-gray-500'>Buy Monthly membership and get access to all,Source Code and track your progress in affordable prices</h2>
            <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>
              Buy Membership for ₹99/Month </button>
        </div>
    </div>
  )
}

export default EnrollmentSection