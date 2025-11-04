
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
            ></div>
            <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
            <div className="relative z-10 text-center px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
                    Assessoria Jurídica de Excelência para Proteger Seus Direitos
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light text-slate-200">
                    Soluções legais eficazes e personalizadas para pessoas físicas e empresas.
                    Nossa prioridade é o seu sucesso.
                </p>
                <a
                    href="#contato"
                    className="bg-amber-500 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                    Fale com um Especialista
                </a>
            </div>
        </section>
    );
};

export default Hero;
