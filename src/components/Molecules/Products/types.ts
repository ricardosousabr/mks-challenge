interface IProduct {
  image: string
  title: string
  price: string
  description: string
  text: string
}

export interface ProductProps {
  products: IProduct[]
}
