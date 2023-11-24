export const Header = () => {
    return (
        <header className = "flex justify-between">

            {/* left */}
            <div className = "flex items-center gap-2"> 
            <i className="bi bi-chevron-left border rounded p-1 bg-slate-100"></i>
            <span className = "text-xl font-bold"> Basic Mathematics 101</span>
            </div>

            {/* right */}
            <div className = "flex gap-4"> 
            <i className="bi bi-telephone-fill text-lg "></i>
            <span > Call Teacher </span>
            <i className="bi bi-person-circle text-lg"></i>
            <span > Support</span>
            </div>
        </header>
    )
}