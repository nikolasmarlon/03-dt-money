import { HeaderContainer, HeaderContent } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Header(){
    return(
        <HeaderContainer >
            <HeaderContent>
                <img src={logoImg} />
                <button>Nova transação</button>
            </HeaderContent>
        </HeaderContainer>
    )
}