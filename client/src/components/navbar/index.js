

const Navbar = () => {

    return (
        <nav className="flex justify-between navbar navbar-expand-lg navbar-light bg-indigo-900 py-2">
            
           <div className="flex">
               <div className="w-10 h-10 mx-3 bg-blue-800"></div>
               <input type="text" className="rounded-md h-8 p-2 mt-1 text-slate-200 bg-blue-600" placeholder="Search" />

           </div>
           <div className="flex gap-2">
                <button className="btn btn-outline-light bg-blue-800 rounded-lg p-1 mr-2">Become a seller</button>
                <button className="w-8 h-8 bg-slate-300 mt-1 mr-2"></button>
           </div>
        </nav>
    )

}


export default Navbar