import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({ player }) => {
    const {
        playerName,
        playerType,
        country,
        batStyle,
        bowlingStyle,
        rating,
        price,
        playerImage
    } = player;

    return (
        <div className="card bg-base-100 shadow-sm p-4 border-gray-500">
            <figure className="h-80 w-full overflow-hidden">
                <img
                    src={playerImage}
                    alt={playerName}
                    className="w-full h-full object-cover object-top rounded-lg"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser /> {playerName}</h2>

                <div className='flex justify-between'>
                    <h3 className="flex items-center gap-2"><FaFlag />{country}</h3>
                    <span className='bg-gray-300 rounded py-1 px-2'>{playerType}</span>
                </div>

                <div className="divider"></div>

                <div className='mb-2'>
                    <h3 className='font-bold'>Rating: {rating}</h3>

                    <div className="card-actions justify-between">
                        <span><p>{batStyle}</p></span>
                        <span><p>{bowlingStyle}</p></span>
                    </div>
                </div>

                <div className="card-actions justify-between items-center">
                    <p>${price}</p>
                    <button className="btn btn-md bg-gray-300 text-black font-bold">Choose Player</button>
                </div>

            </div>
        </div>
    );
};

export default Card;