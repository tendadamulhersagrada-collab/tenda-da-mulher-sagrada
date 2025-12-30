
import React, { useState } from 'react';
import { EVENTS } from './constants';
import Oracle from './components/Oracle';
import FormInput from './components/FormInput';
import AIImage from './components/AIImage';
import { Event } from './types';

const App: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', email: '', tel: '' });
  const [testimonialData, setTestimonialData] = useState({ name: '', text: '' });
  const [testimonialSent, setTestimonialSent] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const validate = (): boolean => {
    const newErrors: any = {};
    if (formData.name.trim().length < 3) newErrors.name = 'Por favor, insira seu nome.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'E-mail inválido.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulação de sucesso no envio
      setShowEventDetails(true);
      // Aqui os dados seriam enviados para tendadamulhersagrada@gmail.com
    }
  };

  const handleTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (testimonialData.name && testimonialData.text) {
      setTestimonialSent(true);
      setTimeout(() => {
        setTestimonialSent(false);
        setTestimonialData({ name: '', text: '' });
      }, 5000);
    }
  };

  const handleCTA = (event?: Event) => {
    if (event) {
      setSelectedEvent(event);
      setShowEventDetails(false);
      setFormData({ name: '', email: '', tel: '' });
      setErrors({});
    } else {
      document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-black parchment selection:bg-black selection:text-[#c4a484]">
      {/* Navegação fixa */}
      <nav className="fixed top-0 w-full z-[100] bg-[#a68966]/90 backdrop-blur-lg border-b border-black/5">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-lg md:text-xl font-serif font-bold tracking-widest uppercase">Tenda da Mulher Sagrada</div>
          <div className="hidden md:flex space-x-10 text-[9px] font-bold uppercase tracking-[0.3em]">
            <a href="#inicio" className="hover:opacity-50 transition-opacity">Início</a>
            <a href="#chamado" className="hover:opacity-50 transition-opacity">O Chamado</a>
            <a href="#agenda" className="hover:opacity-50 transition-opacity">Agenda</a>
            <a href="#oraculo" className="hover:opacity-50 transition-opacity">Oráculo</a>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </nav>

      {/* Hero: Boas-vindas */}
      <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <AIImage prompt="A beautiful nomadic tent in a vast landscape under a cosmic sky with moon and stars, earthy watercolor" alt="Fundo Místico" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-7xl md:text-[10rem] font-serif mb-8 leading-[0.85] tracking-tighter">Tenda da <br/> Mulher Sagrada</h1>
          <p className="text-xl md:text-3xl font-light italic opacity-70 mb-14 max-w-2xl mx-auto">Um espaço de pausa, resgate e cura ancestral.</p>
          <button onClick={() => handleCTA()} className="bg-black text-[#c4a484] px-14 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all shadow-2xl">
            Entrar na Tenda
          </button>
        </div>
      </section>

      {/* O Chamado */}
      <section id="chamado" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter">Ouça o chamado <br/> do seu coração.</h2>
            <div className="space-y-8 text-lg md:text-2xl font-light leading-relaxed opacity-80 border-l border-black/20 pl-10">
              <p>Você sente que algo em sua essência pede para ser ouvido?</p>
              <p>Nossos encontros são portais para o reencontro com a sua natureza selvagem e sagrada.</p>
            </div>
            <div className="flex flex-wrap gap-5">
              <a href="https://www.youtube.com/@tendadamulhersagradamulhersagr/" target="_blank" className="flex items-center gap-3 bg-black text-[#c4a484] px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:opacity-90">YouTube 📺</a>
              <a href="https://www.instagram.com/tendadamulhersagrada/" target="_blank" className="flex items-center gap-3 border border-black px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-black hover:text-[#c4a484] transition-all">Instagram 📸</a>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-[80px] shadow-2xl border-[15px] border-[#a68966]">
              <AIImage prompt="Beautiful serene woman in profile, nature elements in her hair, sunset light, watercolor art" alt="Essência" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Agenda de Vivências */}
      <section id="agenda" className="py-32 px-6 bg-black/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter uppercase mb-4">Agenda 2026</h2>
            <div className="w-24 h-1 bg-black mx-auto opacity-20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {EVENTS.map(event => (
              <div key={event.id} className="bg-white/40 rounded-[60px] p-2 hover:shadow-2xl transition-all border border-black/5 flex flex-col group">
                <div className="h-72 overflow-hidden rounded-[55px] mb-10 relative">
                  <AIImage prompt={event.prompt} alt={event.title} className="w-full h-full group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 bg-black text-[#c4a484] px-5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest">{event.type}</div>
                </div>
                <div className="px-10 pb-12 flex-1 flex flex-col">
                  <h3 className="text-3xl font-serif mb-4 leading-tight">{event.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">{event.date}</p>
                  <p className="text-base opacity-70 leading-relaxed mb-10 flex-1">{event.description}</p>
                  <button 
                    onClick={() => handleCTA(event)}
                    className="w-full py-5 bg-black text-[#c4a484] rounded-3xl font-bold text-[10px] uppercase tracking-widest hover:opacity-90 shadow-xl"
                  >
                    {event.price === 'Sob Consulta' ? 'Tenho Interesse' : 'Inscrever-se'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oráculo de Gemini */}
      <Oracle />

      {/* Depoimentos */}
      <section id="depoimento" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-7xl font-serif mb-16 tracking-tighter">Partilhas da Alma</h2>
          {!testimonialSent ? (
            <form onSubmit={handleTestimonial} className="bg-white/30 p-12 md:p-20 rounded-[80px] border border-black/5 text-left space-y-10">
              <FormInput label="Seu Nome" placeholder="Como quer ser identificada?" value={testimonialData.name} onChange={(e)=>setTestimonialData({...testimonialData, name: e.target.value})} />
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 block">Sua Experiência</label>
                <textarea 
                  value={testimonialData.text} 
                  onChange={(e)=>setTestimonialData({...testimonialData, text: e.target.value})}
                  className="w-full bg-white/50 border border-black/10 rounded-3xl p-6 min-h-[150px] focus:ring-1 focus:ring-black outline-none text-sm"
                  placeholder="O que a Tenda despertou em você?"
                />
              </div>
              <button className="w-full bg-black text-[#c4a484] py-6 rounded-3xl font-bold text-[10px] uppercase tracking-widest shadow-lg">Enviar Partilha</button>
            </form>
          ) : (
            <div className="bg-black text-[#c4a484] p-24 rounded-[80px] animate-fade-in">
              <div className="text-6xl mb-8">🪷</div>
              <h3 className="text-4xl font-serif mb-4">Gratidão, Irmã!</h3>
              <p className="text-sm opacity-60 uppercase tracking-widest">Sua voz fortalece o nosso círculo.</p>
            </div>
          )}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black text-[#c4a484] py-32 text-center">
        <div className="container mx-auto px-6">
          <div className="text-2xl font-serif font-bold uppercase tracking-[0.3em] mb-12">Tenda da Mulher Sagrada</div>
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-bold uppercase tracking-widest opacity-60 mb-20">
            <a href="https://www.instagram.com/tendadamulhersagrada/" target="_blank" className="hover:text-white">Instagram</a>
            <a href="https://www.youtube.com/@tendadamulhersagradamulhersagr/" target="_blank" className="hover:text-white">YouTube</a>
            <a href="mailto:tendadamulhersagrada@gmail.com" className="hover:text-white">Contato</a>
          </div>
          <p className="text-[9px] opacity-20 uppercase tracking-[0.5em]">© 2026 Tenda da Mulher Sagrada. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Modal de Inscrição */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#c4a484] p-12 md:p-16 max-w-2xl w-full rounded-[80px] border-[6px] border-black shadow-2xl relative my-auto">
            <button onClick={() => setSelectedEvent(null)} className="absolute top-10 right-10 text-black/40 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            {!showEventDetails ? (
              <div className="space-y-10">
                <div className="text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 block mb-2">{selectedEvent.type}</span>
                  <h3 className="text-4xl font-serif">{selectedEvent.title}</h3>
                </div>
                
                <form onSubmit={handleRegister} className="space-y-6">
                  <FormInput label="Nome Completo" placeholder="Sua identidade" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} error={errors.name} />
                  <FormInput label="Seu E-mail" type="email" placeholder="Para receber o acesso" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} error={errors.email} />
                  <FormInput label="WhatsApp" placeholder="(37) 99132-7874" value={formData.tel} onChange={(e)=>setFormData({...formData, tel: e.target.value})} />
                  
                  <button className="w-full bg-black text-[#c4a484] py-6 rounded-3xl font-bold text-[10px] uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">
                    Confirmar Interesse
                  </button>
                  <p className="text-[8px] text-center opacity-40 uppercase tracking-widest">Notificação para tendadamulhersagrada@gmail.com</p>
                </form>
              </div>
            ) : (
              <div className="text-center space-y-12 py-10">
                <div className="text-6xl animate-bounce">✨</div>
                <h4 className="text-5xl font-serif">"Bem vinda a Tenda da Mulher Sagrada!"</h4>
                <p className="text-lg opacity-80">Seu chamado foi recebido com amor. Em breve entraremos em contato.</p>
                <div className="flex flex-col gap-4 pt-6">
                  <a href="https://www.instagram.com/tendadamulhersagrada/" target="_blank" className="bg-black text-[#c4a484] py-5 rounded-3xl font-bold text-[10px] uppercase tracking-widest shadow-xl">Siga-nos no Instagram</a>
                  <button onClick={() => setSelectedEvent(null)} className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 underline">Voltar para a Tenda</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
