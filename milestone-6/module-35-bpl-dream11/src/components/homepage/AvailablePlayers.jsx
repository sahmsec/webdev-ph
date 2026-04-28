import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import Card from './ui/Card';

const AvailablePlayers = ({ players }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:5'>
            {players.map(player => {  

                return(
                 <Card player={player}/>
                );
            })}


        </div>
    );
};

export default AvailablePlayers;