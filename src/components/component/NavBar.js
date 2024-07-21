// import { Link, useMatch, useResolvedPath } from "react-router-dom";
'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './NavBar.css';


function NavBar() {
    return (
        <div className="NavBar">
            <section className="logo">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Nathan Yung</h1>
            </section>
            <nav className="NavLinks">
                <ul>
                    <CustomLink href="/">Home</CustomLink>
                    <CustomLink href="/AboutMe">About Me</CustomLink>
                    <CustomLink href="/Contacts">Contacts</CustomLink>
                    <CustomLink href="/Projects">Projects</CustomLink>
                </ul>
            </nav>
        </div>
    );
}

function CustomLink({ href, children, ...props }) {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <li className={isActive ? "active" : ""}>
            <Link href={href} {...props}>{children}</Link>
        </li>
    );
}

export default NavBar;

