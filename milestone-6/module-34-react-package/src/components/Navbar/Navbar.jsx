import React from 'react'
import Link from './Link'

const navigationData = [
    {
        "name": "Home",
        "path": "/",
        "id": "0"
    },
    {
        "name": "About",
        "path": "/about",
        "id": "2"

    },
    {
        "name": "Services",
        "path": "/services",
        "id": "3"

    },
    {
        "name": "Blog",
        "path": "/blog",
        "id": "4"

    },
    {
        "name": "Contact",
        "path": "/contact",
        "id": "5"

    }
];

function Navbar() {
    return (
        <nav>
            <ul className='flex justify-around'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>


            {/* <ul className='flex justify-around'>
                {
                    navigationData.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul> */}

            {/* <ul className='flex justify-around'>
                <li className='mr-10'><a href="\">Home</a></li>
                <li className='mr-10'><a href="\about">About</a></li>
                <li className='mr-10'><a href="\blog">Blog</a></li>
            </ul> */}
        </nav>
    )
}

export default Navbar