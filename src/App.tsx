import { useState } from 'react';
import { ArrowRight, CheckCircle, Target, BarChart, Users, ChevronDown, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import HeroImage from './components/HeroImage';
import TestimonialCard from './components/TestimonialCard';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href='app.tsx' className='w-32'>
              <img src="/imgs/logo.png" alt='logomarca' className="w-120 h-10"/>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#servicos" className="text-black hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#resultados" className="text-black hover:text-blue-600 transition-colors">Resultados</a>
            <a href="#depoimentos" className="text-black hover:text-blue-600 transition-colors">Depoimentos</a>
            <a href="#contato" className="text-black hover:text-blue-600 transition-colors">Contato</a>
          </div>
          
          <div className="hidden md:block">
            <a href="#contato" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Fale Conosco
            </a>
          </div>
          
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChevronDown className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a href="#servicos" className="text-gray-600 py-2 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#resultados" className="text-gray-600 py-2 hover:text-blue-600 transition-colors">Resultados</a>
              <a href="#depoimentos" className="text-gray-600 py-2 hover:text-blue-600 transition-colors">Depoimentos</a>
              <a href="#contato" className="text-gray-600 py-2 hover:text-blue-600 transition-colors">Contato</a>
              <a href="#contato" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-center">
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transforme Visitantes em <span className="text-yellow-300">Clientes</span> com Landing Pages Otimizadas
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Especialistas em tráfego pago e landing pages de alta conversão em Brasília. Aumente suas vendas com estratégias personalizadas para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contato" className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors text-center">
                Solicitar Proposta
              </a>
              <a href="#servicos" className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors text-center">
                Nossos Serviços
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10">
            <HeroImage />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-5 rounded-l-full transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300 opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Clients/Brands Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Empresas que confiam em nosso trabalho</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-100 h-100"><img src="/imgs/factocred.png" alt="Factocred" /></div>
            <div className="w-100 h-100"><img src="/imgs/finanzi.png" alt="Finanzi" /></div>
            <div className="w-100 h-100"><img src="/imgs/shirley.png" alt="Shirley" /></div>
            <div className="w-100 h-100"><img src="/imgs/truckme.png" alt="Truckme" /></div>
            <div className="w-100 h-100"><img src="/imgs/futurebpo.png" alt="Future BPO" /></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em marketing digital para aumentar sua presença online e converter visitantes em clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Target className="h-10 w-10 text-blue-600" />}
              title="Tráfego Pago"
              description="Campanhas estratégicas no Google Ads, Facebook e Instagram para atrair clientes qualificados para o seu negócio."
            />
            
            <ServiceCard 
              icon={<BarChart className="h-10 w-10 text-blue-600" />}
              title="Landing Pages"
              description="Páginas de alta conversão desenvolvidas para transformar visitantes em leads e clientes para sua empresa."
            />
            
            <ServiceCard 
              icon={<Users className="h-10 w-10 text-blue-600" />}
              title="Remarketing"
              description="Reconquiste visitantes que não converteram com estratégias personalizadas de remarketing e aumente suas vendas."
            />
          </div>
          
          <div className="text-center mt-12">
            <a href="#contato" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Ver todos os serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Resultados Comprovados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos clientes obtêm resultados reais e mensuráveis com nossas estratégias de marketing digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+250%</div>
              <p className="text-gray-600">Aumento médio em conversões</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">-40%</div>
              <p className="text-gray-600">Redução no custo por aquisição</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+180%</div>
              <p className="text-gray-600">Aumento em leads qualificados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe de marketing digital trabalhando" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Por que escolher nossa agência?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">Expertise Local</h3>
                    <p className="text-gray-600">Conhecemos o mercado de Brasília e sabemos como atingir seu público-alvo de forma eficiente.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">Estratégias Personalizadas</h3>
                    <p className="text-gray-600">Desenvolvemos campanhas exclusivas para seu negócio, focadas em resultados e ROI positivo.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">Relatórios Transparentes</h3>
                    <p className="text-gray-600">Acompanhe o desempenho de suas campanhas com relatórios detalhados e métricas claras.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">Suporte Contínuo</h3>
                    <p className="text-gray-600">Nossa equipe está sempre disponível para ajustar estratégias e responder suas dúvidas.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#contato" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-block">
                  Fale com um Especialista
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja os depoimentos de empresas que transformaram seus resultados com nossas estratégias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Aumentamos nossas vendas em 200% em apenas 3 meses com as campanhas de tráfego pago. Melhor investimento que fizemos!"
              author="Carlos Silva"
              company="Empresa de Tecnologia"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
            
            <TestimonialCard 
              quote="Nossa landing page passou a converter 3x mais depois da otimização. O retorno sobre o investimento foi impressionante."
              author="Ana Oliveira"
              company="E-commerce de Moda"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
            
            <TestimonialCard 
              quote="Profissionais extremamente competentes e atenciosos. Conseguimos atingir um público que antes não alcançávamos."
              author="Roberto Mendes"
              company="Clínica Odontológica"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para aumentar suas conversões?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-blue-100">
            Agende uma consulta gratuita e descubra como podemos ajudar seu negócio a crescer com estratégias de marketing digital eficientes.
          </p>
          <a href="#contato" className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors inline-block">
            Quero aumentar minhas vendas
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para uma consulta gratuita.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-800">Telefone</h4>
                      <p className="text-gray-600">(61) 9547-9000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-800">Email</h4>
                      <p className="text-gray-600">contato@makrodigital.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-800">Endereço</h4>
                      <p className="text-gray-600">Setor Comercial Sul, Quadra 8, Brasília - DF</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Siga-nos nas redes sociais</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços de tráfego pago e landing pages.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quanto tempo leva para ver resultados com tráfego pago?</h3>
              <p className="text-gray-600">
                Os primeiros resultados podem ser observados em 7 a 14 dias, mas a otimização completa das campanhas geralmente leva de 30 a 60 dias para atingir seu potencial máximo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Qual o investimento mínimo recomendado para campanhas de tráfego pago?</h3>
              <p className="text-gray-600">
                O investimento varia conforme o setor e a concorrência, mas recomendamos um mínimo de R$ 1.500 mensais para obter dados significativos e resultados consistentes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Vocês oferecem garantia de resultados?</h3>
              <p className="text-gray-600">
                Trabalhamos com metas estabelecidas em conjunto com o cliente. Embora não possamos garantir resultados específicos devido a variáveis de mercado, nosso histórico mostra melhorias significativas para todos os clientes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Como é feito o acompanhamento das campanhas?</h3>
              <p className="text-gray-600">
                Fornecemos relatórios semanais e mensais detalhados, além de uma dashboard personalizada onde você pode acompanhar o desempenho das campanhas em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
              <a href='app.tsx' className='w-32'>
              <img src="../src/imgs/logo.png" alt='logomarca' className=""/>
            </a>
              </div>
              <p className="text-gray-400 mb-4">
                Especialistas em tráfego pago e landing pages de alta conversão em Brasília.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tráfego Pago</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Landing Pages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Remarketing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">(61)9547-9000</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">contato@makrodigital.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">Setor Comercial Sul, Quadra 8, Brasília - DF</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Makro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;