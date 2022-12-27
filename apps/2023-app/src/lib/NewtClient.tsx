import { createClient } from 'newt-client-js'
import { INewtSession, INewtSpeaker } from 'root/../../libs/shared/types'

const client = createClient({
  spaceUid: process.env.NEXT_PUBLIC_NEWT_SPACE_UID,
  token: process.env.NEXT_PUBLIC_NEWT_API_TOKEN,
  apiType: 'cdn',
})

export async function fetchCMS<T extends INewtSession | INewtSpeaker>(model) {
  const page = 1
  const limit = 10
  const skip = (page - 1) * limit

  const { items, total } = await client.getContents<T>({
    appUid: 'conf2023',
    modelUid: model,
    query: {
      depth: 2,
      limit: limit,
      skip: skip,
    },
  })
  return {
    data: items,
    total,
  }
}
