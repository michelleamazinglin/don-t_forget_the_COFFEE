import React from 'react';
import ListIndexContainer from '../lists/list_index_container';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ListIndexContainer />
    </div>
  );
};

export default Sidebar;
