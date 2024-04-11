import Products from '../src/components/Molecules/Products/index'
import locale from '../src/locales/index'

export default function Home() {
  const { products } = locale

  return (
    <div>
      <Products products={products} />
    </div>
  )
}
