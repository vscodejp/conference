import { css } from '@emotion/css'

export const wrapper = css`
  width: 50%;
  padding-bottom: 12px;
  img {
    width: 100px;
    height: 100px;
    font-family: 'UD新ゴ B', sans-serif;
    font-size: 0.8rem;
    border-radius: min(0.4vw, 5px);
    @media (max-width: 600px) {
      width: 60px;
      height: 60px;
    }
  }
  :last-child {
    padding-bottom: 0;
  }
`

export const link = css`
  display: flex;
  justify-content: center;
  max-width: 320px;
  margin: 8px;
  @media (max-width: 600px) {
    width: 320px;
  }
`

export const linkInfo = css`
  display: flex;
  align-items: center;
  width: 320px;
  margin-left: 12px;
  font-family: 'UD新ゴ B', sans-serif;
  font-size: 1.08rem;
  vertical-align: middle;
`
