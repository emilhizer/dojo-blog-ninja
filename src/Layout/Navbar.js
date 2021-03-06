import { Link } from 'react-router-dom'

function Navbar() {

  /* inline style example: note that the { {} }, means:
      first {} indicates jumping into JSX
      the second, nested, {} indicates a collection of itmes (object)
        
        <a href="/create" style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>
          New Blog
        </a>
  */

  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        {/* <a href="/">Home</a>
        <a href="/create">New Blog</a> */}
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  )
}
 
export default Navbar
