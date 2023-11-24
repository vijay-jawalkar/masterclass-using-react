export const ContentNavigation = () => {
    return (
        <div className = "flex justify-start gap-4 p-2 my-4 text-gray-500 bg-slate-200 border rounded-3xl">
           
           {/* classroom */}
           <div className = "flex gap-2 hover:text-black hover:bg-white  rounded-2xl px-3 py-2 cursor-pointer"> 
           <i className="bi bi-person-video3"></i>
           <span > Classroom</span>
           </div>

            {/* whiteboard */}
           <div className = "flex gap-2 hover:text-black hover:bg-white  rounded-2xl px-3 py-2 cursor-pointer"> 
           <i className="bi bi-display"></i>
           <span> Whiteboard</span>
           </div>

            {/* videos */}
           <div className = "flex gap-2 text-black bg-white  rounded-2xl px-3 py-2 cursor-pointer"> 
           <i className="bi bi-play-btn"></i>
           <span> Videos</span>
           </div>

           
            {/* slideshow */}
           <div className = "flex gap-2 hover:text-black hover:bg-white  rounded-2xl px-3 py-2 cursor-pointer"> 
           <i className="bi bi-file-easel"></i>
           <span> Slideshow</span>
           </div>

           
            {/* document */}
           <div className = "flex gap-2 hover:text-black hover:bg-white  rounded-2xl px-3 py-2 cursor-pointer">  
           <i className="bi bi-file-earmark-bar-graph"></i>
           <span> Document</span>
           </div>

           
            {/* doc cam */}
           <div className = "flex gap-2 hover:text-black hover:bg-white  rounded-2xl px-3 py-2 cursor-pointer"> 
           <i className="bi bi-file-earmark-medical"></i>
           <span> Doc.Cam</span>
           </div>
        </div>
    )
}