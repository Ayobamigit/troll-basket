import React from 'react';
import {ReactComponent as Star} from '../../assets/icon/star.svg';
import {ReactComponent as User} from '../../assets/icon/user.svg';

const Review = () => {
    return (
        <div className="product-footer mb-04">
           <div className="desc">
                <h3 className="prod-header">Review and Ratings</h3>
                <p className="prod-header prod-link">View all</p>
            </div>

            <div className="rating">
                <Star className="active" />
                <Star className="active" />
                <Star className="active" />
                <Star className="inactive" />
                <Star className="inactive" />&nbsp;&nbsp;3.0
            </div>
            
            <div className="mt-18">
                <p className="prod-content">This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!! </p>
            </div>

            <div className="user-review">
                <User className="mr-06" />
                <h3 className="prod-header mt-03"> Segun Arinze</h3>
            </div>
        </div>
    )
}

export default Review