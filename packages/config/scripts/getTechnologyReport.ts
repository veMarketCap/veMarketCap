import { projects, ProjectTechnologyChoice } from '../src'
import fs from 'fs'
import path from 'path'

const keys = [
  'stateCorrectness',
  'dataAvailability',
  'newCryptography',
  'massExit',
  'additionalPrivacy',
  'smartContracts',
  'operator',
  'forceTransactions',
] as const

let report = ''

for (const key of keys) {
  const uppercase = key.replace(/([A-Z])/g, ' $1').toUpperCase()
  report += `------- ${uppercase} -------\n\n`

  const options = new Map<string, string[]>()

  for (const [signature, names] of options.entries()) {
    const decoded: Omit<ProjectTechnologyChoice, 'references'> =
      JSON.parse(signature)
    report += `  [${names.join(', ')}]\n`
    report += `    ${decoded.name}\n\n`
    report += `    ${decoded.description}\n\n`
    if (decoded.risks.length > 0) {
      report += decoded.risks
        .map((x) => `    - ${x.category} ${x.text}`)
        .join('\n')
      report += '\n\n'
    }
  }

  fs.writeFileSync(path.join(__dirname, 'report.txt'), report)
}
