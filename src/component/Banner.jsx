
import React, { useState, useEffect } from 'react';

const Banner = () => {
    const toRotate =["Web Devloper ", "FullStack Developer " ,"Student"];
   const [LoopNum, setLoopNum] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 1000;
    const [delta, setDelta] = useState(300 - Math.random() *100);


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
            
        }, delta);
        return () => {
            clearInterval(ticker)
        };
    });

    const tick = ()=>{
        let i = LoopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

        setText(updateText);
        if(isDeleting)
        {
            setDelta(prevdelta => prevdelta/2);
        }
        if(!isDeleting && updateText === fullText)
        {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updateText === "")
        {
            setIsDeleting(false);
            setLoopNum(LoopNum+1);
            setDelta(500);
        }
    }

    return (
 
            <section  id = "home" className='inline-block px-2 mb-4 text-xl bg-top bg-no-repeat bg-cover border-white border-opacity-50 border-solid banner pt-28 pb-28 bg-banner-bg border-1 md:px-6'>
                <div className="w-full">
                    <div className="items-center row ">
                        <div className="col-md-6 col-sm-12 col-xl-7">
                            <div className="tagline font-bold tracking-tight px-2 py-2 bg-tagline-bg inline-block border-pink-50-100 border-[1px]">
                                Welcome to My Portfolio 
                            </div>
                            <h1 className='block mb-5 text-6xl font-bold tracking-tight md:text-5xl sm:xl'>
                                Hello I Am Aditya <span className='pr-1 text-yellow-400 border-r-4 wrap border-cursor'>
                                    {text}
                                </span>
                            </h1>
                            <p className='text-para '>
                            Passionate and proficient MERN stack developer, well-versed in MongoDB, Express.js, React.js, and Node.js. Demonstrates mastery in JavaScript, jQuery, and Bootstrap. Adept at crafting end-to-end web solutions, excelling in front-end aesthetics, back-end functionality, and effective problem-solving. Eager to take on a dynamic role as a MERN stack developer, committed to elevating organizational achievements                                 </p>
                            <a href="#connect">
                            <button className='px-3 py-2 text-white border-2 border-white button'  onClick={()=>console.log("connect")}>Let's connect</button>

 </a>
                        </div>
                        <div className="mb-auto col-md-6 col-sm-12 col-xl-5">
                        <img  className="w-11/12 animate-move " src="https://ik.imagekit.io/b80sh2n2k/header-img.svg?updatedAt=1679470984140" alt="headerImg" />
                        </div>
                    </div>
                </div>
            </section>
       
    );
}

export default Banner;

