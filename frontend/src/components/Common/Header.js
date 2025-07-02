import { Link, Router } from "react-router-dom"
import Search from "./Search"
import BlogPostEditor from "../Blog/BlogpostEditor"
import Test from "./Test"
import GutenbergEditor from "../Blog/GutenbergEditor"

const NavBar = () => {
  return(
    <div className="navbar">
      <h1>Blogger</h1>
      {/*<Search />*/}
      <Link to='/editor'>create</Link>
      <Link to='/notifications'>notifications</Link>
      <Link to='/profile'>profile</Link>
    </div>
  )
}

const Header = () => {
    return(
      <div>
        <NavBar />
        <Link to='test/editor'>profile page</Link>
        <Test />
        <BlogPostEditor />
        <GutenbergEditor />
      </div>
    )
}
 export const Example = ({props, clicked}) => {
  const show = document.getElementById('show');
  let click = clicked
  function test(){
    return show.innerHTML = 'hey';
  }
  return(
    <div>
      <h1>New staff!</h1>
      my name is {props}
      <button onClick={test}>clicked</button>
      <div id="show"></div>
    </div>
  )
 }

export default Header;