
import React, { useState, useEffect } from 'react';
// FIX: Import ScaleIcon to be used in the header.
import { ScaleIcon } from './icons';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { href: '#areas', label: 'Áreas de Atuação' },
        { href: '#sobre', label: 'Sobre Nós' },
        { href: '#depoimentos', label: 'Depoimentos' },
        { href: '#blog', label: 'Blog' },
        { href: '#contato', label: 'Contato' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="flex items-center space-x-2 text-slate-800 hover:text-amber-500 transition-colors">
                       <ScaleIcon className="h-8 w-8 text-amber-500"/>
                       <span className="text-xl font-bold tracking-tight">Justiça & Lei</span>
                    </a>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-slate-600 hover:text-amber-500 font-medium transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <a href="#contato" className="hidden md:inline-block bg-amber-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-sm">
                        Agende uma Consulta
                    </a>

                    <button
                        className="md:hidden text-slate-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Abrir menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl">
                        <nav className="flex flex-col p-4 space-y-2">
                             {navLinks.map((link) => (
                                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-amber-500 font-medium transition-colors duration-300 py-2">
                                    {link.label}
                                </a>
                            ))}
                            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="w-full text-center mt-2 bg-amber-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-sm">
                                Agende uma Consulta
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;