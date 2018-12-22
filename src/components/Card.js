import React from 'react';

const Card = (props) => {
    const {id, name, email } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw1 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?300x300`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;