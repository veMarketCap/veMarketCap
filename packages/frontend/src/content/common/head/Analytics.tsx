import React from 'react'

export function Analytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }
  return (
    <script
      defer
      data-domain="https://vemarketcap.com/"
      src="https://plausible.io/js/plausible.js"
    />
  )
}
