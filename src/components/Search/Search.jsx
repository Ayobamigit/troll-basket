import React from 'react';
import {ReactComponent as Icon} from '../../assets/icon/search.svg';

const Search = () => {
    return (
        <div className="search-wrapper">
            <div className="div-search">
                <input type="text" placeholder="Search merchbuy" className="search" />
                <Icon className="search-icon"/>
            </div>
        </div>
    )
}

export default Search
