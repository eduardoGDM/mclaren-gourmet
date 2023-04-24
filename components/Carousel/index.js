import React, { Fragment,useEffect,useState } from "react";
import Requests from "../Requests";

const Carousel = () => {
        const [count,setCount] = useState(0);

    useEffect(()=> {
        window.sessionStorage.setItem('qntd',count)
    },[count])
    return (
        <Fragment>
            <div className="font-Maxwell flex flex-col justify-between  md:flex-row p-20 ">   
              <div className="p-5">
                <figure className="relative max-w-sm hover:scale-110 rounded-lg shadow-xl dark:shadow-gray-900 cursor-pointer filter">
                <a href="#">
                    <img className="rounded-lg object-cover " src="Palha.jpg" alt="image description"/>
                </a>
                <figcaption className="absolute rounded-lg px-4 text-lg text-white  bg-[#633112]   bottom-4">
                
                </figcaption>
                </figure>
                
         </div> 
         <div className="flex p-[9%]">
      <button disabled = { count < 1 ? true : false} onClick={()=> setCount(count - 1 )} className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full">-</button>
      <span className="p-2"> Unidades: {count}</span>
         <button onClick={()=> setCount(count + 1 )} className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full">+</button>
        
    </div>
    
    <span>Para continuar,clique em Realizar Pedido</span>

         <div className="p-5">
                <figure className="relative max-w-sm hover:scale-110 rounded-lg shadow-xl dark:shadow-gray-800 cursor-pointer filter">
                <a href="#">
                    <img className="rounded-lg object-cover" src="https://cdn.awsli.com.br/600x450/203/203149/produto/29270318/6ecdd64df7.jpg"/>
                </a>
                <figcaption className=" absolute rounded-lg px-5 text-lg text-white bg-[#633112]  bottom-4">
                    <p>Empadão</p>

                </figcaption>
                </figure>
            </div>
            <div className="p-5">
                <figure className="relative max-w-sm hover:scale-110 rounded-lg shadow-lg dark:shadow-gray-800 cursor-pointer filter">
                <a href="#">
                    <img className="rounded-lg  " src="https://cdn.awsli.com.br/600x450/203/203149/produto/29270318/6ecdd64df7.jpg" alt="image description"/>
                </a>
                <figcaption className="absolute rounded-lg px-4 text-lg text-white bg-[#633112]     bottom-4">
                    <p className="scale-[%50]">Bolo de Cenoura</p>
                </figcaption>
                </figure>
            </div>
            </div>
          <Requests qntd={count}/>
        </Fragment>

    )
}


export default Carousel;