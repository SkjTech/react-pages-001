/* Imports */
import { react } from 'react'
import Logo from '../../images/favicon.png'

/* Main */
function Header(){
    return(
        <>
            <a href="/../src/index.html"><img src={Logo} id="Title" width="30px" alt="Sk Technologies Icon"/><h1 id="Title">Sk Technologies</h1></a>
            <div id="Nav">
            <a href="/pages/Services.html" className="Link">Services</a>
            <a href="/pages/Demo.html" className="Link">Schedule A Demo!</a>
            </div>
        <hr/></>
    );
}
export default Header