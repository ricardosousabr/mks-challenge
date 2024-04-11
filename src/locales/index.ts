export interface Ilocale {
  products: {
    image: string
    title: string
    description: string
    price: string
    text: string
  }[]
}

const locale: Ilocale = {
  products: [
    {
      image: '/img/apple-watch.png',
      title: 'Apple Watch Series 4 GPS',
      description: 'Redesigned from scratch and completely revised.',
      price: 'R$399',
      text: 'COMPRAR',
    },
    {
      image: '/img/jbl-speaker.png',
      title: 'JBL Speaker',
      description: 'Redesigned from scratch and completely revised.',
      price: 'R$199',
      text: 'COMPRAR',
    },
    {
      image: '/img/iphone-x.png',
      title: 'Apple iPhone X 128GB',
      description: 'Redesigned from scratch and completely revised.',
      price: 'R$899',
      text: 'COMPRAR',
    },
    {
      image: '/img/beats-headphones.png',
      title: 'Beats Headphones',
      description: 'Redesigned from scratch and completely revised.',
      price: 'R$459',
      text: 'COMPRAR',
    },
    {
      image: '/img/macbook-pro.png',
      title: 'Apple Macbook Pro',
      description: 'Redesigned from scratch and completely revised.',
      price: 'R$2.499',
      text: 'COMPRAR',
    },
    {
      image: '/img/ipad-pro.png',
      title: 'Apple iPad Pro 64GB',
      description: 'Redesigned from scratch and completely revised.',
      price: 'R$899',
      text: 'COMPRAR',
    },
    {
      image: '/img/homepod.png',
      title: 'Apple Homepod',
      description: 'Redesigned from scratch and completely revised.',
      price: 'R$399',
      text: 'COMPRAR',
    },
    {
      image: '/img/jlab-audio-wireless.png',
      title: 'JBuds Air Wireless',
      description: 'Redesigned from scratch and completely revised.',
      price: 'R$249',
      text: 'COMPRAR',
    },
  ],
}

export default locale
