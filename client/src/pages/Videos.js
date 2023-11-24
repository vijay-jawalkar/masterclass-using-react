import Student from "../assets/photo-01.jpg";
import Teacher from "../assets/photo-02.jpg";

export const Videos = () => {
  const bgStudent = {
    backgroundImage: `url(${Student})`,
  };

  const bgTeacher = {
    backgroundImage: `url(${Teacher})`,
  };

 

  return (
    <div className="flex flex-row justify-start gap-6">
      {/* video control section */}
      <section className = "">
        <div
          style={bgStudent}
          className="bg-contain bg-no-repeat h-32 w-48  rounded-2xl mb-4 "
        >
          {/* <img src = {Student} alt = "student" className = "rounded-2xl" /> */}
          <p className="text-black bg-white w-14 rounded-md pl-1 text-sm font-bold">
            Ridha
          </p>
        </div>

        <div
          style={bgTeacher}
          className="bg-contain bg-no-repeat h-32 w-48  rounded-2xl "
        >
          {/* <img src = {Teacher} alt = "student" className = "rounded-2xl" /> */}
          <p className="text-black bg-white w-16 rounded-md pl-1 text-sm font-bold">
            Mr. Kaur
          </p>
        </div>

        <div className=" w-48 my-6 flex flex-wrap gap-6 ">
          {/* cam */}
          <div className="flex flex-col gap-2">
            <i className="bi bi-camera-video bg-slate-200 text-lg font-bold px-2 rounded-lg"></i>
            <span className="text-xs">Cam</span>
          </div>

          {/* mic */}
          <div className="flex flex-col gap-2">
            <i className="bi bi-mic bg-slate-200 text-lg font-bold px-2 rounded-lg"></i>
            <span className="text-xs">Mic</span>
          </div>

          {/* share */}
          <div className="flex flex-col gap-2">
            <i className="bi bi-share bg-slate-200 text-lg font-bold px-2 rounded-lg"></i>
            <span className="text-xs">Share</span>
          </div>

          {/* chat */}
          <div className="flex flex-col gap-2">
            <i className="bi bi-chat-dots bg-slate-200 text-lg font-bold px-2 rounded-lg"></i>
            <span className="text-xs">Chat</span>
          </div>

          {/* leave */}
          <div className="flex flex-col gap-2">
            <i className="bi bi-box-arrow-right text-white bg-teal-700 text-lg font-bold px-2 rounded-lg"></i>
            <span className="text-xs">Leave</span>
          </div>
        </div>
      </section>

      {/* video screen section */}
      <section>
        <iframe
          className = "youtube"
          src="https://www.youtube.com/embed/yT3jh2aZN68?si=rb0-TLVRX38yO-N6"
          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};


