
import React from 'react';
import { ScaleIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 text-slate-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="md:col-span-3 lg:col-span-1">
                        <a href="#" className="flex items-center space-x-2 text-white mb-4">
                            <ScaleIcon className="h-8 w-8 text-amber-500"/>
                            <span className="text-xl font-bold tracking-tight">Justiça & Lei</span>
                        </a>
                        <p className="text-sm text-slate-400">
                            Compromisso com a justiça e a defesa intransigente dos direitos de nossos clientes.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold tracking-wider mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li><a href="#areas" className="hover:text-amber-400 transition-colors">Áreas de Atuação</a></li>
                            <li><a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre Nós</a></li>
                            <li><a href="#depoimentos" className="hover:text-amber-400 transition-colors">Depoimentos</a></li>
                            <li><a href="#contato" className="hover:text-amber-400 transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    {/* Practice Areas */}
                     <div>
                        <h3 className="text-white font-semibold tracking-wider mb-4">Especialidades</h3>
                        <ul className="space-y-2">
                            <li><a href="#areas" className="hover:text-amber-400 transition-colors">Direito de Família</a></li>
                            <li><a href="#areas" className="hover:text-amber-400 transition-colors">Direito Empresarial</a></li>
                            <li><a href="#areas" className="hover:text-amber-400 transition-colors">Direito Civil</a></li>
                            <li><a href="#areas" className="hover:text-amber-400 transition-colors">Direito Criminal</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold tracking-wider mb-4">Contato</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                                <span className="mr-2 mt-1">&#x1F4CD;</span>
                                <span>Av. Principal, 123, Centro</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 mt-1">&#x2709;</span>
                                <a href="mailto:contato@justicaelei.com" className="hover:text-amber-400">contato@justicaelei.com</a>
                            </li>
                             <li className="flex items-start">
                                <span className="mr-2 mt-1">&#x260E;</span>
                                <a href="tel:+5511999998888" className="hover:text-amber-400">(11) 99999-8888</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Justiça & Lei Advocacia. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
