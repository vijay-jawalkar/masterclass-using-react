import Logo from "../assets/logo.png"

export const SideNavigation = () => {
  return (
    <div className="w-20 bg-slate-200 fixed left-0 top-0 h-screen flex flex-col justify-between  p-4">
      <div className="flex flex-col text-2xl gap-8">
        {/* <i className="bi bi-box-arrow-right  mx-auto hover:text-black hover:bg-white  rounded-lg cursor-pointer"></i> */}
        <img className = "w-10 mx-auto" src = {Logo} alt = "logo" />
        <i className="bi bi-filter-left mx-auto hover:text-black hover:bg-white  rounded-lg cursor-pointer"></i>
        <i className="bi bi-bell  mx-auto hover:text-black hover:bg-white  rounded-lg cursor-pointer"></i>
        <i className="bi bi-speedometer text-gray-500 mx-auto hover:text-black hover:bg-white  rounded-lg cursor-pointer"></i>
        <i className="bi bi-calendar-check text-gray-500 mx-auto hover:text-black hover:bg-white  rounded-lg cursor-pointer"></i>
        <i className="bi bi-eye text-gray-500 mx-auto hover:text-black hover:bg-white  rounded-lg"></i>
        <i className="bi bi-people-fill text-gray-500 mx-auto hover:text-black hover:bg-white  rounded-lg cursor-pointer"></i>
        <i className="bi bi-bar-chart-line-fill text-gray-500 mx-auto hover:text-black hover:bg-white  rounded-lg cursor-pointer"></i>
      </div>

      <div className="mx-auto text-3xl">
        <i className="bi bi-person-circle "></i>
      </div>
    </div>
  );
};
