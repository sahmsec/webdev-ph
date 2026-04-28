import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers';

const Players = ({ playersPromise }) => {

    console.log(playersPromise);
    const players = use(playersPromise);


    return (
        <div className='container mx-auto'>
            Players

            <AvailablePlayers players={players} />

        </div>
    );
};

export default Players;