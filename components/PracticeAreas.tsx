
import React from 'react';
import { ScaleIcon, BriefcaseIcon, FamilyIcon, CriminalIcon } from './icons';

interface PracticeAreaCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const PracticeAreaCard: React.FC<PracticeAreaCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-600 mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);


const PracticeAreas: React.FC = () => {
    const areas = [
        {
            icon: <FamilyIcon className="h-8 w-8" />,
            title: 'Direito de Família',
            description: 'Resolução de questões como divórcio, guarda de filhos, pensão alimentícia e partilha de bens com sensibilidade e expertise.'
        },
        {
            icon: <BriefcaseIcon className="h-8 w-8" />,
            title: 'Direito Empresarial',
            description: 'Assessoria completa para empresas, desde a constituição e contratos até a resolução de litígios societários e comerciais.'
        },
        {
            icon: <ScaleIcon className="h-8 w-8" />,
            title: 'Direito Civil',
            description: 'Atuação em contratos, responsabilidade civil, direitos do consumidor, questões imobiliárias e outras demandas cíveis.'
        },
        {
            icon: <CriminalIcon className="h-8 w-8" />,
            title: 'Direito Criminal',
            description: 'Defesa especializada em todas as fases do processo criminal, garantindo a proteção dos direitos e garantias fundamentais.'
        }
    ];

    return (
        <section id="areas" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Nossas Áreas de Atuação</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Oferecemos assessoria jurídica especializada em diversas áreas do direito para garantir a melhor defesa dos seus interesses.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {areas.map((area, index) => (
                        <PracticeAreaCard key={index} {...area} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
