import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {props.user.name}
                </h5>
                <div className="card-subtitle mb-2 text-muted">
                    {props.user.company.name}
                </div>
                <p className="card-text">
                    {props.user.company.catchPhrase}
                </p>
            </div>
        </div>
    );
};

export default Card;