import React,{Fragment} from "react";
const SideBar = () => {
    return (
        <Fragment>  
          <header>
          <div className="">
<nav className=" bg-white dark:bg-blue1  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
  <div className="flex text-1xl font-semibold whitespace-nowrap dark:text-white"> 
      <span className="">Encomendas,entregas</span>
      
      </div>
  <div className="flex md:order-2">
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
      </button>
  </div>
   
  </div>
</nav>
</div>
</header>

        </Fragment>
    )
}


export default SideBar;