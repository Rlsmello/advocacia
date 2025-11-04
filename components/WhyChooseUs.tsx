
import React from 'react';
import { CheckCircleIcon } from './icons';

const WhyChooseUs: React.FC = () => {
    const features = [
        {
            title: 'Experiência Comprovada',
            description: 'Anos de atuação e um histórico de casos bem-sucedidos que demonstram nossa competência e dedicação.'
        },
        {
            title: 'Atendimento Personalizado',
            description: 'Cada cliente é único. Oferecemos um atendimento próximo e focado nas necessidades específicas do seu caso.'
        },
        {
            title: 'Estratégias Inovadoras',
            description: 'Combinamos o conhecimento jurídico tradicional com abordagens modernas para encontrar as melhores soluções.'
        },
        {
            title: 'Transparência e Confiança',
            description: 'Construímos relações baseadas na honestidade, mantendo nossos clientes informados em todas as etapas do processo.'
        }
    ];

    return (
        <section id="sobre" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img 
                            src="https://picsum.photos/800/600?random=1" 
                            alt="Equipe do escritório de advocacia" 
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Por Que Nos Escolher?</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Nosso compromisso vai além da representação legal. Buscamos ser verdadeiros parceiros de nossos clientes, guiando-os com segurança e eficiência através dos desafios jurídicos.
                        </p>
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircleIcon className="h-8 w-8 text-amber-500 flex-shrink-0 mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
                                        <p className="text-slate-600 mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
