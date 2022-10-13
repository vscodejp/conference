import { useEffect, useState } from 'react'

// https://github.com/cookpete/react-player/issues/1474#issuecomment-1179516802
export function usePlayerPatch() {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  return { hasWindow }
}
