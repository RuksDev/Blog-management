

"use client";

import React, { useState } from 'react';
import styles from "./links.module.css";
import NavLink from './navLink/NavLink';
import Image from 'next/image';
import { handleLogout } from '@/lib/action';
import { auth } from '@/lib/auth';

const Links = ({session}) => {
    const [open, setOpen] = useState(false);

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ];

    // Temporary session and isAdmin values
    const isAdmin = true; 

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink item={link} key={link.title} />
                ))}

                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <form action={handleLogout}>
                        <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            {/* <button className={styles.menuButton} onClick={() => setOpen(!open)}>Menu</button> */}
            {/* <button onClick={() => setOpen((prev) =>! prev)} >Menu</button> other method for menu button*/}
            <Image src="/menu.png" alt=""  
            className={styles.menuButton} 
            width={30} 
            height={30} 
            onClick={() => setOpen((prev) =>! prev)}
             />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Links;
