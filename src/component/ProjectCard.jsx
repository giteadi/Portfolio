
import React from 'react';

const ProjectCard = ({title,description,url,websiteUrl}) => {
    return (
      // <div className="col-6 col-md-4 p-3">
      // <div className={' relative  cursor-pointer projet-box w-full h-full p-0 rounded-3xl'}>
      //   <div className="project-imgbox w-full h-full  rounded-sm">
      //       <img src={url} alt="" />
      //   </div>
      //   <div className="rounded-3xl  absolute left-0 bottom-0 right-0 top-0 z-30 project-title w-full h-full flex flex-col justify-center items-center">
      //       <h1>{title}</h1>
      //       <span>{description}</span>
      //   </div>
      // </div>
      // </div>


      <div className="col-12 col-md-6 col-lg-4 mt-4">
             <div className="proj-imgbx">
        <img src={url}  alt = {title}/>
        <a rel="noopener noreferrer" className="proj-txtx  no-underline text-white w-full h-full flex items-center justify-center flex-col" href = {websiteUrl} target='_blank'>
          <h4>{title}</h4>
          <span>{description}</span>
        </a>
      </div>
      </div>
    );
}

export default ProjectCard;

