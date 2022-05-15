import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Create from '../../icons/add';
import SortButton from '../SortButton';

function Navbar({ chronological, setChronological }) {
  return (
    <Nav className="navbar">
      <MenuItem1>
        <NavLink className="navbar__link" to="/create">
          <Create />
        </NavLink>
        <SortButton chronological={chronological} setChronological={setChronological} />
      </MenuItem1>
    </Nav>
  );
}

export default Navbar;

/* ===== STYLES ===== */

const Nav = styled.nav`
  background-color: #edf6f9;
  width: 100vw;
  height: 7vh;
  position: fixed;
  padding-top: 0.5rem;
  bottom: 0;
`;

const MenuItem1 = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  margin: 0;
  padding-bottom: 0.5em;
  gap: 15%;
`;
