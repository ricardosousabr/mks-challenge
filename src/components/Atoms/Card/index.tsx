import { CardProps } from './types'
import {
  CardStyled,
  DescriptionProduct,
  BoxTitleProduct,
  TitleProduct,
  TextProduct,
  BoxImageProduct,
  BoxButton,
  BoxItem,
  BoxPriceProduct,
  BoxDescriptionProduct,
} from './styles'
import Button from '../Button'

export default function Card({
  image,
  title,
  description,
  price,
  text,
}: CardProps) {
  return (
    <>
      <CardStyled>
        <BoxItem>
          <BoxImageProduct>
            <img src={image} alt="" />
          </BoxImageProduct>
          <BoxTitleProduct>
            <TitleProduct>{title}</TitleProduct>
          </BoxTitleProduct>
          <BoxPriceProduct>
            <p>{price}</p>
          </BoxPriceProduct>
          <BoxDescriptionProduct>
            <DescriptionProduct>{description}</DescriptionProduct>
          </BoxDescriptionProduct>
        </BoxItem>
        <BoxButton>
          <Button>
            <TextProduct>{text}</TextProduct>
          </Button>
        </BoxButton>
      </CardStyled>
    </>
  )
}
