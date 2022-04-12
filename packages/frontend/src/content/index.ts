import l2Data from '@vemarketcap/backend'
import { projects } from '@vemarketcap/config'

import { createApi } from './api'
import { renderPages } from './pages'

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

async function main() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  createApi(projects, l2Data)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await renderPages(projects, l2Data)
}
