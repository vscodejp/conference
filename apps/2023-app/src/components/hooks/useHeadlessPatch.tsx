import { useEffect, useState } from 'react'

// https://github.com/tailwindlabs/headlessui/issues/470#issue-873819383
export function useHeadlessPatch() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return { mounted }
}
