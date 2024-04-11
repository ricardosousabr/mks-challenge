import { ButtonProps } from './types'
import { ButtonStyle } from './styles'

export default function Button({ children, type, onClick }: ButtonProps) {
  return (
    <>
      <ButtonStyle onClick={onClick} type={type}>
        {children}
      </ButtonStyle>
    </>
  )
}
