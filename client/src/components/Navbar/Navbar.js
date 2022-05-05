import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Create from '../../icons/add';


function Navbar() {

  return (
    <Nav className="navbar">
      <MenuItem1>
        <NavLink
      className="navbar__link" to="/create"><Create /></NavLink>
      </MenuItem1>

    </Nav>
  );
}

export default Navbar;

/* ===== STYLES ===== */

const Nav = styled.nav`
  background-color: #edf6f9;
  width: 100vw;
  height: auto;
  position: fixed;
  bottom: 0;
`;

const MenuItem1 = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding-left: 0;
  margin: 0;
  padding-bottom: 1em;
  gap: 15%;
`;
