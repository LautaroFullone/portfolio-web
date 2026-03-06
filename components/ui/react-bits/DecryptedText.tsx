'use client'

import { useEffect, useRef } from 'react'

interface DecryptedTextProps {
   text: string
   speed?: number
   maxIterations?: number
   useOriginalCharsOnly?: boolean
   characters?: string
   className?: string
   encryptedClassName?: string
   parentClassName?: string
   animateOn?: 'view' | 'hover' | 'both'
}

export default function DecryptedText({
   text,
   speed = 50,
   maxIterations = 10,
   useOriginalCharsOnly = false,
   characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
   className = '',
   encryptedClassName = '',
   parentClassName = '',
   animateOn = 'hover',
}: DecryptedTextProps) {
   const containerRef = useRef<HTMLSpanElement>(null) // maneja hover + observer
   const textRef = useRef<HTMLSpanElement>(null) // mutado directamente
   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
   const hasAnimatedRef = useRef(false) // ref, no state — no dispara re-render

   useEffect(() => {
      const container = containerRef.current
      const textEl = textRef.current
      if (!container || !textEl) return

      // En mobile (touch devices): sin scramble — fade-in CSS puro (GPU, cero JS thread)
      const isTouchDevice = window.matchMedia('(hover: none)').matches
      const prefersReducedMotion = window.matchMedia(
         '(prefers-reduced-motion: reduce)'
      ).matches

      if (isTouchDevice || prefersReducedMotion) {
         textEl.style.opacity = '0'
         textEl.textContent = text
         if (className) textEl.className = className

         const obs = new IntersectionObserver(
            ([entry]) => {
               if (entry.isIntersecting) {
                  textEl.style.transition = 'opacity 0.5s ease'
                  textEl.style.opacity = '1'
                  obs.disconnect()
               }
            },
            { threshold: 0.2 }
         )
         obs.observe(container)
         return () => obs.disconnect()
      }

      // Chars disponibles — calculados una sola vez al montar
      const availableChars = useOriginalCharsOnly
         ? Array.from(new Set(text.split(''))).filter((c) => c !== ' ')
         : characters.split('')

      // Genera un carácter random de scramble para la posición i
      const randomChar = () =>
         availableChars[Math.floor(Math.random() * availableChars.length)]

      // Genera el texto scrambleado completo en una sola pasada
      const scrambledText = () =>
         text
            .split('')
            .map((char) => (char === ' ' ? ' ' : randomChar()))
            .join('')

      /** Lanza la animación de scramble. Sin setState, sin re-renders. */
      const play = () => {
         if (intervalRef.current) clearInterval(intervalRef.current)

         let iteration = 0

         // Aplicar clase "encriptada" — mutación directa
         if (encryptedClassName) textEl.className = encryptedClassName

         intervalRef.current = setInterval(() => {
            iteration++

            if (iteration >= maxIterations) {
               // Fin del scramble — restaurar texto real
               clearInterval(intervalRef.current!)
               intervalRef.current = null
               textEl.textContent = text
               textEl.className = className
            } else {
               // Scramble frame — mutación directa, React no se entera
               textEl.textContent = scrambledText()
            }
         }, speed)
      }

      /** Cancela la animación y restaura el texto original. */
      const reset = () => {
         if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
         }
         textEl.textContent = text
         textEl.className = className
      }

      // ── Hover ────────────────────────────────────────────────────────────────
      if (animateOn === 'hover' || animateOn === 'both') {
         container.addEventListener('mouseenter', play)
         container.addEventListener('mouseleave', reset)
      }

      // ── IntersectionObserver ─────────────────────────────────────────────────
      let observer: IntersectionObserver | undefined
      if (animateOn === 'view' || animateOn === 'both') {
         observer = new IntersectionObserver(
            (entries) => {
               for (const entry of entries) {
                  if (entry.isIntersecting && !hasAnimatedRef.current) {
                     hasAnimatedRef.current = true
                     play()
                     observer!.disconnect() // solo dispara una vez
                  }
               }
            },
            { threshold: 0.2 }
         )
         observer.observe(container)
      }

      // ── Cleanup ──────────────────────────────────────────────────────────────
      return () => {
         if (intervalRef.current) clearInterval(intervalRef.current)
         observer?.disconnect()
         container.removeEventListener('mouseenter', play)
         container.removeEventListener('mouseleave', reset)
      }
      // El array de dependencias incluye solo valores que no cambian en runtime.
      // Si text cambia (i18n), el efecto se re-ejecuta limpiando el timer anterior.
   }, [
      text,
      speed,
      maxIterations,
      characters,
      className,
      encryptedClassName,
      animateOn,
      useOriginalCharsOnly,
   ])

   return (
      <span
         ref={containerRef}
         className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      >
         <span className="sr-only">{text}</span>

         {/*
            React renderiza este span UNA SOLA VEZ con el texto real.
            Después de montar, solo el setInterval del useEffect lo toca.
            className y textContent se mutan directamente vía textRef.
         */}
         <span aria-hidden="true" ref={textRef} className={className}>
            {text}
         </span>
      </span>
   )
}
