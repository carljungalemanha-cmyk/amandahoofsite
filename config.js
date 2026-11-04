/**
 * config.js - Conteúdo Variável do Site de Luxo de Harmonização Orofacial
 * Dra. Amanda Hoff | Cirurgiã Dentista • CRO/MS 8919
 * Instituto Áurea - Campo Grande / MS
 */

export const SITE = {
  doutora: {
    nome: 'Dra. Amanda Hoff',
    titulo: 'Cirurgiã Dentista | CRO/MS 8919',
    especialidade: 'Especialista em Harmonização Orofacial',
    cidade: 'Campo Grande - MS',
    registro: 'CRO/MS 8919',
    instagram: 'dra.amandahoff',
    instagramUrl: 'https://www.instagram.com/dra.amandahoff/',
    whatsapp: '5567999868757',
    telefone: '(67) 99986-8757',
    foto: 'https://i.ibb.co/fdYhxf0Q/Save-Clip-App-730104265-18592967698029215-1440066546631696159-n-1.webp'
  },
  hero: {
    titulo: 'Seu rosto, na sua melhor <span class="hero-gold-script">versão.</span>',
    subtitulo: 'Harmonização orofacial para realçar o que já é seu: proporção, frescor e naturalidade. Cada plano nasce de uma avaliação individual com a Dra. Amanda Hoff no Instituto Áurea em Campo Grande.',
    cards: ['Resultado natural', 'Avaliação personalizada', '+3 anos de experiência'],
    foto: 'https://i.ibb.co/fdYhxf0Q/Save-Clip-App-730104265-18592967698029215-1440066546631696159-n-1.webp',
    arco: 'HARMONIA ✦ NATURALIDADE ✦ ELEGÂNCIA ✦ CUIDADO ✦ CONFIANÇA ✦ '
  },
  faixa: ['Beauty', 'Harmonia', 'Naturalidade', 'Elegância', 'Cuidado', 'Confiança'],
  transformacao: {
    antes: '/img/antes.webp',
    depois: '/img/depois.webp',
    legenda: 'Resultados variam de pessoa para pessoa.'
  },
  servicos: [
    {
      id: 'labial',
      rotulo: 'Lábios',
      nome: 'Preenchimento labial',
      foto: '/img/s-labial.svg',
      foco: [50, 45],
      durabilidade: '10 a 16 meses',
      recuperacao: 'Imediata (leve edema transitório em 24h)',
      indicacao: 'Lábios desidratados, assimetrias anatômicas e perda de contorno pelo tempo.',
      descricao: 'Contorno, volume e hidratação na medida do seu rosto, respeitando a proporção entre os lábios superior e inferior.',
      beneficios: [
        'Lábios mais jovens, hidratados e volumizados',
        'Simetria e contorno nítido do arco do cupido',
        'Acabamento discreto sem efeito artificial',
        'Uso de ácido hialurônico de alta biocompatibilidade com lidocaína'
      ]
    },
    {
      id: 'mento',
      rotulo: 'Mento',
      nome: 'Preenchimento de mento',
      foto: '/img/s-mento.svg',
      foco: [50, 56],
      durabilidade: '14 a 18 meses',
      recuperacao: 'Sem afastamento do trabalho',
      indicacao: 'Queixo retraído, falta de projeção no perfil e harmonia do terço inferior.',
      descricao: 'Projeta e alinha o queixo para equilibrar o perfil e a harmonia entre nariz, lábios e mandíbula.',
      beneficios: [
        'Mais expressão e definição no perfil',
        'Equilíbrio e alinhamento dos terços faciais',
        'Contorno elegante da linha da mandíbula',
        'Estruturação com sustentação óssea anatômica precisa'
      ]
    },
    {
      id: 'full',
      rotulo: 'Full face',
      nome: 'Full face',
      foto: '/img/s-full.svg',
      foco: [50, 42],
      durabilidade: '12 a 24 meses',
      recuperacao: 'Planejada em etapas confortáveis',
      indicacao: 'Rejuvenescimento global integrado, perda de sustentação e flacidez moderada.',
      descricao: 'Planejamento completo do rosto, combinando técnicas para rejuvenescer com coerência entre todas as regiões.',
      beneficios: [
        'Rosto harmônico, descansado e rejuvenescido',
        'Resultado integrado em equilíbrio estético',
        'Plano personalizado executado em etapas seguras',
        'Associação de preenchedores reabsorvíveis e bioestimuladores'
      ]
    },
    {
      id: 'botox',
      rotulo: 'Botox',
      nome: 'Botox',
      foto: '/img/s-botox.svg',
      foco: [50, 26],
      durabilidade: '4 a 6 meses',
      recuperacao: 'Retorno imediato às atividades normais',
      indicacao: 'Rugas na testa, glabela (entre as sobrancelhas) e pés de galinha ao redor dos olhos.',
      descricao: 'Relaxa a musculatura das linhas de expressão da testa e do olhar, sem congelar a sua expressão.',
      beneficios: [
        'Olhar descansado, leve e jovial',
        'Prevenção ativa de novas marcas e vincos',
        'Resultado perceptível em poucos dias',
        'Técnica de dosagem personalizada para manter a mímica natural'
      ]
    },
    {
      id: 'olheira',
      rotulo: 'Olheiras',
      nome: 'Preenchimento de olheira',
      foto: '/img/s-olheira.svg',
      foco: [50, 36],
      durabilidade: '12 a 18 meses',
      recuperacao: 'Sem necessidade de repouso',
      indicacao: 'Sulco nasojugal profundo, sombras sob os olhos e aspecto crônico de cansaço.',
      descricao: 'Suaviza a sombra e o aspecto de cansaço sob os olhos, devolvendo luz e frescor ao olhar.',
      beneficios: [
        'Olhar iluminado e livre de sombras profundas',
        'Rosto descansado com frescor imediato',
        'Ácido hialurônico específico para a área periocular',
        'Aplicação atraumática com microcânula flexível'
      ]
    }
  ],
  galeria: [
    { src: '/img/g1.svg', legenda: 'Preenchimento labial com definição de contorno e hidratação' },
    { src: '/img/g2.svg', legenda: 'Alinhamento de perfil com projeção de mento e ângulo mandibular' },
    { src: '/img/g3.svg', legenda: 'Tratamento preventivo de linhas com toxina botulínica' },
    { src: '/img/g4.svg', legenda: 'Suavização profunda de olheiras e iluminação do olhar' },
    { src: '/img/g5.svg', legenda: 'Planejamento Full Face: harmonia e rejuvenescimento integrado' },
    { src: '/img/g6.svg', legenda: 'Harmonização de perfil respeitando traços anatômicos' },
    { src: '/img/g7.svg', legenda: 'Efeito gloss labial e definição do arco do cupido' },
    { src: '/img/g8.svg', legenda: 'Equilíbrio e proporção áurea facial individualizada' }
  ],
  sobre: {
    titulo: 'Sua beleza é <span class="hero-gold-script">única.</span> O cuidado também.',
    subtitulo: 'Conheça a Dra. Amanda Hoff, cirurgiã dentista especializada em Harmonização Orofacial em Campo Grande - MS.',
    emocional: 'Acredito que nenhum rosto precisa ser padronizado ou copiado. Cada traço conta a sua história, e a odontologia aliada à estética facial tem o poder de revelar o que você tem de melhor, com extrema delicadeza, segurança e escuta atenta. Quando você se olha no espelho e se reconhece renovada, com frescor e autoconfiança, é a certeza de um propósito cumprido. Aqui você não é um procedimento: é uma pessoa com expectativas e um jeito único de ser bela.',
    tecnico: 'Amanda Hoff é cirurgiã dentista graduada e especializada em Harmonização Orofacial (HOF), com mais de 3 anos de experiência clínica dedicada à arquitetura da face, proporção áurea e bioestímulo. Atua com rigor científico, protocolos avançados de biossegurança e materiais de padrão ouro internacional (ácido hialurônico de alta pureza e toxina botulínica de precisão).',
    citacao: '“Harmonizar não é transformar você em outra pessoa — é devolver ao espelho a sua versão mais descansada, elegante e confiante.”',
    numeros: [
      { v: 3, sufixo: '+', rotulo: 'anos de experiência' },
      { v: 800, sufixo: '+', rotulo: 'pacientes atendidas' },
      { v: 5, sufixo: '.0', rotulo: 'avaliação média' }
    ]
  },
  instagram: {
    reelUrl: 'https://www.instagram.com/reel/DdsHuMaNDZc/',
    reelEmbed: 'https://www.instagram.com/reel/DdsHuMaNDZc/embed/',
    perfil: 'dra.amandahoff',
    perfilUrl: 'https://www.instagram.com/dra.amandahoff/'
  },
  clinica: {
    nome: 'Instituto Áurea',
    instagram: 'instituto_aurea_',
    instagramUrl: 'https://www.instagram.com/instituto_aurea_/',
    logo: 'https://i.ibb.co/HThjYtm8/788462309-17925893265419867-1947095415579160025-n.webp',
    frase: '“Onde a precisão da odontologia e a arte da harmonia orofacial se encontram para revelar a sua beleza mais autêntica.”'
  },
  feedbacks: [
    {
      nome: 'Mariana Silveira',
      servico: 'Preenchimento labial',
      texto: 'Saí me sentindo eu mesma, só mais descansada. A Dra. Amanda tem uma mão levíssima e super atenciosa!'
    },
    {
      nome: 'Camila Albuquerque',
      servico: 'Preenchimento de mento',
      texto: 'O alinhamento do meu queixo mudou completamente a harmonia das fotos de perfil. Um resultado impecável e super sutil.'
    },
    {
      nome: 'Patrícia Novaes',
      servico: 'Botox preventivo',
      texto: 'Eu tinha muito medo de ficar com o rosto congelado, mas o resultado da Dra. Amanda é leveza pura. As linhas sumiram naturalmente.'
    },
    {
      nome: 'Beatriz M. Castro',
      servico: 'Preenchimento de olheira',
      texto: 'Adeus corretivo pesado todo dia! A sombra sob os olhos suavizou tanto que pareço ter dormido 10 horas todos os dias.'
    },
    {
      nome: 'Renata V. Guimarães',
      servico: 'Full face',
      texto: 'Fizemos o plano em etapas com muita calma e transparência no Instituto Áurea. Hoje me olho no espelho e vejo a minha melhor versão.'
    },
    {
      nome: 'Juliana Mendes',
      servico: 'Preenchimento labial',
      texto: 'Volume na medida certa, sem bico exagerado. Meus lábios ficaram hidratados e com o arco do cupido desenhado com delicadeza.'
    },
    {
      nome: 'Larissa Fontes',
      servico: 'Botox & Olheiras',
      texto: 'O atendimento da Dra. Amanda é acolhedor e super seguro. Ela explica cada detalhe anatômico e passa uma tranquilidade ímpar.'
    },
    {
      nome: 'Sofia Leite',
      servico: 'Full face',
      texto: 'Profissionalismo de altíssimo nível. A clínica Instituto Áurea é um refúgio de paz, café delicioso e o resultado superou todas as expectativas.'
    },
    {
      nome: 'Fernanda Dantas',
      servico: 'Preenchimento labial & mento',
      texto: 'A sutileza no trabalho dela é impressionante. Recuperei a definição do meu queixo e meus lábios rejuvenesceram sem perder a identidade.'
    },
    {
      nome: 'Carolina Meirelles',
      servico: 'Harmonização Facial',
      texto: 'A Dra. Amanda tem mãos de fada! Não senti desconforto e o planejamento facial respeitou cada detalhe meu.'
    },
    {
      nome: 'Luciana Barreto',
      servico: 'Preenchimento de olheiras',
      texto: 'O olhar cansado me incomodava há anos. O procedimento foi rápido, tranquilo e o efeito iluminador ficou surpreendente.'
    },
    {
      nome: 'Gabriela Vasconcelos',
      servico: 'Rejuvenescimento facial',
      texto: 'Equipe impecável e pós-atendimento atencioso demais. É muito gratificante encontrar uma profissional que prioriza a elegância e a naturalidade.'
    }
  ],
  estudio: {
    fotos: [
      { src: '/img/studio-1.svg', titulo: 'Sala de Avaliação Privativa', legenda: 'Ambiente acolhedor e privativo para planejamento anatômico detalhado' },
      { src: '/img/studio-2.svg', titulo: 'Recepção VIP & Lounge', legenda: 'Espaço exclusivo com café especial, conforto e privacidade' },
      { src: '/img/studio-3.svg', titulo: 'Consultório de Procedimentos', legenda: 'Biossegurança hospitalar rigorosa e tecnologia de ponta para sua segurança' },
      { src: '/img/studio-4.svg', titulo: 'Espaço de Relaxamento', legenda: 'Privacidade e acolhimento total antes e após cada atendimento' }
    ],
    endereco: 'Rua Sete de Setembro, 1045, Centro',
    cidade: 'Campo Grande - MS, 79002-130, Brasil',
    horario: 'Segunda a Sexta, das 09h às 19h • Atendimento exclusivo com hora marcada',
    dica: 'Localização privilegiada no Centro de Campo Grande, estacionamento facilitado e recepção com conforto privativo.',
    mapsEmbed: 'https://www.google.com/maps?q=Rua+Sete+de+Setembro,+1045+-+Centro,+Campo+Grande+-+MS,+79002-130&output=embed',
    mapsLink: 'https://maps.google.com/?q=Rua+Sete+de+Setembro,+1045+-+Centro,+Campo+Grande+-+MS,+79002-130',
    wazeLink: 'https://waze.com/ul?q=Rua+Sete+de+Setembro,+1045,+Campo+Grande+MS'
  },
  atendimento: [
    {
      passo: '01',
      titulo: 'Conte o que te incomoda',
      descricao: 'Envie sua mensagem ou inicie uma conversa no WhatsApp informando seus objetivos e queixas principais.'
    },
    {
      passo: '02',
      titulo: 'Envie fotos guiadas',
      descricao: 'Nossa equipe orienta fotos simples de frente e perfil para fazermos uma pré-análise personalizada da sua anatomia.'
    },
    {
      passo: '03',
      titulo: 'Receba a orientação inicial',
      descricao: 'Esclarecemos dúvidas, alinhamos expectativas e apresentamos as possibilidades de tratamento seguras.'
    },
    {
      passo: '04',
      titulo: 'Venha para a avaliação presencial',
      descricao: 'No Instituto Áurea, realizamos a consulta de planejamento detalhada e iniciamos seu plano de harmonização com conforto.'
    }
  ],
  simulador: {
    antes: '/img/antes.webp',
    depois: '/img/depois.webp',
    regioes: {
      labios: { x: 50, y: 44, rx: 17, ry: 8, servico: 'Preenchimento labial', rotulo: 'Olhar descansado' },
      queixo: { x: 50, y: 56, rx: 21, ry: 9, servico: 'Preenchimento de mento', rotulo: 'Mais boca' },
      olhos: [
        { x: 45, y: 36, rx: 11, ry: 6 },
        { x: 55, y: 36, rx: 11, ry: 6 }
      ],
      full: { x: 50, y: 42, rx: 32, ry: 38, servico: 'Full face', rotulo: 'Rejuvenescer tudo' }
    }
  },
  faq: [
    {
      p: 'Fico com aspecto artificial?',
      r: 'Não. O trabalho da Dra. Amanda Hoff é pautado pela proporção anatômica, sofisticação e escuta ativa. O objetivo nunca é transformar ou padronizar seu rosto, mas sim devolver frescor, definição e descanso aos seus próprios traços.'
    },
    {
      p: 'Quanto tempo dura o procedimento?',
      r: 'Procedimentos à base de ácido hialurônico (como lábios, olheiras e mento) têm durabilidade média de 10 a 18 meses, sendo absorvidos gradativamente pelo organismo. A toxina botulínica (Botox) dura entre 3 e 5 meses conforme o metabolismo individual.'
    },
    {
      p: 'O procedimento dói?',
      r: 'O procedimento é extremamente tolerável e confortável. Empregamos anestésicos tópicos hospitalares de alta eficácia e técnicas com microcânulas atraumáticas. Além disso, as seringas já contêm lidocaína na própria composição.'
    },
    {
      p: 'Qual o tempo de recuperação?',
      r: 'A recuperação é rápida. A grande maioria das pacientes retoma suas atividades de trabalho no mesmo dia ou no dia seguinte. Pode ocorrer leve edema ou pequenos hematomas transitórios nas primeiras 48h.'
    },
    {
      p: 'Posso voltar às atividades no mesmo dia?',
      r: 'Sim! Recomendamos apenas repouso de atividades físicas vigorosas, abstenção de ingestão alcoólica e evitar calor excessivo (sauna ou sol direto) pelas primeiras 24 a 48 horas.'
    },
    {
      p: 'Como sei qual procedimento é o ideal para mim?',
      r: 'Na consulta de avaliação no Instituto Áurea é realizada uma análise facial minuciosa dos terços faciais, mímica muscular e suporte ósseo. A Dra. Amanda desenha uma proposta individual, explicando o que trará maior benefício sem excessos.'
    },
    {
      p: 'Quem realiza o meu atendimento?',
      r: 'Exclusivamente a Dra. Amanda Hoff, em todas as etapas: desde a avaliação diagnóstica minuciosa até a aplicação e o retorno de acompanhamento após 15 a 30 dias.'
    },
    {
      p: 'Quais os cuidados antes e depois?',
      r: 'Antes: não consumir bebidas alcoólicas e evitar aspirina ou anti-inflamatórios 48h antes. Depois: não pressionar as áreas tratadas, usar filtro solar e seguir as recomendações de hidratação prescritas.'
    },
    {
      p: 'Posso parcelar o tratamento?',
      r: 'Sim, disponibilizamos condições facilitadas de pagamento com parcelamento em até 12 vezes nos cartões de crédito e condições personalizadas para planos de tratamento integrados.'
    }
  ],
  analytics: { ga4: '', pixel: '' }
};
