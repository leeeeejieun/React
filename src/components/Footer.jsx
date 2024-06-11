import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = ({onDelete}) =>{
    const location = useLocation();  // 현재 라우팅 경로를 가져옴

    return(
        <footer>
             <Link to='/create'><button>Create</button></Link>
             {/* true인 경우만 Update & Delete 추가 */}
             {location.pathname !== "/" &&   
                <> 
                <Link to='/update'><button>Update</button></Link>
                <button onClick={onDelete}>Delete</button>  
                </>
             }
        </footer>
    );
}

export default Footer;