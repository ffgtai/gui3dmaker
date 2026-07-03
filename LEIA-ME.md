<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gui 3D Maker — Impressões 3D Copa 2026 e Brinquedos</title>
<meta name="description" content="Miniaturas, chaveiros da Copa 2026 e brinquedos divertidos impressos em 3D por um maker de 8 anos. Compre online ou combine pelo WhatsApp.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#F5F7F1;
    --paper:#FFFFFF;
    --ink:#12241C;
    --ink-soft:#3E5449;
    --green:#0B6E4F;
    --green-deep:#0A4D38;
    --gold:#F2A900;
    --gold-deep:#C98600;
    --coral:#EF4B3F;
    --line:#D8E3D6;
    --shadow: 0 10px 30px -12px rgba(11,40,26,0.25);
    --radius: 18px;
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    background:var(--bg);
    color:var(--ink);
    font-family:'Manrope',sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  body::before{
    content:"";
    position:fixed;
    inset:0;
    background-image:
      radial-gradient(circle, rgba(11,110,79,0.10) 1px, transparent 1px);
    background-size: 26px 26px;
    pointer-events:none;
    z-index:0;
  }
  h1,h2,h3{ font-family:'Baloo 2',sans-serif; margin:0; line-height:1.05;}
  a{color:inherit; text-decoration:none;}
  .wrap{max-width:1140px; margin:0 auto; padding:0 24px; position:relative; z-index:1;}
  .mono{font-family:'Space Mono',monospace;}
  .eyebrow{
    font-family:'Space Mono',monospace;
    font-size:.72rem;
    letter-spacing:.14em;
    text-transform:uppercase;
    color:var(--green-deep);
    display:inline-flex;
    align-items:center;
    gap:8px;
  }
  .eyebrow::before{
    content:"";
    width:8px;height:8px;border-radius:50%;
    background:var(--coral);
    box-shadow:0 0 0 3px rgba(239,75,63,.18);
  }

  /* Header */
  header{
    position:sticky; top:0; z-index:50;
    background:rgba(245,247,241,.86);
    backdrop-filter: blur(10px);
    border-bottom:1px solid var(--line);
  }
  .nav{
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 24px;
  }
  .logo{ display:flex; align-items:center; gap:10px; font-family:'Baloo 2'; font-weight:800; font-size:1.25rem; }
  .logo .badge3d{
    width:34px;height:34px;border-radius:10px;
    background:linear-gradient(135deg,var(--green),var(--green-deep));
    color:#fff; display:flex; align-items:center; justify-content:center;
    font-family:'Space Mono'; font-weight:700; font-size:.85rem;
    box-shadow: 0 4px 10px -3px rgba(10,77,56,.6);
    transform: rotate(-4deg);
  }
  nav.links{ display:flex; gap:28px; font-weight:600; font-size:.94rem;}
  nav.links a{ color:var(--ink-soft); transition:color .2s; }
  nav.links a:hover{ color:var(--green-deep); }
  .nav-cta{
    background:var(--ink); color:#fff; padding:10px 18px; border-radius:100px;
    font-weight:700; font-size:.88rem; display:flex; align-items:center; gap:8px;
  }
  .menu-toggle{ display:none; background:none; border:none; font-size:1.5rem; cursor:pointer; color:var(--ink);}

  /* Hero */
  .hero{ padding:76px 0 40px; position:relative; overflow:hidden;}
  .hero-grid{ display:grid; grid-template-columns:1.05fr .95fr; gap:56px; align-items:center;}
  .hero h1{
    font-size:clamp(2.6rem, 5.4vw, 4.4rem);
    font-weight:800;
    color:var(--ink);
    margin:18px 0 20px;
  }
  .hero h1 .accent{
    color:var(--green);
    position:relative;
    display:inline-block;
  }
  .hero p.lead{ font-size:1.14rem; color:var(--ink-soft); max-width:46ch; margin-bottom:30px;}
  .cta-row{ display:flex; gap:14px; flex-wrap:wrap; }
  .btn{
    display:inline-flex; align-items:center; gap:10px;
    padding:15px 26px; border-radius:100px; font-weight:700; font-size:.96rem;
    border:none; cursor:pointer; position:relative; overflow:hidden;
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .btn:active{ transform:scale(.97); }
  .btn-primary{
    background:var(--gold); color:#241800;
    box-shadow: 0 10px 24px -10px rgba(242,169,0,.7);
  }
  .btn-primary span.fill{
    position:absolute; left:0; top:0; bottom:0; width:0%;
    background:var(--gold-deep); z-index:0; transition:width .35s ease;
  }
  .btn-primary:hover span.fill{ width:100%; }
  .btn-primary .label{ position:relative; z-index:1; display:flex; align-items:center; gap:8px;}
  .btn-primary:hover{ box-shadow:0 14px 28px -10px rgba(201,134,0,.8); }
  .btn-outline{
    background:transparent; color:var(--ink); border:2px solid var(--ink);
  }
  .btn-outline:hover{ background:var(--ink); color:#fff; }
  .btn-whatsapp{
    background:#1F8A57; color:#fff;
  }
  .btn-whatsapp:hover{ background:#166b42; }

  .hero-photo-wrap{ position:relative; }
  .hero-photo{
    width:100%; aspect-ratio:1/1.05; border-radius:26px; overflow:hidden;
    border:6px solid var(--paper); box-shadow:var(--shadow);
    background: linear-gradient(160deg, #dfe9dd, #cfe0d2);
    position:relative;
  }
  .hero-photo img{ width:100%; height:100%; object-fit:cover; display:block;}
  .layer-tag{
    position:absolute; bottom:-18px; left:-18px;
    background:var(--paper); border-radius:16px; padding:14px 18px;
    box-shadow:var(--shadow); border:1px solid var(--line);
    display:flex; flex-direction:column; gap:2px;
  }
  .layer-tag .num{ font-family:'Space Mono'; font-weight:700; font-size:1.5rem; color:var(--green-deep);}
  .layer-tag .lab{ font-size:.76rem; color:var(--ink-soft); text-transform:uppercase; letter-spacing:.06em; font-weight:700;}
  .spec-chip{
    position:absolute; top:20px; right:-14px;
    background:var(--coral); color:#fff; padding:8px 14px; border-radius:100px;
    font-family:'Space Mono'; font-size:.72rem; font-weight:700;
    box-shadow: 0 8px 18px -8px rgba(239,75,63,.7);
    transform: rotate(4deg);
  }

  /* Sections generic */
  section{ padding:88px 0; position:relative;}
  .section-head{ max-width:640px; margin-bottom:44px;}
  .section-head h2{ font-size:clamp(2rem,3.6vw,2.7rem); margin-top:14px; }
  .section-head p{ color:var(--ink-soft); font-size:1.02rem; margin-top:12px;}

  /* Filters */
  .filters{ display:flex; gap:10px; flex-wrap:wrap; margin-bottom:34px;}
  .filter-btn{
    padding:9px 18px; border-radius:100px; border:1.5px solid var(--line);
    background:var(--paper); font-weight:700; font-size:.86rem; cursor:pointer;
    color:var(--ink-soft); transition:all .2s;
  }
  .filter-btn.active, .filter-btn:hover{
    background:var(--green); border-color:var(--green); color:#fff;
  }

  /* Product grid */
  .grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:26px;}
  .card{
    background:var(--paper); border-radius:var(--radius); overflow:hidden;
    border:1px solid var(--line); box-shadow: 0 6px 18px -12px rgba(11,40,26,.18);
    display:flex; flex-direction:column;
    transition:transform .22s ease, box-shadow .22s ease;
  }
  .card:hover{ transform:translateY(-6px); box-shadow:var(--shadow); }
  .card-img{ position:relative; aspect-ratio:4/3; background:#e7ede4; overflow:hidden;}
  .card-img img{ width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s ease;}
  .card:hover .card-img img{ transform:scale(1.06); }
  .card-tag{
    position:absolute; top:12px; left:12px; background:rgba(18,36,28,.82); color:#fff;
    font-size:.7rem; font-weight:700; padding:5px 10px; border-radius:100px; letter-spacing:.03em;
  }
  .card-body{ padding:20px 20px 22px; display:flex; flex-direction:column; gap:8px; flex:1;}
  .card-body h3{ font-size:1.16rem; }
  .card-body .desc{ color:var(--ink-soft); font-size:.9rem; line-height:1.5; flex:1;}
  .card-foot{ display:flex; align-items:center; justify-content:space-between; margin-top:10px; gap:10px;}
  .price{ font-family:'Space Mono'; font-weight:700; font-size:1.15rem; color:var(--green-deep);}
  .buy-btn{
    display:inline-flex; align-items:center; gap:6px; padding:10px 16px; border-radius:100px;
    background:var(--gold); color:#241800; font-weight:700; font-size:.84rem; border:none; cursor:pointer;
    box-shadow:0 8px 16px -8px rgba(242,169,0,.7); white-space:nowrap;
  }
  .buy-btn:hover{ background:var(--gold-deep); }
  .buy-btn.wa{ background:#1F8A57; color:#fff; box-shadow:0 8px 16px -8px rgba(31,138,87,.6); }
  .buy-btn.wa:hover{ background:#166b42; }

  /* Process */
  .steps{ display:grid; grid-template-columns:repeat(3,1fr); gap:26px;}
  .step{
    background:var(--paper); border:1px solid var(--line); border-radius:var(--radius);
    padding:28px 24px; position:relative;
  }
  .step .step-num{
    font-family:'Space Mono'; font-weight:700; font-size:.8rem; color:var(--coral);
    background:rgba(239,75,63,.1); display:inline-block; padding:4px 10px; border-radius:8px; margin-bottom:14px;
  }
  .step h3{ font-size:1.15rem; margin-bottom:8px;}
  .step p{ color:var(--ink-soft); font-size:.92rem; line-height:1.5; margin:0;}

  /* About */
  .about{ background:var(--green-deep); color:#fff; border-radius:28px; margin:0 24px; padding:64px 48px; overflow:hidden; position:relative;}
  .about::before{
    content:""; position:absolute; inset:0; opacity:.15;
    background-image: radial-gradient(circle, #fff 1px, transparent 1px);
    background-size:22px 22px;
  }
  .about-grid{ display:grid; grid-template-columns:1fr 1fr; gap:52px; align-items:center; position:relative; z-index:1;}
  .about img{ width:100%; border-radius:18px; box-shadow:0 20px 40px -14px rgba(0,0,0,.5);}
  .about h2{ font-size:clamp(1.8rem,3vw,2.3rem); margin-bottom:16px;}
  .about p{ color:#DCEFE3; line-height:1.7; margin-bottom:14px;}
  .about-stats{ display:flex; gap:28px; margin-top:24px;}
  .about-stats div{ }
  .about-stats .n{ font-family:'Space Mono'; font-weight:700; font-size:1.5rem; color:var(--gold);}
  .about-stats .l{ font-size:.76rem; text-transform:uppercase; letter-spacing:.06em; color:#B8D6C6;}

  /* Final CTA */
  .final-cta{ text-align:center; padding:100px 24px;}
  .final-cta .eyebrow{ justify-content:center; }
  .final-cta h2{ font-size:clamp(2.1rem,4vw,3rem); margin:16px auto 18px; max-width:14ch;}
  .final-cta p{ color:var(--ink-soft); max-width:48ch; margin:0 auto 30px;}
  .final-cta .cta-row{ justify-content:center; }

  footer{ border-top:1px solid var(--line); padding:36px 0; }
  .foot-row{ display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px;}
  .foot-row .logo{ font-size:1.05rem; }
  .foot-links{ display:flex; gap:20px; font-size:.86rem; color:var(--ink-soft); font-weight:600;}
  .credit{ font-size:.78rem; color:var(--ink-soft); margin-top:18px; text-align:center;}
  .credit a{ text-decoration:underline; }

  @media (max-width: 880px){
    nav.links, .menu-toggle{ display:none; }
    .hero-grid{ grid-template-columns:1fr; }
    .about-grid{ grid-template-columns:1fr; }
    .grid{ grid-template-columns:repeat(2,1fr); }
    .steps{ grid-template-columns:1fr; }
    .about{ margin:0 12px; padding:40px 24px; }
  }
  @media (max-width: 560px){
    .grid{ grid-template-columns:1fr; }
    .hero{ padding:52px 0 24px; }
    .cta-row .btn{ flex:1; justify-content:center; }
  }
  @media (prefers-reduced-motion: reduce){
    *{ animation:none !important; transition:none !important; }
  }
</style>
</head>
<body>

<header>
  <div class="nav wrap">
    <div class="logo"><span class="badge3d">3D</span> Gui 3D Maker</div>
    <nav class="links">
      <a href="#colecao">Copa 2026</a>
      <a href="#produtos">Produtos</a>
      <a href="#sobre">O Maker</a>
      <a href="#contato">Contato</a>
    </nav>
    <a class="nav-cta" href="#produtos">Ver Produtos</a>
  </div>
</header>

<main>
  <!-- HERO -->
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <span class="eyebrow">Maker de 8 anos &amp; Engenheiro do Futuro</span>
        <h1>Ideias que<br><span class="accent">ganham vida</span></h1>
        <p class="lead">Impressões 3D de alta precisão criadas por quem entende de diversão. Coleção exclusiva Copa 2026 já disponível — chaveiros, taças e brinquedos sensoriais feitos à mão, camada por camada.</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="#colecao"><span class="fill"></span><span class="label">🏆 Coleção Copa 2026</span></a>
          <a class="btn btn-outline" href="#contato">Fazer Encomenda</a>
        </div>
      </div>
      <div class="hero-photo-wrap">
        <div class="hero-photo">
          <img src="images/gui3dmaker.png" alt="Gui, o jovem maker de 8 anos, ao lado de sua impressora 3D">
        </div>
        <span class="spec-chip">PLA · 0.1mm</span>
        <div class="layer-tag">
          <span class="num">+500</span>
          <span class="lab">Peças entregues</span>
        </div>
      </div>
    </div>
  </section>

  <!-- GALLERY -->
  <section id="colecao">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Galeria de Projetos</span>
        <h2 id="produtos">Escolha, clique e receba em casa</h2>
        <p>Cada peça é fatiada, impressa e revisada aqui no ateliê. Filtre por categoria e clique em Comprar para ir direto ao pagamento — ou combine tudo pelo WhatsApp.</p>
      </div>

      <div class="filters" id="filters">
        <button class="filter-btn active" data-filter="todos">Todos</button>
        <button class="filter-btn" data-filter="copa">Copa 2026</button>
        <button class="filter-btn" data-filter="brinquedos">Brinquedos</button>
        <button class="filter-btn" data-filter="personalizados">Personalizados</button>
      </div>

      <div class="grid" id="grid"></div>
    </div>
  </section>

  <!-- PROCESS -->
  <section>
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Como Encomendar</span>
        <h2>Do clique à sua casa em 3 passos</h2>
      </div>
      <div class="steps">
        <div class="step">
          <span class="step-num">01</span>
          <h3>Escolha seu item</h3>
          <p>Navegue pela galeria, filtre por categoria e escolha seu favorito.</p>
        </div>
        <div class="step">
          <span class="step-num">02</span>
          <h3>Compre ou combine</h3>
          <p>Clique em Comprar para pagar online, ou em Combinar no WhatsApp para peças personalizadas.</p>
        </div>
        <div class="step">
          <span class="step-num">03</span>
          <h3>Receba em casa</h3>
          <p>Eu imprimo com carinho, embalo e envio pelos Correios para todo o Brasil.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="sobre">
    <div class="wrap">
      <div class="about">
        <div class="about-grid">
          <div>
            <span class="eyebrow" style="color:#F2A900;">A história por trás da impressora</span>
            <h2>De brincar com peças de montar a criar as próprias</h2>
            <p>Tudo começou com o gosto de brincar com peças de montar. Aos 6 anos participei de um curso de robótica na escola e passei a assistir vídeos de impressão 3D — a curiosidade virou paixão, e resolvi juntar minhas economias e pedir ajuda aos meus pais para comprar uma impressora 3D.</p>
            <p>Com a chegada da impressora, fomos aprendendo juntos. Hoje eu mesmo preparo os arquivos, troco o filamento e cuido de cada detalhe da produção. Meu objetivo é mostrar que crianças também podem ser criativas e empreendedoras — cada peça que você compra ajuda a financiar novos projetos!</p>
            <div class="about-stats">
              <div><div class="n">PLA</div><div class="l">Material Eco</div></div>
              <div><div class="n">0.1mm</div><div class="l">Alta Precisão</div></div>
              <div><div class="n">+500</div><div class="l">Peças Entregues</div></div>
            </div>
          </div>
          <img src="images/print-process.jpg" alt="Bico da impressora 3D extrudando filamento verde">
        </div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section id="contato">
    <div class="wrap final-cta">
      <span class="eyebrow">Pronto para criar?</span>
      <h2>Tire suas dúvidas ou peça um projeto personalizado</h2>
      <p>Fale direto comigo pelo WhatsApp para encomendas sob medida, ou volte à galeria para comprar um item pronto.</p>
      <div class="cta-row">
        <a class="btn btn-whatsapp" href="https://wa.me/5513997272626?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20e%20produtos%20da%20Gui%203D%20Maker" target="_blank" rel="noopener">💬 Chamar no WhatsApp</a>
        <a class="btn btn-outline" href="#produtos">Ver Coleção</a>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <div class="foot-row">
      <div class="logo"><span class="badge3d">3D</span> Gui 3D Maker © 2026</div>
      <div class="foot-links">
        <a href="#" onclick="return false;">Instagram</a>
        <a href="#" onclick="return false;">YouTube</a>
        <a href="#" onclick="return false;">Termos</a>
      </div>
    </div>
    <p class="credit">Site desenvolvido por <a href="https://ffgtai.github.io/ffgdigital/" target="_blank" rel="noopener">FFG Digital</a></p>
  </div>
</footer>

<script>
/* ======================================================================
   CONFIGURAÇÃO DE PRODUTOS
   - "checkout": cole aqui o link de pagamento (Mercado Pago Checkout Pro
     ou Link de Pagamento). Se ficar vazio (""), o botão "Comprar" cai
     automaticamente para o WhatsApp.
   - "wa": mensagem pronta pro WhatsApp (fallback / segunda opção).
   ====================================================================== */
const WHATSAPP_NUMBER = "5513997272626";

function waLink(product, price){
  const text = `Olá! Tenho interesse em: ${product} (R$ ${price}). Podemos combinar os detalhes?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const products = [
  {
    name: "Taça Copa 2026",
    price: "70",
    tag: "Edição Limitada",
    cat: "copa",
    img: "images/taca-copa.jpg",
    desc: "Impressão em PLA com acabamento metalizado dourado (tamanho 23,8cm).",
    checkout: "" // cole o link do Mercado Pago aqui
  },
  {
    name: "Brinquedo Sensorial (Snake)",
    price: "15",
    tag: "Sensorial",
    cat: "brinquedos",
    img: "images/snake.jpg",
    desc: "O brinquedo sensorial Snake você consegue movimentar ele e é ideal para as crianças!",
    checkout: ""
  },
  {
    name: "Chaveiro Taça da Copa",
    price: "15",
    tag: "Novo",
    cat: "copa",
    img: "images/chaveiro-taca-v4.jpg",
    desc: "Entre no clima da Copa 2026.",
    checkout: ""
  },
  {
    name: "Chaveiro Personalizado — Paolla",
    price: "15",
    tag: "Personalizado",
    cat: "personalizados",
    img: "images/chaveiro-paolla.jpg",
    desc: "Entre em contato e peça o seu, acabei de criar o meu!",
    checkout: ""
  },
  {
    name: "Chaveiro Personalizado — Guilherme",
    price: "15",
    tag: "Personalizado",
    cat: "personalizados",
    img: "images/chaveiro-nome-guilherme.jpg",
    desc: "Entre em contato e peça o seu, acabei de criar o meu!",
    checkout: ""
  },
  {
    name: "Chaveiro Personalizado — Noah",
    price: "15",
    tag: "Personalizado",
    cat: "personalizados",
    img: "images/chaveiro-noah.jpg",
    desc: "Entre em contato e peça o seu, acabei de criar o meu!",
    checkout: ""
  }
];

const grid = document.getElementById("grid");

function render(filter){
  grid.innerHTML = "";
  products
    .filter(p => filter === "todos" || p.cat === filter)
    .forEach(p => {
      const buyHref = p.checkout && p.checkout.trim() !== "" ? p.checkout : waLink(p.name, p.price);
      const buyLabel = p.checkout && p.checkout.trim() !== "" ? "Comprar" : "Comprar (WhatsApp)";
      const buyClass = p.checkout && p.checkout.trim() !== "" ? "buy-btn" : "buy-btn wa";

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-img">
          <span class="card-tag">${p.tag}</span>
          <img src="${p.img}" alt="${p.name}" loading="lazy">
        </div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p class="desc">${p.desc}</p>
          <div class="card-foot">
            <span class="price">R$ ${p.price}</span>
            <a class="${buyClass}" href="${buyHref}" target="_blank" rel="noopener">${buyLabel}</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
}

document.getElementById("filters").addEventListener("click", (e) => {
  if(!e.target.classList.contains("filter-btn")) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  render(e.target.dataset.filter);
});

render("todos");
</script>

</body>
</html>
