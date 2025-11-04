
import React, { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            if (name && email && message) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome Completo</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-mail</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                    required
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Sua Mensagem</label>
                <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 block w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                    required
                />
            </div>
            <div>
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:bg-slate-400 transition-colors duration-300"
                >
                    {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
            </div>
            {status === 'success' && <p className="text-green-600">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>}
            {status === 'error' && <p className="text-red-600">Ocorreu um erro. Por favor, preencha todos os campos e tente novamente.</p>}
        </form>
    );
};


const Contact: React.FC = () => {
    return (
        <section id="contato" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Entre em Contato</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Estamos prontos para ouvir você. Agende uma consulta ou envie sua dúvida.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-lg shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Fale Conosco</h3>
                            <div className="space-y-4 text-slate-600">
                                <p><strong>Endereço:</strong><br/>Av. Principal, 123, Sala 45, Centro<br/>Cidade, Estado, CEP 12345-678</p>
                                <p><strong>Telefone:</strong><br/><a href="tel:+5511999998888" className="hover:text-amber-500">(11) 99999-8888</a></p>
                                <p><strong>E-mail:</strong><br/><a href="mailto:contato@justicaelei.com" className="hover:text-amber-500">contato@justicaelei.com</a></p>
                                <p><strong>Horário de Atendimento:</strong><br/>Segunda a Sexta, das 9h às 18h</p>
                            </div>
                        </div>
                        <div>
                           <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
