import Card from '../../Atoms/Card/index'
import { ProductProps } from './types'
import { Wrapper, ProductStyle } from './styles'

export default function Products({ products }: ProductProps) {
  return (
    <Wrapper>
      <ProductStyle>
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              text={product.text}
            />
          )
        })}
      </ProductStyle>
    </Wrapper>
  )
}
