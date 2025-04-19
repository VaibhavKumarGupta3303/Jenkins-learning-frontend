import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#f5f5f5' }}>
    <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
    <Link to="/add" style={{ margin: '0 10px' }}>Add Item</Link>
  </nav>
);

export default Navbar;
