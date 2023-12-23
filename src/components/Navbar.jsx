import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShow(false);
        } else {
            setShow(true);
        }

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const [nav, setNav] = useState(false);
    const currentRoute = useLocation()
    const route = currentRoute.pathname
    const pathSegments = route.split('/')

    const handleNav = () => {
        setNav(!nav);
    };

    const ref = useRef()
    useEffect(() => {
        const handler = (e) => {
            if (!ref.current?.contains(e.target)) {
                setNav(false)
            }
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <nav className={`bg-primary fixed w-full transition-all duration-300 z-10 ${show ? 'top-0 opacity-90' : '-top-28'}`}>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-4'>
                <img src="https://suitmedia.com/_nuxt/img/logo-white.081d3ce.png" alt="" className="h-[50px] w-[125px]" />
                <div className="flex gap-8 text-white text-lg">
                    <Link to={'/work'} className={pathSegments[1] === 'work' ? 'border-b-2' : ''} >Work</Link>
                    <Link to={'/about'} className={pathSegments[1] === 'about' ? 'border-b-2' : ''} >About</Link>
                    <Link to={'/services'} className={pathSegments[1] === 'services' ? 'border-b-2' : ''} >Services</Link>
                    <Link to={'/ideas'} className={pathSegments[1] === 'ideas' ? 'border-b-2' : ''} >Ideas</Link>
                    <Link to={'/careers'} className={pathSegments[1] === 'careers' ? 'border-b-2' : ''} >Careers</Link>
                    <Link to={'/contact'} className={pathSegments[1] === 'contact' ? 'border-b-2' : ''} >Contact</Link>
                </div>
            </div>
        </nav>
    )
}
