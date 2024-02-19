"use client"
import { getCourseById } from '@/app/_services'
import React, { useEffect, useState } from 'react'
import VideoPlayer from './_components/VideoPlayer';
import CourseDetails from './_components/CourseDetails';
import OptionSection from './_components/OptionSection';
import EnrollmentSection from './_components/EnrollmentSection';

function CoursePreview({ params }) {
  const [courseDetail, setcourseDetails] = useState([]);

  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, []);

  const getCourse = () => {
    getCourseById(params.courseId).then(resp => {
      console.log(resp);
      setcourseDetails(resp.courseList);
    });
  }

  return courseDetail?.name && (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='col-span-2'>
          
       {courseDetail?.chapter[0]? <VideoPlayer 
        videoUrl={courseDetail?.chapter[0]?.video.url} /> :null}
        <CourseDetails courseDetail={courseDetail}/>
        </div>
        <div className='mt-5 md:mt-0'>
          <OptionSection/>
          <EnrollmentSection courseDetail={courseDetail}/>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview;
