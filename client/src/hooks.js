import { useEffect } from 'react'


export const useAppHeight = () => {
  useEffect(() => {
    const setHeight = () => { document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`) }
    window.addEventListener('resize', setHeight)
    setHeight()
    return () => window.removeEventListener('resize', setHeight)
  }, [])
}