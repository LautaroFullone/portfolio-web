'use client'

import { motion } from 'framer-motion'

interface BlurInProps {
   children: React.ReactNode
   className?: string
   delay?: number
   duration?: number
}

export function BlurIn({
   children,
   className = '',
   delay = 0,
   duration = 0.5,
}: BlurInProps) {
   return (
      <motion.div
         initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
         whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
         viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
         transition={{
            duration,
            delay,
            ease: 'easeOut',
         }}
         className={className}
      >
         {children}
      </motion.div>
   )
}
