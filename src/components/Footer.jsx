import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

/*  ! css prop을 사용한 조건부 스타일링
    prop명으로 넘겨주니 DOM이 속성 이름을 인지하지 못하는 경고가 발생
    $ 기호를 접두사로 붙여주어 해당 prop이 DOM 요소로 렌더링되는 것을 방지 => 임시 prop으로 전환됨
    (Transient props  참고)
*/

const FooterWrapper = styled.footer`
    margin-top : ${props => 
        (props.$path === "/create" || props.$path === "/update") ? "1.5rem" : "5rem"
    }; 
    gap : 30px 
`;

const Button = styled.button`
    font-size : 20px;
`

const Footer = ({onDelete}) =>{
    const location = useLocation();
    console.log(location.pathname);
    return(
        <FooterWrapper className="flex-center" $path={location.pathname}>
             <Link to='/create'><Button>Create</Button></Link>
             {/* true인 경우만 Update & Delete 추가 */}
             {location.pathname !== "/" &&   
                <> 
                <Link to='/update'><Button>Update</Button></Link>
                <Button onClick={onDelete}>Delete</Button>  
                </>
             }
        </FooterWrapper>
    );
}

export default Footer;