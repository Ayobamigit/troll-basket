import React from 'react';
import './category.css'
import {ReactComponent as Doc} from '../../assets/icon/doc.svg';
import {ReactComponent as Fire} from '../../assets/icon/fire.svg';
import {ReactComponent as Like} from '../../assets/icon/like.svg';
import {ReactComponent as Shop} from '../../assets/icon/shop.svg';


const Categories = () => {
    return (
        <div className="category-div">
            <div className="category-div-item">
                <div className="category-border blue">
                    <Doc className="mt-14" />
                </div>
                <p className="category-div-text">Product categories</p>
            </div>
            <div className="category-div-item">
                <div className="category-border red ml-10">
                    <Fire className="mt-12" />
                </div>
                <p className="category-div-text">Popular Products</p>
            </div>
            <div className="category-div-item">
                <div className=" category-border purple ml-20">
                    <Like className="mt-14" />
                </div>
                <p className="category-div-text">Recommended Products</p>
            </div>
            <div className="category-div-item">
                <div className="category-border green">
                    <Shop className="mt-14" />
                </div>
                <p className="category-div-text">Shops</p>
            </div>
        </div>
    )
}

export default Categories
