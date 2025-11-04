
import React from 'react';
import { QuoteIcon } from './icons';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <QuoteIcon className="absolute top-6 left-6 h-10 w-10 text-amber-100" />
        <p className="relative z-10 text-slate-600 italic mb-6">"{quote}"</p>
        <div className="text-right">
            <p className="font-bold text-slate-800">{author}</p>
            <p className="text-sm text-slate-500">{role}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonialsData = [
        {
            quote: "A equipe demonstrou um profissionalismo exemplar e um profundo conhecimento técnico. Senti-me seguro e bem representado durante todo o processo. Recomendo fortemente!",
            author: "João Silva",
            role: "CEO, InovaTech"
        },
        {
            quote: "Resolveram minha questão familiar com uma sensibilidade e eficiência incríveis. O atendimento humano e personalizado fez toda a diferença em um momento tão delicado.",
            author: "Maria Oliveira",
            role: "Cliente Particular"
        },
        {
            quote: "Assessoria jurídica empresarial impecável. Eles não apenas resolveram nosso litígio, mas também nos ajudaram a reestruturar contratos para evitar problemas futuros.",
            author: "Carlos Pereira",
            role: "Diretor, Construtora Aliança"
        }
    ];

    return (
        <section id="depoimentos" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">O Que Nossos Clientes Dizem</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        A confiança e a satisfação de nossos clientes são nosso maior ativo.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
