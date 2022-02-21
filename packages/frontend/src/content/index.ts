import l2Data from '@vemarketcap/backend'
import { projects } from '@vemarketcap/config'

import { createApi } from './api'
import { renderPages } from './pages'

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

async function main() {
  createApi(projects, l2Data)
  await renderPages(projects, l2Data)
}
