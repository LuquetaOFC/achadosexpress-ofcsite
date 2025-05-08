import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'saude-beleza',
    name: 'Saúde e Beleza',
    description: 'Produtos premium para cuidar da sua saúde e realçar sua beleza natural',
    image: 'https://i.pinimg.com/736x/2c/f2/62/2cf262a72a9b61cf054715e39d2bd1b1.jpg'
  },
  {
    id: 'dia-a-dia',
    name: 'Achadinhos',
    description: 'Soluções inovadoras que simplificam e transformam seu dia a dia',
    image: 'https://i.pinimg.com/736x/22/c7/13/22c7130e43375ad4126fa945c234c20a.jpg'
  },
  {
    id: 'estimulantes',
    name: 'Estimulantes',
    description: 'Produtos especializados para potencializar sua energia e vitalidade',
    image: 'https://i.pinimg.com/736x/6b/fd/51/6bfd5131eddb4260a8dafedc09895673.jpg'
  }
];

export const products: Product[] = [
  // Saúde e Beleza
  {
    id: 'mounja-fit-black',
    name: 'Mounja Fit Black',
    price: 127.00,
    originalPrice: 189.00,
    description: 'O Mounja Fit Black é um suplemento revolucionário para quem busca emagrecer de forma saudável e eficaz. Formulado com ingredientes naturais cuidadosamente selecionados, auxilia na queima de gordura, reduz o apetite e acelera o metabolismo. Ideal para complementar sua dieta equilibrada e exercícios físicos, proporcionando resultados visíveis em poucas semanas. Seu diferencial está na composição premium que garante eficácia sem efeitos colaterais indesejados. Transforme seu corpo e recupere sua autoconfiança com Mounja Fit Black.',
    images: [
      'https://i.pinimg.com/736x/47/19/21/471921d093edb3dc0eb1f949148672e1.jpg'
    ],
    category: 'saude-beleza',
    rating: 4.8,
    numReviews: 124,
    stockCount: 50,
    details: 'Mounja Fit Black é um suplemento revolucionário que combina extratos naturais cientificamente comprovados para potencializar o emagrecimento. Sua fórmula exclusiva atua em múltiplas frentes: acelera o metabolismo, reduz a absorção de gorduras e carboidratos, e promove a sensação de saciedade. Desenvolvido por especialistas em nutrição, é seguro e eficaz para homens e mulheres.',
    usage: 'Para resultados otimizados:\n- Tomar 2 cápsulas 30 minutos antes do café da manhã\n- Beber no mínimo 2 litros de água por dia\n- Manter uma alimentação equilibrada\n- Praticar atividades físicas regularmente\n- Evitar consumo após as 18h para não interferir no sono',
    benefits: [
      'Aceleração do metabolismo e queima de gordura localizada',
      'Redução do apetite e controle da ansiedade alimentar',
      'Aumento significativo da energia e disposição física',
      'Melhora do funcionamento intestinal',
      'Redução da retenção de líquidos',
      'Resultados visíveis em 15-30 dias de uso contínuo'
    ],
    variants: [
      { quantity: 1, price: 127.00, link: 'https://entrega.logzz.com.br/pay/memeq6yxw/ivmeq-1-unidade-127' },
      { quantity: 2, price: 189.00, link: 'https://entrega.logzz.com.br/pay/memeq6yxw/zgaio-compra-1-leve-2-por-189' },
      { quantity: 3, price: 247.00, link: 'https://entrega.logzz.com.br/pay/memeq6yxw/3-unidade-247' },
      { quantity: 5, price: 367.00, link: 'https://entrega.logzz.com.br/pay/memeq6yxw/jbmrl-' },
      { quantity: 10, price: 897.00, link: 'https://entrega.logzz.com.br/pay/memeq6yxw/10-unidade-897' },
      { quantity: 20, price: 967.00, link: 'https://entrega.logzz.com.br/pay/memeq6yxw/compra-15-leve-2o-por-967' },
      { quantity: 50, price: 1967.00, link: 'https://entrega.logzz.com.br/pay/memeq6yxw/pague-40-leve-50-no-atacado-1967' }
    ]
  },
  {
    id: 'lipo-extremo',
    name: 'Lipo Extremo',
    price: 147.00,
    originalPrice: 277.00,
    description: 'Lipo Extremo é a solução ideal para quem busca resultados rápidos e duradouros no emagrecimento. Desenvolvido com tecnologia avançada e ingredientes de alta potência, este suplemento age diretamente nas células de gordura, promovendo sua eliminação natural. Além de auxiliar na redução de medidas, contribui para o aumento da energia diária e melhora do condicionamento físico. Clinicamente testado, o Lipo Extremo é seu aliado perfeito para conquistar o corpo dos sonhos com saúde e bem-estar.',
    images: [
      'https://i.pinimg.com/736x/08/80/38/088038c5c02a00e77bde6dce0f92aae2.jpg'
    ],
    category: 'saude-beleza',
    rating: 4.6,
    numReviews: 98,
    stockCount: 35,
    details: 'Lipo Extremo é um termogênico revolucionário que combina ingredientes naturais de alta potência para maximizar a queima de gordura. Sua fórmula exclusiva atua 24 horas por dia, acelerando o metabolismo mesmo durante o repouso. Desenvolvido por especialistas em biotecnologia, oferece resultados comprovados cientificamente.',
    usage: 'Para máxima eficácia:\n- Tomar 1 cápsula 30 minutos antes do café da manhã\n- Tomar 1 cápsula 30 minutos antes do almoço\n- Manter intervalo mínimo de 6 horas entre as doses\n- Consumir ao menos 3 litros de água por dia\n- Não tomar após as 17h para não prejudicar o sono\n- Combinar com exercícios físicos regulares',
    benefits: [
      'Queima de gordura acelerada mesmo em repouso',
      'Supressão do apetite por até 8 horas',
      'Aumento significativo da energia e disposição',
      'Melhora do condicionamento físico',
      'Preservação da massa muscular durante o emagrecimento',
      'Resultados visíveis a partir da primeira semana de uso'
    ],
    variants: [
      { quantity: 1, price: 147.00, link: 'https://entrega.logzz.com.br/pay/mempy4oe0/lipoextremo1pote147' },
      { quantity: 3, price: 277.00, link: 'https://entrega.logzz.com.br/pay/mempy4oe0/xmnru-lipoextremo3potes277' }
    ]
  },
  {
    id: 'menogold',
    name: 'MenoGold',
    price: 197.00,
    originalPrice: 297.00,
    description: 'MenoGold é um suplemento especialmente formulado para mulheres na fase da menopausa e perimenopausa. Com uma combinação exclusiva de fitoestrogênios, vitaminas e minerais essenciais, ajuda a reduzir os sintomas incômodos como ondas de calor, alterações de humor e insônia. Sua fórmula balanceada também contribui para a saúde óssea e cardiovascular, proporcionando bem-estar integral nesta importante fase da vida. Retome o controle do seu corpo e viva esta transição com qualidade de vida e vitalidade.',
    images: [
      'https://i.pinimg.com/736x/82/1f/c1/821fc1b1895e220e56b138879edfa497.jpg'
    ],
    category: 'saude-beleza',
    rating: 4.9,
    numReviews: 87,
    stockCount: 28,
    details: 'MenoGold é um suplemento inovador que combina fitoestrogênios, vitaminas e minerais essenciais para equilibrar os hormônios durante a menopausa. Sua fórmula exclusiva foi desenvolvida por ginecologistas e endocrinologistas para proporcionar alívio efetivo dos sintomas mais incômodos desta fase.',
    usage: 'Para resultados ideais:\n- Tomar 1 cápsula pela manhã e 1 cápsula à noite\n- Ingerir com água em temperatura ambiente\n- Manter uso contínuo por pelo menos 3 meses\n- Pode ser tomado com ou sem alimentos\n- Armazenar em local fresco e seco\n- Consultar médico em caso de uso de outros medicamentos',
    benefits: [
      'Redução significativa das ondas de calor e suores noturnos',
      'Melhora expressiva da qualidade do sono',
      'Equilíbrio hormonal natural e duradouro',
      'Aumento da disposição física e mental',
      'Fortalecimento ósseo e prevenção da osteoporose',
      'Melhora do humor e redução da irritabilidade'
    ],
    variants: [
      { quantity: 1, price: 197.00, link: 'https://entrega.logzz.com.br/pay/mem4867d6/tratamento-1-meses---1-potes' },
      { quantity: 3, price: 297.00, link: 'https://entrega.logzz.com.br/pay/mem4867d6/tratamento-3-meses---3-potes' },
      { quantity: 5, price: 397.00, link: 'https://entrega.logzz.com.br/pay/mem4867d6/tratamento-5-meses---5-potes' }
    ]
  },
  {
    id: 'lovely-gummy',
    name: 'LovelyGummy Cabelo Pele E Unha',
    price: 149.99,
    originalPrice: 199.99,
    description: 'LovelyGummy é a deliciosa solução em forma de goma para a beleza completa. Rica em biotina, colágeno, vitaminas e nutrientes essenciais, esta goma trabalha de dentro para fora, fortalecendo cabelos, melhorando a elasticidade da pele e fortalecendo as unhas. Com sabor irresistível e fácil de consumir, torna a rotina de beleza muito mais prazerosa. Em apenas algumas semanas, você notará cabelos mais brilhantes, pele mais radiante e unhas mais fortes. Beleza completa nunca foi tão fácil e saborosa!',
    images: [
      'https://i.pinimg.com/736x/06/72/d6/0672d645b6c90d8ba1222101b2f19c0f.jpg'
    ],
    category: 'saude-beleza',
    rating: 4.7,
    numReviews: 112,
    stockCount: 45,
    details: 'LovelyGummy revoluciona o conceito de suplementação de colágeno com sua fórmula exclusiva que combina colágeno hidrolisado de alta biodisponibilidade, biotina, zinco, vitamina C e ácido hialurônico. Desenvolvida por especialistas em dermatologia e nutrição, proporciona resultados visíveis na beleza dos cabelos, pele e unhas.',
    usage: 'Para máxima eficácia:\n- Consumir 2 gomas por dia\n- Pode ser consumido a qualquer hora\n- Mastigar bem antes de engolir\n- Manter uso contínuo por pelo menos 90 dias\n- Armazenar em local fresco e seco\n- Não exceder a quantidade recomendada',
    benefits: [
      'Fortalecimento e crescimento acelerado dos cabelos',
      'Redução significativa de rugas e linhas de expressão',
      'Aumento da elasticidade e hidratação da pele',
      'Fortalecimento e crescimento acelerado das unhas',
      'Redução da queda capilar em até 80%',
      'Resultados visíveis a partir de 30 dias de uso'
    ],
    variants: [
      { quantity: 1, price: 149.99, link: 'https://entrega.logzz.com.br/pay/memmgoeyv/lovely-gummy-desconto' },
      { quantity: 2, price: 199.99, link: 'https://entrega.logzz.com.br/pay/memmgoeyv/2-pote' },
      { quantity: 3, price: 289.99, link: 'https://entrega.logzz.com.br/pay/memmgoeyv/lovely-gummy-3-pote' },
      { quantity: 5, price: 399.99, link: 'https://entrega.logzz.com.br/pay/memmgoeyv/lovely-gummy-5-pote-promocional' }
    ]
  },
  {
    id: 'tonico-mxd20',
    name: 'Tônico MXD20 Barbudom',
    price: 97.00,
    originalPrice: 167.00,
    description: 'O Tônico MXD20 Barbudom é a solução definitiva para homens que desejam uma barba mais encorpada, forte e bem-definida. Sua fórmula exclusiva contém minerais, vitaminas e ativos que estimulam os folículos capilares, acelerando o crescimento e preenchendo falhas. De fácil aplicação, o produto é rapidamente absorvido sem deixar resíduos oleosos. Em poucos dias de uso contínuo, você perceberá uma barba visivelmente mais densa e saudável. Conquiste a barba dos seus sonhos com MXD20 Barbudom e destaque-se com um visual masculino impecável.',
    images: [
      'https://i.pinimg.com/736x/76/a5/58/76a5580163d79262e73d83bad783de30.jpg'
    ],
    category: 'saude-beleza',
    rating: 4.8,
    numReviews: 156,
    stockCount: 60,
    details: 'O Tônico MXD20 Barbudom é resultado de anos de pesquisa em tricologia e dermatologia. Sua fórmula exclusiva combina minoxidil 20% com extratos naturais que potencializam o crescimento dos fios e estimulam os folículos capilares dormentes, proporcionando uma barba mais cheia e encorpada.',
    usage: 'Para resultados otimizados:\n- Limpar bem a área antes da aplicação\n- Aplicar 1ml na área da barba pela manhã e à noite\n- Massagear suavemente até completa absorção\n- Manter uso contínuo por pelo menos 3 meses\n- Evitar aplicar próximo aos olhos e boca\n- Lavar as mãos após a aplicação',
    benefits: [
      'Crescimento acelerado da barba em áreas falhas',
      'Fortalecimento e espessamento dos fios existentes',
      'Ativação de folículos capilares dormentes',
      'Barba visivelmente mais cheia e encorpada',
      'Redução da queda dos fios',
      'Resultados visíveis a partir de 15 dias de uso'
    ],
    variants: [
      { quantity: 1, price: 97.00, link: 'https://entrega.logzz.com.br/pay/memokq47l/oferta-de-remaketing' },
      { quantity: 2, price: 167.00, link: 'https://entrega.logzz.com.br/pay/memokq47l/avftt-oferta-2' },
      { quantity: 3, price: 237.00, link: 'https://entrega.logzz.com.br/pay/memokq47l/3-unidades-mxd-20-de-pureza' },
      { quantity: 5, price: 349.00, link: 'https://entrega.logzz.com.br/pay/memokq47l/05-atacado' },
      { quantity: 10, price: 497.00, link: 'https://entrega.logzz.com.br/pay/memokq47l/10-atacado' },
      { quantity: 15, price: 747.00, link: 'https://entrega.logzz.com.br/pay/memokq47l/15-atacado' },
      { quantity: 20, price: 897.00, link: 'https://entrega.logzz.com.br/pay/memokq47l/20-atacado' }
    ]
  },
  {
    id: 'cresce-hair',
    name: 'Cresce +Hair',
    price: 97.00,
    originalPrice: 127.00,
    description: 'Cresce +Hair é o tratamento capilar avançado para quem sofre com queda de cabelo e deseja um crescimento mais rápido e saudável. Desenvolvido com tecnologia tricológica de ponta, contém ativos que fortalecem o folículo capilar desde a raiz, estimulando o crescimento e reduzindo significativamente a quebra. Sua fórmula potente age nos principais fatores que causam a queda capilar, como estresse oxidativo e desequilíbrios hormonais. Restaure a vitalidade, volume e brilho dos seus cabelos com Cresce +Hair e sinta-se confiante novamente.',
    images: [
      'https://i.pinimg.com/736x/ca/cd/7e/cacd7ea7469ef867db06d3c49342d029.jpg'
    ],
    category: 'saude-beleza',
    rating: 4.7,
    numReviews: 143,
    stockCount: 55,
    details: 'Cresce +Hair é um suplemento inovador que combina biotina de alta absorção, colágeno hidrolisado, vitaminas do complexo B e minerais essenciais para o crescimento capilar. Sua fórmula exclusiva foi desenvolvida por tricologistas e dermatologistas para atuar desde a raiz, fortalecendo os folículos e estimulando o crescimento saudável dos fios.',
    usage: 'Para máxima eficácia:\n- Tomar 2 cápsulas por dia após as refeições principais\n- Manter uso contínuo por pelo menos 90 dias\n- Beber bastante água ao longo do dia\n- Pode ser associado a outros suplementos vitamínicos\n- Armazenar em local fresco e seco\n- Não exceder a dosagem recomendada',
    benefits: [
      'Crescimento acelerado dos cabelos em até 3x',
      'Fortalecimento dos fios desde a raiz',
      'Redução significativa da queda capilar',
      'Aumento da densidade e volume dos cabelos',
      'Melhora na textura e brilho dos fios',
      'Nutrição profunda do couro cabeludo'
    ],
    variants: [
      { quantity: 1, price: 97.00, link: 'https://entrega.logzz.com.br/pay/mem2pqem3/1-pote-9700---remarketing' },
      { quantity: 2, price: 127.00, link: 'https://entrega.logzz.com.br/pay/mem2pqem3/leve-2-pague-1---127-remarketing' },
      { quantity: 3, price: 197.00, link: 'https://entrega.logzz.com.br/pay/mem2pqem3/3-potes---19700-remarketing' },
      { quantity: 6, price: 397.00, link: 'https://entrega.logzz.com.br/pay/mem2pqem3/6-potes--397-remarketing' },
      { quantity: 12, price: 627.00, link: 'https://entrega.logzz.com.br/pay/mem2pqem3/12-potes---62700-remarketing' }
    ]
  },
  
  // Achadinhos
  {
    id: 'esfregao-magico',
    name: 'Esfregão Mágico',
    price: 99.99,
    originalPrice: 169.99,
    description: 'O Esfregão Mágico 360° revoluciona a forma de limpar sua casa! Com design ergonômico e sistema giratório completo, alcança todos os cantos com facilidade e sem esforço. Seu mecanismo de torção integrado elimina a necessidade de torcer manualmente, mantendo suas mãos sempre secas. As microfibras de alta absorção removem até as sujeiras mais difíceis com eficiência superior. Leve, prático e durável, economiza seu tempo e esforço nas tarefas domésticas. Com o Esfregão Mágico 360°, sua casa ficará impecavelmente limpa em metade do tempo!',
    images: [
      'https://i.pinimg.com/736x/0f/53/56/0f5356c16b1f5e2293023e71e80f1275.jpg'
    ],
    category: 'dia-a-dia',
    rating: 4.8,
    numReviews: 156,
    stockCount: 60,
    details: 'O Esfregão Mágico revoluciona a forma de limpar sua casa com sua tecnologia de microfibra de última geração. Suas fibras ultrafinas, 100 vezes mais finas que um fio de cabelo, penetram nas microrranhuras das superfícies, removendo sujeira, gordura e bactérias com eficiência superior. O sistema giratório 360° permite alcançar todos os cantos com facilidade.',
    usage: 'Para limpeza eficiente:\n- Umedecer levemente o refil com água\n- Torcer para remover o excesso\n- Deslizar suavemente sobre a superfície\n- Lavar o refil após cada uso\n- Secar completamente antes de guardar\n- Substituir o refil a cada 3 meses ou quando necessário',
    benefits: [
      'Limpeza profunda sem produtos químicos',
      'Remove até 99,9% das bactérias usando apenas água',
      'Sistema giratório 360° para maior praticidade',
      'Economia significativa em produtos de limpeza',
      'Ideal para todos os tipos de piso e superfícies',
      'Durável e ecologicamente correto'
    ],
    variants: [
      { quantity: 1, price: 99.99, link: 'https://entrega.logzz.com.br/pay/memk7rdxm/qsnhw-1-unidade-esfregao-magico-360' },
      { quantity: 2, price: 169.99, link: 'https://entrega.logzz.com.br/pay/memk7rdxm/dmkvi-2-unidades-esfregao-magico-360' },
      { quantity: 3, price: 199.99, link: 'https://entrega.logzz.com.br/pay/memk7rdxm/pzyet-3-unidades-esfregao-magico-360' }
    ]
  },
  {
    id: 'protetor-colchao',
    name: 'Protetor Premium Colchão',
    price: 99.99,
    originalPrice: 179.99,
    description: 'O Protetor Premium para Colchão é o guardião perfeito para seu investimento em conforto. Confeccionado com material impermeável e respirável de alta qualidade, protege contra líquidos, ácaros, bactérias e poeira, prolongando significativamente a vida útil do seu colchão. Seu tecido macio e silencioso garante que o conforto do seu colchão seja preservado, sem ruídos incômodos durante o sono. Fácil de colocar e remover, é também simples de lavar na máquina. Durável e higiênico, proporciona noites de sono mais saudáveis e tranquilas para toda a família.',
    images: [
      'https://i.pinimg.com/736x/6a/cb/c7/6acbc78bed119152db11709874d16212.jpg'
    ],
    category: 'dia-a-dia',
    rating: 4.9,
    numReviews: 134,
    stockCount: 40,
    details: 'O Protetor Premium para Colchão utiliza tecnologia avançada de impermeabilização com membrana respirável que permite a passagem de ar enquanto bloqueia completamente líquidos e fluidos. Sua estrutura multicamadas oferece proteção total contra ácaros, bactérias e fungos, ideal para pessoas com alergias ou asma.',
    usage: 'Para proteção efetiva:\n- Lavar antes do primeiro uso\n- Instalar sobre o colchão antes dos lençóis\n- Ajustar bem nas extremidades\n- Lavar a cada 15-30 dias\n- Secar completamente antes de usar\n- Evitar uso de alvejantes',
    benefits: [
      '100% impermeável a líquidos e fluidos',
      'Tecnologia respirável que não esquenta',
      'Proteção completa contra ácaros e bactérias',
      'Ideal para pessoas com alergias ou asma',
      'Prolonga a vida útil do colchão',
      'Lavável em máquina e fácil de manter'
    ],
    variants: [
      { quantity: 1, price: 99.99, link: 'https://entrega.logzz.com.br/pay/memredexr/fhldl-remarketing' },
      { quantity: 2, price: 179.99, link: 'https://entrega.logzz.com.br/pay/memredexr/pzuah-protetordecama' },
      { quantity: 3, price: 229.99, link: 'https://entrega.logzz.com.br/pay/memredexr/atryx-oferta-3' }
    ]
  },
  {
    id: 'mini-mop',
    name: 'Mini Mop 3 em 1',
    price: 69.90,
    originalPrice: 139.90,
    description: 'O Mini Mop 3 em 1 é a solução compacta e versátil para limpeza completa. Este produto inovador combina vassoura, rodo e MOP em um único item, economizando espaço e facilitando o armazenamento. Perfeito para apartamentos, escritórios e espaços compactos, seu design ergonômico permite alcançar áreas difíceis como embaixo de móveis e cantos estreitos. As microfibras de alta qualidade capturam poeira, cabelos e sujeira com eficiência superior, deixando suas superfícies impecáveis. Prático e leve, o Mini Mop 3 em 1 é seu aliado indispensável para uma limpeza rápida e eficiente no dia a dia.',
    images: [
      'https://i.pinimg.com/736x/2d/34/e4/2d34e448009cb983db848161cb9ea790.jpg'
    ],
    category: 'dia-a-dia',
    rating: 4.7,
    numReviews: 98,
    stockCount: 75,
    details: 'O Mini Mop 3 em 1 é uma solução completa de limpeza que combina vassoura, rodo e mop em um único produto compacto. Seu design inovador permite limpar diferentes superfícies com eficiência superior, enquanto economiza espaço de armazenamento. Ideal para apartamentos, escritórios e espaços compactos.',
    usage: 'Instruções de uso:\n- Escolher o acessório adequado para cada superfície\n- Encaixar firmemente o refil desejado\n- Umedecer quando necessário\n- Limpar com movimentos suaves\n- Lavar os refis após o uso\n- Guardar em local seco e ventilado',
    benefits: [
      'Três funções essenciais em um único produto',
      'Design compacto que economiza espaço',
      'Ideal para diferentes tipos de superfície',
      'Fácil de usar e manter',
      'Refis laváveis e duráveis',
      'Perfeito para espaços pequenos'
    ],
    variants: [
      { quantity: 1, price: 69.90, link: 'https://entrega.logzz.com.br/pay/mem388z4d/cjkmn-preco-promocional' },
      { quantity: 2, price: 139.90, link: 'https://entrega.logzz.com.br/pay/mem388z4d/qmmbg-compre-1-leve-2' },
      { quantity: 5, price: 279.90, link: 'https://entrega.logzz.com.br/pay/mem388z4d/compre-2-leve-5' },
      { quantity: 10, price: 497.00, link: 'https://entrega.logzz.com.br/pay/mem388z4d/compre-3-leve-10' }
    ]
  },
  {
    id: 'hidroeco',
    name: 'Hidroeco',
    price: 127.90,
    originalPrice: 199.90,
    description: 'O Hidroeco é o revolucionário sistema que transforma a maneira como você economiza água em casa. Este dispositivo inteligente se adapta facilmente às suas torneiras e chuveiros, reduzindo o consumo de água em até 50% sem comprometer a pressão ou o conforto. Com tecnologia de aeração avançada, o fluxo permanece potente enquanto utiliza menos água. Fácil de instalar, sem necessidade de ferramentas especializadas, o Hidroeco começa a gerar economia imediatamente. Além de reduzir sua conta de água, contribui significativamente para a preservação dos recursos hídricos do planeta.',
    images: [
      'https://i.pinimg.com/736x/6e/06/ee/6e06ee46140efd3dc6a6f353eac89be6.jpg'
    ],
    category: 'dia-a-dia',
    rating: 4.8,
    numReviews: 87,
    stockCount: 45,
    details: 'Hidroeco utiliza tecnologia alemã de última geração para otimizar o consumo de água. Seu sistema patenteado de microbolhas incorpora ar ao fluxo de água, mantendo a mesma sensação de pressão enquanto reduz significativamente o consumo. Compatível com a maioria das torneiras e chuveiros do mercado.',
    usage: 'Instalação e uso:\n- Verificar compatibilidade com sua torneira/chuveiro\n- Seguir manual de instalação incluso\n- Limpar o filtro mensalmente\n- Substituir o núcleo a cada 12 meses\n- Manter pressão mínima de 3mca\n- Evitar impactos e quedas',
    benefits: [
      'Economia de até 70% no consumo de água',
      'Mantém a pressão e conforto do jato',
      'Instalação rápida e sem ferramentas',
      'Retorno do investimento em até 2 meses',
      'Contribui para a sustentabilidade',
      'Certificado pelo INMETRO'
    ],
    variants: [
      { quantity: 1, price: 127.90, link: 'https://entrega.logzz.com.br/pay/memx6k0p0/1-hidroeco---confira-o-valor' },
      { quantity: 2, price: 199.90, link: 'https://entrega.logzz.com.br/pay/memx6k0p0/bftuy-2-hidroeco---confira-o-valor' }
    ]
  },
  {
    id: 'garrafa-termica',
    name: 'Kit Garrafa 3 em 1',
    price: 79.99,
    originalPrice: 189.99,
    description: 'O Kit Garrafa 3 em 1 é o acessório perfeito para quem valoriza praticidade e versatilidade. Este produto inovador funciona como garrafa térmica, mantendo suas bebidas quentes ou frias por horas, como copo portátil para consumo imediato, e ainda possui um compartimento extra para armazenar alimentos, suplementos ou medicamentos. Fabricado com materiais de alta qualidade, livres de BPA, é resistente a impactos e totalmente à prova de vazamentos. Design elegante e moderno, disponível em diversas cores, é ideal para academia, trabalho, viagens ou uso diário. Hidrate-se com estilo e praticidade com o Kit Garrafa 3 em 1.',
    images: [
      'https://i.pinimg.com/736x/ee/46/01/ee460196c925af28313572e6eecb50cc.jpg'
    ],
    category: 'dia-a-dia',
    rating: 4.6,
    numReviews: 76,
    stockCount: 55,
    details: 'O Kit Garrafa 3 em 1 é fabricado em aço inox 304 de grau alimentício com tecnologia de isolamento a vácuo de dupla parede. Seu design versátil inclui três tampas intercambiáveis para diferentes usos: boca larga para bebidas com gelo, boca estreita para líquidos quentes e tampa esportiva para atividades físicas.',
    usage: 'Instruções de uso:\n- Lavar antes do primeiro uso\n- Escolher a tampa adequada para cada bebida\n- Pré-aquecer/resfriar para melhor desempenho\n- Lavar regularmente com escova específica\n- Não usar máquina de lavar\n- Evitar impactos e quedas',
    benefits: [
      'Mantém bebidas quentes por até 12 horas',
      'Conserva bebidas geladas por até 24 horas',
      'Sistema 3 em 1 com tampas intercambiáveis',
      'Material durável e livre de BPA',
      'Design moderno e ergonômico',
      'Ideal para todas as ocasiões'
    ],
    variants: [
      { quantity: 1, price: 79.99, link: 'https://entrega.logzz.com.br/pay/mempynlpw/rjizg-1-garrafa-termica' },
      { quantity: 2, price: 189.99, link: 'https://entrega.logzz.com.br/pay/mempynlpw/pvnmh-2-garrafas-termicas' },
      { quantity: 5, price: 239.99, link: 'https://entrega.logzz.com.br/pay/mempynlpw/cwdyh-3-garrafas-termicas' }
    ]
  },
  {
    id: 'depilador-feminino',
    name: 'Depilador Feminino 5 em 1',
    price: 89.99,
    originalPrice: 169.99,
    description: 'O Depilador Feminino 5 em 1 é o sistema completo de cuidados para a pele feminina. Este aparelho multifuncional oferece depilação suave e eficiente, esfoliação delicada, massagem relaxante, tratamento facial e remoção de pelos curtos em uma única solução. Com tecnologia de luz pulsada e cabeçotes intercambiáveis, adapta-se perfeitamente a diferentes áreas do corpo e tipos de pele. Seu design ergonômico permite alcançar facilmente todas as áreas, enquanto o sistema à prova d\'água possibilita uso durante o banho. Recarregável e portátil, é perfeito para uso em casa ou viagens. Experimente uma pele macia, lisa e saudável com o Depilador Feminino 5 em 1.',
    images: [
      'https://i.pinimg.com/736x/04/ce/15/04ce15157ae2ba43b52d7b72e545b2f3.jpg'
    ],
    category: 'dia-a-dia',
    rating: 4.7,
    numReviews: 123,
    stockCount: 65,
    details: 'O Depilador Feminino 5 em 1 utiliza tecnologia IPL (Luz Pulsada Intensa) combinada com cabeçotes específicos para cada área do corpo. Seu sistema inteligente ajusta automaticamente a intensidade de acordo com o tom de pele, garantindo uma depilação segura e eficaz. Inclui cabeçotes para rosto, axilas, virilha, pernas e braços.',
    usage: 'Para resultados ideais:\n- Limpar e secar a área antes do uso\n- Selecionar o cabeçote adequado\n- Ajustar a intensidade conforme necessário\n- Deslizar suavemente sobre a pele\n- Usar 1-2 vezes por semana\n- Limpar o aparelho após cada uso',
    benefits: [
      'Depilação eficiente e duradoura',
      '5 cabeçotes especializados inclusos',
      'Tecnologia IPL de última geração',
      'Uso sem fio com bateria de longa duração',
      'Sensor de tom de pele para maior segurança',
      'Resultados visíveis em 4 semanas'
    ],
    variants: [
      { quantity: 1, price: 89.99, link: 'https://entrega.logzz.com.br/pay/memzlq00v/1-unidade---depilador' },
      { quantity: 2, price: 169.99, link: 'https://entrega.logzz.com.br/pay/memzlq00v/vcgxv-depilador-2-unidades' },
      { quantity: 3, price: 199.99, link: 'https://entrega.logzz.com.br/pay/memzlq00v/ctukl-3-unidades-depilador' },
      { quantity: 5, price: 299.99, link: 'https://entrega.logzz.com.br/pay/memzlq00v/lqude-5-unidades-depilador' },
      { quantity: 10, price: 459.99, link: 'https://entrega.logzz.com.br/pay/memzlq00v/wxyrk-10-unidades-depilador' },
      { quantity: 20, price: 699.99, link: 'https://entrega.logzz.com.br/pay/memzlq00v/gqazk-20-unidades-depilador' }
    ]
  },
  
  // Estimulantes
  {
    id: 'melzinho-arabe',
    name: 'Melzinho Árabe (Exotic Honey)',
    price: 87.00,
    originalPrice: 127.00,
    description: 'O Melzinho Árabe Exotic Honey é um estimulante natural que eleva sua intimidade a outro nível. Derivado de tradições ancestrais do Oriente Médio, esta exclusiva combinação de mel puro e extratos naturais potencializa o desejo e intensifica o prazer. Com sabor levemente adocicado e textura sedosa, proporciona momentos inesquecíveis e sensações únicas. Aplicação simples e discreta, sem contraindicações e compatível com preservativos. Desperte novos sentidos e redescubra o prazer com Exotic Honey – o segredo milenar para uma vida íntima extraordinária.',
    images: [
      'https://i.pinimg.com/736x/b9/8f/53/b98f5339b19f70deb64a94805e68a0c9.jpg'
    ],
    category: 'estimulantes',
    rating: 4.9,
    numReviews: 245,
    stockCount: 100,
    details: 'O Melzinho Árabe (Exotic Honey) é um estimulante natural que combina ingredientes raros e preciosos da medicina tradicional árabe. Sua fórmula exclusiva inclui mel puro, geleia real, própolis e extratos herbais cuidadosamente selecionados para proporcionar uma experiência única e resultados extraordinários.',
    usage: 'Para resultados otimizados:\n- Consumir uma porção 30 minutos antes da relação\n- Deixar dissolver completamente na boca\n- Não exceder 2 porções em 24 horas\n- Manter em local fresco e seco\n- Agitar antes de usar\n- Consultar médico em caso de uso contínuo',
    benefits: [
      'Aumento significativo da libido e desejo',
      'Intensificação das sensações e do prazer',
      'Melhora da circulação sanguínea',
      'Aumento da energia e disposição',
      'Efeito duradouro por até 4 horas',
      'Fórmula 100% natural sem contraindicações'
    ],
    variants: [
      { quantity: 2, price: 87.00, link: 'https://entrega.logzz.com.br/pay/mem8d5ngk/rmkt-2-unidades---r87' },
      { quantity: 4, price: 127.00, link: 'https://entrega.logzz.com.br/pay/mem8d5ngk/4-unidades-r127' },
      { quantity: 6, price: 177.00, link: 'https://entrega.logzz.com.br/pay/mem8d5ngk/principal---6-unidades---r177' },
      { quantity: 10, price: 257.00, link: 'https://entrega.logzz.com.br/pay/mem8d5ngk/10-unidades---r257' },
      { quantity: 20, price: 367.00, link: 'https://entrega.logzz.com.br/pay/mem8d5ngk/20-unidades---r367' }
    ]
  },
  {
    id: 'rivosex',
    name: 'Rivosex',
    price: 59.90,
    originalPrice: 99.90,
    description: 'Rivosex é o suplemento revolucionário que potencializa naturalmente a performance e o prazer. Formulado com extratos vegetais cuidadosamente selecionados, aumenta a energia, resistência e sensibilidade, proporcionando experiências mais intensas e duradouras. Sua composição balanceada age harmonicamente no organismo, melhorando a circulação sanguínea e aumentando a libido de forma gradual e segura. Sem efeitos colaterais, Rivosex é o aliado perfeito para quem deseja aprimorar sua vida íntima com saúde e naturalidade. Redescubra o prazer e surpreenda seu parceiro(a) com resultados notáveis desde as primeiras doses.',
    images: [
      'https://i.pinimg.com/736x/50/24/06/502406a85ec8163cb1e673e3089ff5b9.jpg'
    ],
    category: 'estimulantes',
    rating: 4.8,
    numReviews: 189,
    stockCount: 80,
    details: 'Rivosex é um suplemento revolucionário desenvolvido por especialistas em urologia e nutrição esportiva. Sua fórmula exclusiva combina L-Arginina de alta biodisponibilidade, Tribulus Terrestris padronizado, Maca Peruana e outros ativos naturais que atuam sinergicamente para potencializar o desempenho masculino.',
    usage: 'Para máxima eficácia:\n- Tomar 1 cápsula 1 hora antes da relação\n- Ingerir com água em temperatura ambiente\n- Não exceder 1 cápsula por dia\n- Manter uso contínuo para melhores resultados\n- Evitar bebidas alcoólicas\n- Consultar médico antes de usar',
    benefits: [
      'Aumento significativo da resistência física',
      'Melhora expressiva da circulação sanguínea',
      'Ereções mais firmes e duradouras',
      'Aumento da libido e do desejo',
      'Maior disposição e energia',
      'Resultados desde a primeira dose'
    ],
    variants: [
      { quantity: 1, price: 59.90, link: 'https://entrega.logzz.com.br/pay/mem3m3206/1-rivosex-promo' },
      { quantity: 2, price: 79.90, link: 'https://entrega.logzz.com.br/pay/mem3m3206/2-rivosex-promo' },
      { quantity: 3, price: 99.90, link: 'https://entrega.logzz.com.br/pay/mem3m3206/3-rivosex-promo' },
      { quantity: 5, price: 149.90, link: 'https://entrega.logzz.com.br/pay/mem3m3206/4-1-rivosex-brinde-promo' },
      { quantity: 10, price: 280.00, link: 'https://entrega.logzz.com.br/pay/mem3m3206/8-2-rivosex-desc' }
    ]
  },
  {
    id: 'gel-volumetrao',
    name: 'Gel Volumetrão',
    price: 87.00,
    originalPrice: 137.00,
    description: 'O Gel Volumetrão é a solução inovadora para homens que buscam maximizar sua confiança e desempenho. Sua fórmula exclusiva, desenvolvida por especialistas, combina ingredientes naturais que promovem vasodilatação local, resultando em efeito visual imediato e sensações intensificadas. De fácil aplicação e rápida absorção, não deixa resíduos ou odores. Seguro para uso frequente e compatível com preservativos, proporciona resultados impressionantes sem efeitos colaterais. Redescubra sua masculinidade e surpreenda seu parceiro(a) com o Gel Volumetrão – a experiência que você sempre desejou.',
    images: [
      'https://i.pinimg.com/736x/ab/ce/64/abce6438e9747a0be0e0bc9315a12a6f.jpg'
    ],
    category: 'estimulantes',
    rating: 4.7,
    numReviews: 156,
    stockCount: 70,
    details: 'O Gel Volumetrão utiliza tecnologia VolumeMax de última geração que combina ativos naturais concentrados para resultados extraordinários. Sua fórmula exclusiva inclui extratos de Tribulus Terrestris, Ginkgo Biloba e outros componentes naturais que atuam sinergicamente para proporcionar resultados visíveis desde a primeira aplicação.',
    usage: 'Para resultados ideais:\n- Limpar bem a área antes da aplicação\n- Aplicar quantidade suficiente com massagem suave\n- Aguardar completa absorção\n- Usar 30 minutos antes da relação\n- Lavar as mãos após aplicação\n- Evitar contato com mucosas sensíveis',
    benefits: [
      'Aumento significativo do volume',
      'Resultados visíveis desde a primeira aplicação',
      'Efeito prolongado por até 4 horas',
      'Fórmula não oleosa de rápida absorção',
      'Sem efeitos colaterais',
      'Compatível com preservativos'
    ],
    variants: [
      { quantity: 1, price: 87.00, link: 'https://entrega.logzz.com.br/pay/memx037m0/jcjti-1-por-87' },
      { quantity: 2, price: 137.00, link: 'https://entrega.logzz.com.br/pay/memx037m0/2-por-137' },
      { quantity: 3, price: 197.00, link: 'https://entrega.logzz.com.br/pay/memx037m0/brsam-3-por-197' },
      { quantity: 5, price: 267.00, link: 'https://entrega.logzz.com.br/pay/memx037m0/ljkgp-5-por-257' },
      { quantity: 12, price: 497.00, link: 'https://entrega.logzz.com.br/pay/memx037m0/eyckx-12-por-497' }
    ]
  },
  {
    id: 'firepower',
    name: 'Firepower',
    price: 117.00,
    originalPrice: 147.00,
    description: 'Firepower é o suplemento de alta potência desenvolvido para homens que buscam performance superior. Sua fórmula avançada combina extratos herbais consagrados, vitaminas e minerais essenciais que atuam sinergicamente para aumentar a energia, resistência e vitalidade. Com resultados perceptíveis desde as primeiras doses, Firepower aprimora a circulação sanguínea, otimiza a produção hormonal natural e eleva o bem-estar geral. Produzido sob rigorosos padrões de qualidade, é a escolha ideal para quem deseja uma vida plena e vigorosa em qualquer idade. Desperte seu potencial máximo com Firepower e transforme cada momento em uma experiência extraordinária.',
    images: [
      'https://i.pinimg.com/736x/f4/5f/c4/f45fc450f3858b22b54745b90a697e82.jpg'
    ],
    category: 'estimulantes',
    rating: 4.8,
    numReviews: 134,
    stockCount: 60,
    details: 'Firepower é um suplemento energético avançado desenvolvido por especialistas em nutrição esportiva. Sua fórmula exclusiva combina cafeína anidra de alta pureza, taurina, vitaminas do complexo B e outros compostos bioativos que proporcionam energia sustentada e foco mental por até 8 horas.',
    usage: 'Para máxima eficácia:\n- Tomar 1 cápsula pela manhã em jejum\n- Aguardar 30 minutos para se alimentar\n- Não tomar após as 16h\n- Manter intervalo mínimo de 8h entre doses\n- Beber muita água durante o dia\n- Não exceder 2 cápsulas em 24h',
    benefits: [
      'Energia sustentada por até 8 horas',
      'Aumento significativo do foco mental',
      'Melhora do desempenho físico',
      'Zero crash ou efeito rebote',
      'Metabolismo acelerado',
      'Supressão natural do apetite'
    ],
    variants: [
      { quantity: 1, price: 117.00, link: 'https://entrega.logzz.com.br/pay/mem6245or/1-pote-117' },
      { quantity: 2, price: 147.00, link: 'https://entrega.logzz.com.br/pay/mem6245or/sypjk-pague-1-leve-2' },
      { quantity: 3, price: 197.00, link: 'https://entrega.logzz.com.br/pay/mem6245or/pague-1-leve-3' },
      { quantity: 5, price: 267.00, link: 'https://entrega.logzz.com.br/pay/mem6245or/5-potes-267' },
      { quantity: 8, price: 397.00, link: 'https://entrega.logzz.com.br/pay/mem6245or/pague-4-leve-8' }
    ]
  },
  {
    id: 'big-tora',
    name: 'Big Tora',
    price: 69.90,
    originalPrice: 179.90,
    description: 'BIG TORA é o revolucionário estimulante masculino em gotas que proporciona resultados imediatos e duradouros. Sua fórmula concentrada de rápida absorção atua diretamente na circulação, potencializando o desempenho e intensificando as sensações. Desenvolvido com ingredientes naturais selecionados, oferece máxima eficácia sem efeitos colaterais indesejados. Fácil de usar e discreto, basta algumas gotas para experimentar uma transformação completa na sua intimidade. Conquiste uma confiança inabalável e proporcione experiências inesquecíveis com BIG TORA – o segredo dos homens que não aceitam menos que o extraordinário.',
    images: [
      'https://i.pinimg.com/736x/94/19/2f/94192f89836cba83bdc02b883c71fddd.jpg'
    ],
    category: 'estimulantes',
    rating: 4.7,
    numReviews: 167,
    stockCount: 85,
    details: 'Big Tora em gotas é um estimulante natural concentrado que combina extratos de Catuaba, Marapuama, Ginseng e outros ativos naturais conhecidos por seus efeitos potencializadores. Sua fórmula líquida proporciona absorção superior e início de ação mais rápido comparado a cápsulas convencionais.',
    usage: 'Para resultados otimizados:\n- Diluir 20 gotas em água ou suco\n- Tomar 30 minutos antes da relação\n- Não exceder 30 gotas por dia\n- Agitar bem antes de usar\n- Manter em local fresco\n- Consultar médico em caso de uso contínuo',
    benefits: [
      'Ação rápida em até 30 minutos',
      'Absorção superior à de cápsulas',
      'Efeito prolongado por até 4 horas',
      'Fácil de usar e transportar',
      'Fórmula concentrada mais eficiente',
      '100% natural sem contraindicações'
    ],
    variants: [
      { quantity: 1, price: 69.90, link: 'https://entrega.logzz.com.br/pay/memlonkdk/jywdl-1-unidade-gotas' },
      { quantity: 3, price: 179.90, link: 'https://entrega.logzz.com.br/pay/memlonkdk/gexkp-3-unidades-gotas' },
      { quantity: 5, price: 239.90, link: 'https://entrega.logzz.com.br/pay/memlonkdk/atryx-5-unidades-gotas' },
      { quantity: 7, price: 279.90, link: 'https://entrega.logzz.com.br/pay/memlonkdk/hcczh-7-unidades-gotas' }
    ]
  },
  {
    id: 'pikasso-gel',
    name: 'Pikasso Gel',
    price: 97.00,
    originalPrice: 137.00,
    description: 'PIKASSO GEL é a obra-prima da intimidade masculina, criado para homens que valorizam excelência e resultados extraordinários. Sua fórmula exclusiva, inspirada em técnicas milenares orientais, combina ingredientes premium que promovem sensações intensas e prolongadas para ambos os parceiros. De textura leve e absorção rápida, não deixa resíduos ou pegajosidade. Dermatologicamente testado e hipoalergênico, é seguro para uso frequente e compatível com preservativos. Transforme cada encontro em uma experiência memorável com PIKASSO GEL – quando o prazer se torna arte.',
    images: [
      'https://i.pinimg.com/736x/78/18/0b/78180bad7bec29789b90ac73db344087.jpg'
    ],
    category: 'estimulantes',
    rating: 4.8,
    numReviews: 145,
    stockCount: 90,
    details: 'Pikasso Gel utiliza tecnologia SensMax de última geração que combina L-Arginina de alta biodisponibilidade com extratos naturais selecionados. Sua fórmula exclusiva proporciona vasodilatação localizada e aumento da sensibilidade, resultando em experiências mais intensas e prazerosas.',
    usage: 'Para resultados ideais:\n- Limpar bem a área antes da aplicação\n- Aplicar quantidade suficiente com massagem suave\n- Aguardar completa absorção\n- Usar 30 minutos antes da relação\n- Lavar as mãos após aplicação\n- Evitar contato com mucosas sensíveis',
    benefits: [
      'Aumento significativo do volume',
      'Resultados visíveis desde a primeira aplicação',
      'Efeito prolongado por até 4 horas',
      'Fórmula não oleosa de rápida absorção',
      'Sem efeitos colaterais',
      'Compatível com preservativos'
    ],
    variants: [
      { quantity: 1, price: 97.00, link: 'https://entrega.logzz.com.br/pay/mem8drem0/eucks-1-gel' },
      { quantity: 2, price: 137.00, link: 'https://entrega.logzz.com.br/pay/mem8drem0/2-gel-desconto' },
      { quantity: 3, price: 197.00, link: 'https://entrega.logzz.com.br/pay/mem8drem0/brsam-3-por-197' },
      { quantity: 5, price: 267.00, link: 'https://entrega.logzz.com.br/pay/mem8drem0/ljkgp-5-por-257' },
      { quantity: 12, price: 497.00, link: 'https://entrega.logzz.com.br/pay/mem8drem0/eyckx-12-por-497' }
    ]
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products
    .filter(product => product.originalPrice && product.originalPrice > product.price)
    .slice(0, 8);
};

export const getBestSellers = (): Product[] => {
  return [...products]
    .sort((a, b) => b.numReviews - a.numReviews)
    .slice(0, 8);
};