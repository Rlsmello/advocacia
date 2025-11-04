
import React from 'react';

const Blog: React.FC = () => {
    return (
        <section id="blog" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Blog</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Análises e artigos sobre temas jurídicos e econômicos relevantes.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl prose lg:prose-xl">
                    <article className="max-w-none text-slate-700">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Análise Financeira dos Correios: A Trajetória do Patrimônio Líquido (2011-2024)
                        </h1>
                        <p className="text-sm text-slate-500 mb-8">
                            Por <strong>Raphael Luiz Serra de Mello</strong> | Publicado em 15 de Julho de 2024
                        </p>

                        <p className="lead text-lg text-slate-600">
                            A Empresa Brasileira de Correios e Telégrafos (ECT) vivenciou uma drástica deterioração de seu patrimônio
                            líquido entre 2011 e 2024, transitando de uma posição robusta de R$ 2,3 bilhões em 2014 para um
                            déficit de R$ 666 milhões em 2024. Esta análise revela uma jornada marcada por dois ciclos distintos:
                            um colapso estrutural, uma recuperação efêmera e um segundo colapso, ainda mais severo.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">A Crise Estrutural (2015-2016): O Primeiro Baque</h2>
                        <p>
                            Em 2015, os Correios registraram um prejuízo alarmante de R$ 2,1 bilhões. As causas não foram conjunturais, mas sim estruturais e profundamente enraizadas na operação da empresa:
                        </p>
                        <ul>
                            <li><strong>Custo de Pessoal Insustentável:</strong> Com despesas de R$ 17,1 bilhões, o custo com pessoal consumia 85,3% de cada real de receita, deixando uma margem ínfima para cobrir as demais despesas operacionais.</li>
                            <li><strong>Distrato do Banco Postal:</strong> A rescisão do contrato com o Banco do Brasil gerou um custo não recorrente de R$ 1,86 bilhão, impactando severamente as finanças.</li>
                            <li><strong>Passivos Pós-Emprego:</strong> Provisões bilionárias para o plano de saúde (CorreiosSaúde) e o fundo de pensão (Postalis) agravaram a situação.</li>
                        </ul>
                        <p>
                            Em 2016, o prejuízo de R$ 1,49 bilhão quase zerou o patrimônio líquido da estatal, que caiu para apenas 0,99% da receita, um claro sinal de insolvência contábil.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">Recuperação Efêmera (2020-2021): O Efeito Pandemia</h2>
                        <p>
                            A pandemia de COVID-19 trouxe um alívio temporário. O boom do e-commerce impulsionou a receita de encomendas, enquanto uma reversão da provisão de saúde de R$ 3,1 bilhões, após uma decisão liminar do STF, alavancou o lucro de 2020 para R$ 1,53 bilhão. O pico da recuperação ocorreu em 2021, com o patrimônio líquido atingindo R$ 3,3 bilhões.
                        </p>
                        <p>
                            Contudo, essa recuperação foi fundamentada em ganhos contábeis e em um fenômeno não sustentável, não em uma reestruturação operacional genuína.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">O Segundo Colapso (2022-2024): Retorno dos Problemas Estruturais</h2>
                        <p>
                            O resultado de 2024, com prejuízo de R$ 2,59 bilhões, refletiu a permanência dos problemas estruturais. Ganhos anteriores foram revertidos por decisões judiciais, como o restabelecimento do custeio paritário para aposentados no plano de saúde.
                        </p>
                        <p>
                            A análise vertical de 2024 é devastadora: o custo de pessoal somado às despesas operacionais atingiu <strong>116% da receita</strong>. Isso significa que nem o lucro bruto foi suficiente para cobrir os custos operacionais, evidenciando uma insolvência operacional.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">Diagnóstico Final: Um Dilema Matemático</h2>
                        <p>
                            Os Correios enfrentam um dilema insolúvel sem medidas drásticas: receita estagnada versus custos fixos insuperáveis e pressões cíclicas que não cedem.
                        </p>
                        
                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">Conclusão: Crise de Solvência, Não de Liquidez</h2>
                        <p>
                            A análise demonstra que os Correios não têm uma crise de caixa, mas sim uma profunda crise de solvência estrutural. A recuperação exige decisões transformacionais que vão além da gestão cotidiana, incluindo uma redefinição radical do modelo operacional, renegociação de passivos e uma nova estrutura de pessoal. Sem isso, o risco de continuidade, já apontado por auditores, torna-se cada vez mais iminente.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blog;
