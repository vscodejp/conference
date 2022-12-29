import { css } from '@emotion/css'

export const wrapper = css`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
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
  margin: 8px;
`

export const linkInfo = css`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 12px;
  font-family: 'UD新ゴ B', sans-serif;
  font-size: 1.08rem;
  vertical-align: middle;
  min-width: 0;
`

export const linkInfoItem = css`
  max-width: 100%;
`

export const discriptionInfo = css`
  font-size: 0.7rem;
  line-height: 0.8rem;
  overflow-wrap: break-word;
  word-break: keep-all;
  width: 90%;
  max-width: 100%;
`
