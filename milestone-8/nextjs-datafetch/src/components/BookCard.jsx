import React from 'react';

const BookCard = ({ book }) => {
    const { id, name, description, rating, price } = book;

    return (
        <div className="card bg-base-100 card-lg shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;