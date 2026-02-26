'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeSwitcher() {
   const { resolvedTheme, setTheme } = useTheme()
   const [mounted, setMounted] = useState(false)

   useEffect(() => setMounted(true), [])

   if (!mounted) {
      return <div className="h-9 w-9 border border-border" aria-hidden="true" />
   }

   const isDark = resolvedTheme === 'dark'

   return (
      <button
         onClick={() => setTheme(isDark ? 'light' : 'dark')}
         className="cursor-pointer h-9 w-9 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
         aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
         {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
   )
}
