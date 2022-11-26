import { useEffect, useState } from 'react'

export function useClientLoaded() {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  return { hasWindow }
}
