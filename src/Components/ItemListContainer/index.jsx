import React,{useState, useEffect} from "react";

import Title from "../Title";
import Icons from "../I-cons";
import Iconlist from "../IconList";



const icons = [
 { id: 1 , image:"/images/salve-el-planeta.svg", title:"Estudios y proyectos ambientales" },
{id: 2 , image: "/images/laboratorio.svg", title: " Servicios Topográficos y Aerofotogramétricos.", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
{id: 3 , image: "/images/la-contaminacion-del-agua.svg", title: "Operación y Mantenimiento de Plantas de Efluentes.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
{id: 4 , image: "/images/laboratorio.svg", title: "Seguridad y Riesgo Industrial.", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
{id: 5 , image: "/images/aguas-residuales.svg", title:"Mediciones y Muestreos.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
{id: 6 , image: "/images/sistema.svg", title: "Remediación Ambiental.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
];
function ItemListContainer({ texto }) {
    const [data, setData] = useState([]);

    useEffect(() => {
const getData = new Promise(resolve =>{
    setTimeout(() => {
     resolve(icons);
    },1000);
});
getData.then((res) => setData(res))
    }, [])
    return(
        <>
       < Title greeting= {texto} />
     <Icons/> 
     <Iconlist data={data}/> 
     
        </>
        
    )
}
export default ItemListContainer;