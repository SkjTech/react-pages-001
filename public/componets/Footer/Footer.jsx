/* Imports */
import { react } from 'react'
import Logo from '../../images/favicon.png'

/* Main */
function Footer(){
    return(
        <>
            <footer>
                <a href="/../src/index.html"><img src={Logo} id="Title" width="30px" alt="Sk Technologies Icon"/><h1 id="TitleFooter">Sk Technologies</h1></a>
                <p>Phone: +1-186-5912-298</p>
                <p>Email: SkTech@outlook.com</p>
                <p>Address: 968 N Mult St, Philadelphia, Pennsylavani<a href="/pages/games.html" className='Link'>a</a></p>
            </footer>
        </>
    );
}
export default Footer