import React from 'react';
import ListIndexContainer from '../../lists/list_index_container';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      <Link to="/" className="list-header-link">
        <img src={window.logoUrl} alt="logo" className="logo" width="90px" />
        <p>Don't forget<br></br>the COFFEE</p>
      </Link>
      <ListIndexContainer />
    </div>
    </>
  );
};

export default Sidebar;
