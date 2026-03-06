import { useState, useEffect } from 'react'

export const useMobile = () => {
   const [isMobile, setIsMobile] = useState(true)

   useEffect(() => {
      function checkIfMobile() {
         setIsMobile(window.innerWidth < 640) // 640px is the breakpoint for mobile in Tailwind CSS
      }

      checkIfMobile()

      window.addEventListener('resize', checkIfMobile)

      return () => window.removeEventListener('resize', checkIfMobile)
   }, [])

   return isMobile
}
