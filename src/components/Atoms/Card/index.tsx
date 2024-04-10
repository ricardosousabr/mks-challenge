import { CardProps } from './types'

export default function Card({ image, title, description, text }: CardProps) {
  return (
    <>
      <div>
        <div>
          <img src="" alt="" />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}
