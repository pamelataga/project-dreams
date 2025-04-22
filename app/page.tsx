import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import CourseCard from "@/components/course-card"
import TestimonialCard from "@/components/testimonial-card"
import MobileMenu from "@/components/mobile-menu"
import Icon from "@/components/icon"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/mascote.png" alt="Dreams Tech Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-bold text-purple">Dreams Tech</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-gray-700 hover:text-green transition-colors">
              Sobre
            </Link>
            <Link href="#courses" className="text-gray-700 hover:text-green transition-colors">
              Cursos
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-green transition-colors">
              Depoimentos
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green transition-colors">
              Contato
            </Link>
            <Link
              href="#contact"
              className="bg-green text-white px-4 py-2 rounded-full hover:bg-green/90 transition-colors"
            >
              Agendar Visita
            </Link>
          </nav>

          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple mb-4">Dreams Tech</h1>
            <p className="text-xl md:text-2xl text-purple mb-6">Tecnologia dos Sonhos</p>
            <p className="text-gray-600 mb-8 max-w-md">
              Acreditamos que a educação vai além do conteúdo. Unimos o interesse pela tecnologia à formação ética e
              emocional, inspirando crianças e adolescentes a se tornarem líderes vencedores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#courses"
                className="bg-green text-white px-6 py-3 rounded-full hover:bg-green/90 transition-colors flex items-center justify-center gap-2"
              >
                Ver Cursos
                <ChevronRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="border border-green text-green px-6 py-3 rounded-full hover:bg-cream/80 transition-colors flex items-center justify-center"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/mascote.png"
              alt="Mascote Dreams Tech"
              width={400}
              height={400}
              className="w-auto h-auto max-w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">Sobre a Dreams Tech</h2>
            <div className="w-20 h-1 bg-green mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon type="mission" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold text-purple mb-4 text-center">Nossa Missão</h3>
              <p className="text-gray-600 text-center">
                Proporcionar um ambiente seguro e acolhedor, onde os estudantes aprendem tecnologia de forma leve e
                divertida, desenvolvendo autonomia, habilidades técnicas, emocionais e sociais, fundamentadas em
                princípios cristãos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon type="vision" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold text-purple mb-4 text-center">Nossa Visão</h3>
              <p className="text-gray-600 text-center">
                Ser referência internacional em educação tecnológica para crianças e adolescentes, promovendo um
                aprendizado significativo que desenvolve indivíduos confiantes, éticos e preparados para os desafios do
                futuro.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon type="values" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold text-purple mb-4 text-center">Nossos Valores</h3>
              <p className="text-gray-600 text-center">
                Nossa educação é baseada em princípios como: honra, lealdade, graça e domínio próprio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">Nossos Cursos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma variedade de cursos de robótica e tecnologia para escolas de ensino fundamental e médio,
              adaptados às diferentes faixas etárias.
            </p>
            <div className="w-20 h-1 bg-green mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="Introdução à Robótica"
              description="Curso básico para alunos do ensino fundamental, com atividades lúdicas e introdução aos conceitos de robótica."
              image="/courses/intro-robotics.jpg"
              level="Fundamental I"
              duration="10 semanas"
            />

            <CourseCard
              title="Programação com Blocos"
              description="Aprenda lógica de programação de forma visual e intuitiva, ideal para crianças de 8 a 12 anos."
              image="/courses/block-programming.jpg"
              level="Fundamental I e II"
              duration="12 semanas"
            />

            <CourseCard
              title="Robótica Avançada"
              description="Desenvolvimento de projetos complexos com sensores, motores e programação textual para alunos do ensino médio."
              image="/courses/advanced-robotics.jpg"
              level="Ensino Médio"
              duration="16 semanas"
            />

            <CourseCard
              title="Inteligência Artificial"
              description="Introdução aos conceitos de IA e machine learning com aplicações práticas em robótica educacional."
              image="/courses/ai-course.jpg"
              level="Ensino Médio"
              duration="14 semanas"
            />

            <CourseCard
              title="Eletrônica Básica"
              description="Fundamentos de eletrônica, circuitos e componentes para projetos de robótica e automação."
              image="/courses/electronics.jpg"
              level="Fundamental II e Médio"
              duration="12 semanas"
            />

            <CourseCard
              title="Competições de Robótica"
              description="Preparação para torneios e olimpíadas de robótica nacionais e internacionais."
              image="/courses/robotics-competition.jpg"
              level="Todos os níveis"
              duration="20 semanas"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="bg-green text-white px-6 py-3 rounded-full hover:bg-green/90 transition-colors inline-flex items-center gap-2"
            >
              Solicitar Programa Completo
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">O Que Dizem Sobre Nós</h2>
            <div className="w-20 h-1 bg-green mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="A parceria com a Dreams Tech transformou nossa abordagem de ensino de ciências e tecnologia. Os alunos estão mais engajados e desenvolvendo habilidades incríveis."
              author="Maria Silva"
              role="Diretora - Colégio Inovação"
              avatar="/testimonials/avatar1.jpg"
            />

            <TestimonialCard
              quote="Os cursos de robótica da Dreams Tech são excepcionais. A metodologia é envolvente e os instrutores são altamente qualificados. Recomendo a todas as escolas."
              author="Carlos Mendes"
              role="Coordenador de Tecnologia - Escola Futuro"
              avatar="/testimonials/avatar2.jpg"
            />

            <TestimonialCard
              quote="Desde que implementamos os cursos da Dreams Tech, notamos um aumento significativo no interesse dos alunos por carreiras em STEM. Uma parceria que veio para ficar!"
              author="Ana Oliveira"
              role="Professora - Colégio Progresso"
              avatar="/testimonials/avatar3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">Entre em Contato</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para levar a robótica educacional para sua escola. Preencha o formulário abaixo e
              entraremos em contato em até 24 horas.
            </p>
            <div className="w-20 h-1 bg-green mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-green p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <p className="flex items-start gap-3">
                    <Icon type="location" />
                    <span>Av. Tecnologia, 1234 - Campo Grande, MS</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Icon type="email" />
                    <span>contato@dreamstech.com.br</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Icon type="phone" />
                    <span>(43) 99191-0292</span>
                  </p>
                </div>

                <div className="mt-12">
                  <h4 className="text-xl font-semibold mb-4">Siga-nos</h4>
                  <div className="flex gap-4">
                    <Link
                      href="https://www.facebook.com/share/169f5Ykr76/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Icon type="facebook" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/dreamstech.brasil?igsh=YjUzdHAzNnJrcnpq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Icon type="instagram" />
                    </Link>
                    <Link
                      href="https://wa.me/5543991910292"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Icon type="whatsapp" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome da Escola
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                      placeholder="Digite o nome da sua escola"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                      placeholder="Como podemos ajudar sua escola?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green text-white px-6 py-3 rounded-md hover:bg-green/90 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/mascote.png" alt="Dreams Tech Logo" width={40} height={40} className="w-10 h-10" />
                <span className="text-xl font-bold">Dreams Tech</span>
              </div>
              <p className="text-cream/80 mb-4">Tecnologia dos Sonhos</p>
              <p className="text-cream/80">Transformando o futuro através da robótica educacional.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-cream/80 hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-cream/80 hover:text-white transition-colors">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-cream/80 hover:text-white transition-colors">
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-cream/80 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Cursos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-cream/80 hover:text-white transition-colors">
                    Introdução à Robótica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-cream/80 hover:text-white transition-colors">
                    Programação com Blocos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-cream/80 hover:text-white transition-colors">
                    Robótica Avançada
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-cream/80 hover:text-white transition-colors">
                    Inteligência Artificial
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-cream/80 mb-4">Inscreva-se para receber novidades e conteúdos exclusivos.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button type="submit" className="bg-green px-4 py-2 rounded-r-md hover:bg-green/90 transition-colors">
                  Enviar
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-purple/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream/80 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Dreams Tech. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-cream/80 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-cream/80 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
