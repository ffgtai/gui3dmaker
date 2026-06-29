import { createFileRoute, Link } from "@tanstack/react-router";
import gui3dmakerImg from "@/assets/gui3dmaker.png.asset.json";
import productTrophy from "@/assets/taca-copa.jpg.asset.json";
import productDino from "@/assets/snake.jpg.asset.json";
import productCanarinhoV4 from "@/assets/chaveiro-taca-v4.jpg.asset.json";
import productKeychainName from "@/assets/chaveiro-nome-guilherme.jpg.asset.json";
import productKeychainFinha from "@/assets/chaveiro-finha.jpg.asset.json";
import productKeychainNoah from "@/assets/chaveiro-noah.jpg.asset.json";
import productKeychainPaolla from "@/assets/chaveiro-paolla.jpg.asset.json";
import printProcess from "@/assets/print-process.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gui 3D Maker — Impressões 3D Copa 2026 e Brinquedos" },
      {
        name: "description",
        content:
          "Miniaturas, figurinhas da Copa 2026 e brinquedos divertidos impressos em 3D por um maker de 8 anos. Encomende pelo WhatsApp.",
      },
      { property: "og:title", content: "Gui 3D Maker — Impressões 3D Copa 2026" },
      {
        property: "og:description",
        content: "Coleção exclusiva da Copa 2026 e brinquedos personalizados em 3D.",
      },
      { property: "og:image", content: gui3dmakerImg.url },
    ],
  }),
  component: Index,
});

const products = [
  {
    id: "copa",
    title: "Taça Copa 2026",
    desc: "Impressão em PLA com acabamento metalizado dourado (tamanho 23,8cm).",
    price: "R$ 70",
    badge: "Edição Limitada",
    badgeBg: "bg-primary",
    priceColor: "text-primary",
    img: productTrophy.url,
    code: "PROD_001_COPA",
  },
  {
    id: "dino",
    title: "Brinquedo Sensorial (Snake)",
    desc: "O brinquedo sensorial Snake você consegue movimentar ele e é ideal para as crianças!",
    price: "R$ 15",
    badge: "Sensorial",
    badgeBg: "bg-secondary",
    priceColor: "text-secondary",
    img: productDino.url,
    code: "PROD_002_DINO",
  },
  {
    id: "canarinho-fofinho",
    title: "Chaveiro Taça da Copa",
    desc: "Entre no clima da Copa 2026",
    price: "R$ 15",
    badge: "Novo",
    badgeBg: "bg-primary",
    priceColor: "text-primary",
    img: productCanarinhoV4.url,
    code: "PROD_004_CANARINHO_FOFINHO",
  },
  {
    id: "chaveiro-guilherme",
    title: "Chaveiro Guilherme",
    desc: "Entre em contato e peça o seu, acabei de criar o meu!",
    price: "R$ 15",
    badge: "Personalizado",
    badgeBg: "bg-accent",
    priceColor: "text-accent",
    img: productKeychainName.url,
    code: "PROD_005_KEYCHAIN_NAME",
  },
  {
    id: "chaveiro-finha",
    title: "Chaveiro Finha",
    desc: "Entre em contato e peça o seu, acabei de criar o meu!",
    price: "R$ 15",
    badge: "Personalizado",
    badgeBg: "bg-accent",
    priceColor: "text-accent",
    img: productKeychainFinha.url,
    code: "PROD_006_KEYCHAIN_FINHA",
  },
  {
    id: "chaveiro-noah",
    title: "Chaveiro Noah",
    desc: "Entre em contato e peça o seu, acabei de criar o meu!",
    price: "R$ 15",
    badge: "Personalizado",
    badgeBg: "bg-accent",
    priceColor: "text-accent",
    img: productKeychainNoah.url,
    code: "PROD_007_KEYCHAIN_NOAH",
  },
  {
    id: "chaveiro-paolla",
    title: "Chaveiro Paolla",
    desc: "Entre em contato e peça o seu, acabei de criar o meu!",
    price: "R$ 15",
    badge: "Personalizado",
    badgeBg: "bg-accent",
    priceColor: "text-accent",
    img: productKeychainPaolla.url,
    code: "PROD_008_KEYCHAIN_PAOLLA",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-primary/20">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              3D
            </div>
            <span className="font-extrabold tracking-tighter text-xl uppercase">
              Gui 3D Maker
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#colecao" className="hover:text-primary transition-colors">
              Copa 2026
            </a>
            <a href="#produtos" className="hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors">
              O Maker
            </a>
            <a
              href="#contato"
              className="px-4 py-2 bg-foreground text-background rounded-full hover:bg-primary transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative pt-20 pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                  Maker de 8 anos & Engenheiro do Futuro
                </div>
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 animate-print">
                  IDEIAS QUE
                  <br />
                  <span className="text-primary">GANHAM VIDA</span>
                </h1>
                <p className="max-w-md text-lg text-foreground/70 mb-10 leading-relaxed">
                  Impressões 3D de alta precisão criadas por quem entende de
                  diversão. Coleção exclusiva Copa 2026 já disponível.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#colecao"
                    className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                  >
                    Coleção Copa 2026
                  </a>
                  <a
                    href="#contato"
                    className="px-8 py-4 border-2 border-border font-bold rounded-xl hover:bg-foreground/5 transition-colors"
                  >
                    Fazer Encomenda
                  </a>
                </div>
              </div>
              <div className="relative animate-slide [animation-delay:200ms]">
                <div className="w-full aspect-square bg-stone-200 rounded-[2rem] overflow-hidden ring-8 ring-card shadow-2xl">
                  <img
                    src={gui3dmakerImg.url}
                    alt="Gui, o jovem maker de 8 anos, ao lado de sua impressora 3D"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border flex items-center gap-4">
                  <div className="size-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                    <span className="font-mono font-bold text-sm">+500</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase opacity-40">
                      Peças Entregues
                    </p>
                    <p className="font-extrabold">Em todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="colecao" className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <h2 className="text-4xl font-extrabold tracking-tighter uppercase mb-4">
                  Galeria de Projetos
                </h2>
                <div id="produtos" className="flex flex-wrap gap-2">
                  <button className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-bold">
                    Tudo
                  </button>
                  <button className="px-5 py-2 rounded-full bg-foreground/5 text-foreground/60 text-sm font-bold hover:bg-primary/10 hover:text-primary transition-colors">
                    Copa 2026
                  </button>
                  <button className="px-5 py-2 rounded-full bg-foreground/5 text-foreground/60 text-sm font-bold hover:bg-secondary/10 hover:text-secondary transition-colors">
                    Brinquedos
                  </button>
                  <button className="px-5 py-2 rounded-full bg-foreground/5 text-foreground/60 text-sm font-bold hover:bg-accent/10 hover:text-accent transition-colors">
                    Personalizados
                  </button>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                Filtrando {products.length} de 12 objetos ativos
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((p) => (
                <div key={p.id} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] bg-stone-100 rounded-3xl overflow-hidden mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <img
                      src={p.img}
                      alt={p.title}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 ${p.badgeBg} text-primary-foreground text-[10px] font-bold rounded-lg uppercase tracking-wider z-10`}
                    >
                      {p.badge}
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold tracking-tight">
                        {p.title}
                      </h3>
                      <span className={`font-mono ${p.priceColor} font-bold`}>
                        {p.price}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/60">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="py-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-full aspect-video bg-white/10 rounded-3xl overflow-hidden">
                  <img
                    src={printProcess}
                    alt="Bico da impressora 3D extrudando filamento verde"
                    width={1280}
                    height={832}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-extrabold tracking-tighter uppercase mb-6">
                  A história por trás da impressora 3D
                </h2>
                <p className="text-lg opacity-80 leading-relaxed mb-6">
                  Tudo começou com o gosto de brincar com peças de montar, aos
                  6 anos participei de um curso de robótica na escola, depois
                  passei a assistir vídeos de impressão 3D, o que era
                  curiosidade virou paixão, foi aí que resolvi pegar as minhas
                  economias que venho juntando e pedi aos meus pais para me
                  ajudar a comprar uma impressora 3D.
                </p>
                <p className="text-lg opacity-80 leading-relaxed mb-8">
                  Com a chegada da impressora, fomos aprendendo a utilizá-la e
                  agora preparo os arquivos, troco o filamento e cuido de cada
                  detalhe da produção.
                </p>
                <p className="text-lg opacity-80 leading-relaxed mb-8">
                  Meu objetivo é mostrar que crianças também podem ser criativas
                  e empreendedoras. Cada peça que você compra ajuda a financiar
                  novos projetos!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <p className="text-2xl font-bold font-mono">PLA</p>
                    <p className="text-xs uppercase opacity-40">Material Eco</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <p className="text-2xl font-bold font-mono">0.1mm</p>
                    <p className="text-xs uppercase opacity-40">
                      Alta Precisão
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to order */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold tracking-tighter uppercase mb-16">
              Como Encomendar
            </h2>
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-border" />
              {[
                {
                  n: 1,
                  color: "border-primary text-primary",
                  title: "Escolha seu item",
                  desc: "Navegue pela galeria e escolha seu favorito.",
                },
                {
                  n: 2,
                  color: "border-secondary text-secondary",
                  title: "Mande um Oi",
                  desc: "Clique no botão do WhatsApp e envie o link ou foto.",
                },
                {
                  n: 3,
                  color: "border-accent text-accent",
                  title: "Receba em Casa",
                  desc: "Eu imprimo com carinho e envio pelos correios.",
                },
              ].map((s) => (
                <div key={s.n} className="relative">
                  <div
                    className={`size-20 rounded-full bg-card border-4 ${s.color} mx-auto mb-6 flex items-center justify-center text-2xl font-extrabold z-10 relative`}
                  >
                    {s.n}
                  </div>
                  <h4 className="font-bold mb-2">{s.title}</h4>
                  <p className="text-sm text-foreground/60">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="pb-24 px-6">
          <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 size-64 bg-secondary/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <h2 className="relative text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
              PRONTO PARA CRIAR?
            </h2>
            <p className="relative text-xl opacity-90 mb-10 max-w-xl mx-auto">
              Tire suas dúvidas ou peça um projeto personalizado direto pelo
              meu WhatsApp.
            </p>
            <a
              href="https://wa.me/5513997272626?text=Olá! Gostaria de saber mais sobre os serviços e produtos da Gui 3D Maker"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 bg-card text-primary rounded-2xl font-extrabold text-xl hover:scale-105 transition-transform"
            >
              Chamar no WhatsApp
              <span className="text-xs bg-primary/10 px-2 py-1 rounded">
                Online
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-60">
            <div className="size-6 bg-foreground rounded flex items-center justify-center text-background text-[10px] font-bold">
              3D
            </div>
            <span className="font-bold tracking-tighter uppercase text-sm">
              Gui 3D Maker © 2026
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-[10px] font-mono uppercase tracking-widest text-foreground/40">
            <span>
              Site desenvolvido por{" "}
              <a
                href="https://ffgtai.github.io/ffgdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-2"
              >
                FFG Digital
              </a>
            </span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary">
                Instagram
              </a>
              <a href="#" className="hover:text-primary">
                Youtube
              </a>
              <a href="#" className="hover:text-primary">
                Termos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
