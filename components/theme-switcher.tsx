'use client'

import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const themes = [
   { value: 'light', icon: Sun },
   { value: 'dark', icon: Moon },
   // { value: 'system', icon: Monitor },
] as const

export function ThemeSwitcher() {
   const { theme, setTheme, resolvedTheme } = useTheme()
   const [open, setOpen] = useState(false)
   const [mounted, setMounted] = useState(false)
   const ref = useRef<HTMLDivElement>(null)

   useEffect(() => setMounted(true), [])

   useEffect(() => {
      function handleClick(e: MouseEvent) {
         if (ref.current && !ref.current.contains(e.target as Node)) {
            setOpen(false)
         }
      }
      document.addEventListener('mousedown', handleClick)
      return () => document.removeEventListener('mousedown', handleClick)
   }, [])

   if (!mounted) {
      return <div className="h-8 w-8 border border-border" aria-hidden="true" />
   }

   const ActiveIcon = resolvedTheme === 'dark' ? Moon : Sun

   return (
      <div className="relative" ref={ref}>
         <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            aria-label="Change theme"
            aria-expanded={open}
         >
            <ActiveIcon size={14} />
         </button>

         {open && (
            <div className="absolute right-0 top-full mt-2 border border-border bg-card shadow-lg z-50">
               {themes.map(({ value, icon: Icon }) => {
                  const isActive = theme === value
                  return (
                     <button
                        key={value}
                        onClick={() => {
                           setTheme(value)
                           setOpen(false)
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                           isActive
                              ? 'text-primary bg-secondary'
                              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                        }`}
                     >
                        <Icon size={14} />
                        <span className="font-mono text-xs capitalize">{value}</span>
                     </button>
                  )
               })}
            </div>
         )}
      </div>
   )
}
