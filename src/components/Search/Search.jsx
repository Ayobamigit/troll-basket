import React, { useContext } from 'react';
import {ReactComponent as Icon} from '../../assets/icon/search.svg';
import { HomeContext } from '../../pages/Home/Home';

const Search = () => {
    const {onChange, searchValues} = useContext(HomeContext)
    return (
        <div className="search-wrapper">
            <div className="div-search">
                <input type="text" placeholder="Search merchbuy" className="search" name="name" value={searchValues.name} onChange={onChange} />
                <Icon className="search-icon"/>
            </div>
        </div>
    )
}

export default Search
