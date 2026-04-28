import React, { useState } from 'react'
import Link from './Link'
import { Menu, X } from 'lucide-react';

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

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>);

    return (
        <nav className='flex justify-between mx-10'>

            <span className='flex' onClick={() => setOpen(!open)}>

                <span className='md:hidden'>
                    {open ? <X></X> : <Menu></Menu>}
                </span>

                <ul className='md:hidden'>
                    {links}
                </ul>

                <h3 className='ml-4'>My Navbar</h3>

            </span>

            <ul className='md:flex hidden justify-around'>
                {
                    links
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

            <button>Sign In</button>
        </nav>
    )
}

export default Navbar