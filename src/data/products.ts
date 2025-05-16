import { Product } from '../types';

const products: Product[] = [
  // Estimulantes de Energia
  {
    id: '1',
    name: 'Melzinho Árabe (Exotic Honey)',
    price: 87.00,
    originalPrice: 174.00,
    description: 'O Melzinho Árabe, também conhecido como Exotic Honey, é um produto natural à base de mel com adição de extratos de plantas tradicionalmente utilizadas no Oriente Médio para aumentar a energia e vitalidade. Consumir uma colher de chá (5g) diretamente ou diluído em água ou chá quente, preferencialmente pela manhã. Não exceder a dose recomendada de uma colher por dia.',
    features: [
      'Aumento da disposição física e mental',
      'Melhora da circulação sanguínea',
      'Estímulo da libido e desempenho sexual',
      'Efeito energizante natural e duradouro',
      'Contribui para o bem-estar geral'
    ],
    availability: 'inStock',
    category: 'estimulantes',
    images: [
      'https://images.weserv.nl/?url=https://miess.vteximg.com.br/arquivos/ids/228302-900-900/SF6056_1.jpg?v=637624824218230000&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 2, price: 87.00 },
      { quantity: 4, price: 127.00 },
      { quantity: 6, price: 177.00 },
      { quantity: 10, price: 257.00 },
      { quantity: 20, price: 367.00 }
    ]
  },
  {
    id: '2',
    name: 'Rivosex',
    price: 59.90,
    originalPrice: 119.80,
    description: 'Rivosex Gel é um estimulante tópico desenvolvido para aumentar a sensibilidade e proporcionar uma experiência mais intensa durante relações íntimas. Aplicar pequena quantidade nas áreas íntimas externas, massageando suavemente até completa absorção. Recomenda-se testar o produto em uma pequena área da pele antes do uso para verificar possíveis reações alérgicas.',
    features: [
      'Aumento da sensibilidade local',
      'Efeito de aquecimento e formigamento',
      'Intensificação do prazer',
      'Ação rápida e duradoura',
      'Fórmula hipoalergênica'
    ],
    availability: 'inStock',
    category: 'estimulantes',
    images: [
      'https://images.weserv.nl/?url=https://miess.vteximg.com.br/arquivos/ids/167217-900-900/SL059_1.jpg?v=637181026233800000&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 59.90 },
      { quantity: 2, price: 79.90 },
      { quantity: 3, price: 99.90 },
      { quantity: 5, price: 149.90 },
      { quantity: 10, price: 280.00 }
    ]
  },
  {
    id: '3',
    name: 'Gel Volumetrão',
    price: 87.00,
    originalPrice: 174.00,
    description: 'Gel Volumetrão é um produto desenvolvido para homens que buscam realçar temporariamente o volume e aparência dos órgãos genitais através de efeitos vasculares locais. Aplicar quantidade suficiente sobre a região genital masculina, massageando suavemente até completa absorção. Usar 15-30 minutos antes da atividade íntima. Lavar bem as mãos após a aplicação.',
    features: [
      'Efeito visual imediato',
      'Sensação de aquecimento local',
      'Aumento da circulação sanguínea',
      'Fórmula não gordurosa de rápida absorção',
      'Sem efeitos colaterais sistêmicos'
    ],
    availability: 'inStock',
    category: 'estimulantes',
    images: [
      'https://images.weserv.nl/?url=https://miess.vteximg.com.br/arquivos/ids/201334-900-900/SL096_1.jpg?v=637225537614470000&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 87.00 },
      { quantity: 2, price: 137.00 },
      { quantity: 3, price: 197.00 },
      { quantity: 5, price: 267.00 },
      { quantity: 12, price: 497.00 }
    ]
  },
  {
    id: '4',
    name: 'PIKASSO GEL',
    price: 97.00,
    originalPrice: 194.00,
    description: 'Pikasso Gel é um estimulante masculino de uso tópico que combina componentes naturais para potencializar o fluxo sanguíneo local e proporcionar sensações intensificadas durante a intimidade. Aplicar uma pequena quantidade nas regiões íntimas masculinas com movimentos circulares até completa absorção. Utilizar 20 minutos antes da relação para melhor resultado. Evitar contato com mucosas sensíveis e olhos.',
    features: [
      'Promoção da vasodilatação local',
      'Melhora da sensibilidade',
      'Prolongamento da sensação de prazer',
      'Fórmula à base de extratos naturais',
      'Compatível com preservativos'
    ],
    availability: 'inStock',
    category: 'estimulantes',
    images: [
      'https://images.weserv.nl/?url=https://miess.vteximg.com.br/arquivos/ids/271658-900-900/PB357_1.jpg?v=637957406956400000&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 97.00 },
      { quantity: 2, price: 137.00 },
      { quantity: 3, price: 177.00 },
      { quantity: 5, price: 237.00 }
    ]
  },
  // Saúde e Beleza
  {
    id: '5',
    name: 'Mounja Fit Black',
    price: 127.00,
    originalPrice: 254.00,
    description: 'Mounja Fit Black é um suplemento alimentar em cápsulas que combina ingredientes naturais como café verde, gengibre e pimenta preta, formulado para auxiliar no gerenciamento do peso corporal. Ingerir 2 cápsulas ao dia, preferencialmente 30 minutos antes das principais refeições, com um copo de água. Não exceder a dosagem recomendada. Consultar um médico antes de iniciar o uso, especialmente pessoas com condições pré-existentes.',
    features: [
      'Auxílio no controle do apetite',
      'Estímulo do metabolismo',
      'Aumento da termogênese',
      'Maior disposição física',
      'Rico em antioxidantes'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://i.pinimg.com/736x/e6/90/8a/e6908a935cbc561b8b859b3d0ebe9671.jpg&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 127.00 },
      { quantity: 2, price: 189.00 },
      { quantity: 3, price: 247.00 },
      { quantity: 5, price: 367.00 },
      { quantity: 10, price: 897.00 },
      { quantity: 20, price: 967.00 },
      { quantity: 50, price: 1967.00 }
    ]
  },
  {
    id: '6',
    name: 'Lipo Extremo',
    price: 147.00,
    originalPrice: 294.00,
    description: 'Lipo Extremo é um suplemento termogênico em cápsulas, composto por extratos vegetais que auxiliam no gerenciamento do peso, como guaraná, chá verde e café verde. Consumir 1 cápsula duas vezes ao dia, preferencialmente antes das refeições principais. Ingerir com bastante água. Recomenda-se não consumir após as 17h para evitar interferência no sono.',
    features: [
      'Potencialização da queima calórica',
      'Redução da sensação de fome',
      'Aumento da energia para atividades físicas',
      'Auxílio na eliminação de líquidos',
      'Aceleração do metabolismo basal'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://logzz-s3.s3.us-east-2.amazonaws.com/uploads/files/products/20250310-194040prongx7m.png&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 147.00 },
      { quantity: 3, price: 277.00 }
    ]
  },
  {
    id: '7',
    name: 'MenoGold',
    price: 197.00,
    originalPrice: 394.00,
    description: 'MenoGold é um suplemento vitamínico especialmente formulado para mulheres em fase de climatério e menopausa, contendo isoflavonas, cálcio e vitaminas do complexo B. Tomar 1 cápsula duas vezes ao dia, preferencialmente junto às refeições. Para melhores resultados, manter o uso contínuo por pelo menos 3 meses. Consultar um ginecologista antes de iniciar o uso.',
    features: [
      'Alívio dos sintomas do climatério e menopausa',
      'Redução das ondas de calor e suores noturnos',
      'Equilíbrio hormonal natural',
      'Fortalecimento ósseo',
      'Melhora do humor e qualidade do sono'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://menogold.com.br/wp-content/uploads/2024/12/Potes-1024x846-1.webp&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 197.00 },
      { quantity: 3, price: 297.00 },
      { quantity: 5, price: 397.00 }
    ]
  },
  {
    id: '8',
    name: 'LovelyGummy Cabelo Pele E unha',
    price: 149.99,
    originalPrice: 299.98,
    description: 'LovelyGummy é um suplemento alimentar em forma de gomas mastigáveis, rico em vitaminas, minerais e colágeno, desenvolvido para fortalecer cabelos, unhas e melhorar a aparência da pele. Consumir 2 gomas por dia, preferencialmente pela manhã. Mastigar bem antes de engolir. Para resultados visíveis, recomenda-se o uso contínuo por pelo menos 90 dias.',
    features: [
      'Fortalecimento dos fios capilares',
      'Redução da queda de cabelo',
      'Maior resistência e crescimento das unhas',
      'Melhora da elasticidade e hidratação da pele',
      'Combate aos sinais de envelhecimento precoce'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://i.pinimg.com/736x/06/72/d6/0672d645b6c90d8ba1222101b2f19c0f.jpg&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 149.99 },
      { quantity: 2, price: 199.99 },
      { quantity: 3, price: 289.99 },
      { quantity: 5, price: 399.99 }
    ]
  },
  {
    id: '9',
    name: 'TONICO MXD20 BARBUDOM',
    price: 97.00,
    originalPrice: 194.00,
    description: 'Tônico MXD20 Barbudom é um produto tópico desenvolvido especificamente para estimular o crescimento da barba, contendo minoxidil 20% e outros componentes que fortalecem os folículos capilares faciais. Aplicar 1ml do produto na região facial duas vezes ao dia (pela manhã e à noite), com a pele limpa e seca. Massagear suavemente até completa absorção. Lavar bem as mãos após a aplicação. Resultados visíveis após uso contínuo por 3-6 meses.',
    features: [
      'Estímulo ao crescimento de pelos faciais',
      'Preenchimento de falhas na barba',
      'Fortalecimento dos folículos existentes',
      'Aumento da espessura dos fios',
      'Nutrição da pele sob a barba'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://pagueaoreceber.com.br/wp-content/uploads/2025/05/TONICO-MXD20-BARBUDOM-30ML.png&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 97.00 },
      { quantity: 2, price: 167.00 },
      { quantity: 3, price: 237.00 },
      { quantity: 5, price: 349.00 },
      { quantity: 10, price: 497.00 },
      { quantity: 15, price: 747.00 },
      { quantity: 20, price: 897.00 }
    ]
  },
  {
    id: '10',
    name: 'Cresce +hair',
    price: 97.00,
    originalPrice: 194.00,
    description: 'Cresce +Hair é um complexo vitamínico em cápsulas formulado com biotina, zinco, vitaminas do complexo B e aminoácidos essenciais para promover o crescimento e fortalecimento dos cabelos. Ingerir 2 cápsulas por dia, preferencialmente com as refeições. Para melhores resultados, recomenda-se o uso contínuo por pelo menos 3 meses. Beber bastante água durante o tratamento para potencializar os efeitos.',
    features: [
      'Aceleração do crescimento capilar',
      'Redução da queda de cabelo',
      'Aumento da força e brilho dos fios',
      'Nutrição dos folículos capilares',
      'Melhora da saúde do couro cabeludo'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://i.pinimg.com/736x/ca/cd/7e/cacd7ea7469ef867db06d3c49342d029.jpg&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 97.00 },
      { quantity: 2, price: 127.00 },
      { quantity: 3, price: 197.00 },
      { quantity: 6, price: 397.00 },
      { quantity: 12, price: 627.00 }
    ]
  }
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id: string): Promise<Product> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Produto não encontrado'));
      }
    }, 500);
  });
};