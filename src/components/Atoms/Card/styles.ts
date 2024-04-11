import styled from 'styled-components'

export const CardStyled = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  max-width: 218px;
  min-height: 340px;
  max-height: 340px;
  margin: 20px 10px;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`

export const BoxImageProduct = styled.div`
  max-width: 218px;
  margin: 13px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BoxItem = styled.div`
  padding: 14px 14px 0 14px;
`
export const BoxTitleProduct = styled.div`
  max-width: 124px;
  margin: 13px 0;
`
export const TitleProduct = styled.p`
  font-size: 16px;
`
export const BoxPriceProduct = styled.div`
  background: black;
  color: white;
  border-radius: 8px;
  width: auto;
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 5px 10px;
`
export const BoxDescriptionProduct = styled.div`
  max-width: 124px;
  margin: 5px 0;
`
export const DescriptionProduct = styled.p`
  font-size: 10px;
`
export const TextProduct = styled.p`
  font-size: 14px;
`
export const BoxButton = styled.div``
