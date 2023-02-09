import React from 'react';
import BigScreenMenu from './BigScreenMenu';
import SearchBar from './SearchBar';
import DropdownNavHeader from './DropdownNavHeader';


const NavHeader = () => {

    

  return (
    <div className='nav-div'>
          <div className='search-header-container'>
             <SearchBar />
          </div>
          <div className='button-nav'>
          <DropdownNavHeader />
          </div>
           <BigScreenMenu />
        </div>
  )
}

export default NavHeader;