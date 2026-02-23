import DecryptedText from '../ui/react-bits/DecryptedText'
import React from 'react'

interface SectionHeaderProps {
   label: string
   title: string
   description?: string
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, description }) => {
   return (
      <>
         <p className="font-mono text-sm tracking-widest text-primary uppercase mb-4">
            <span className="text-xs">{'<'}</span>

            <DecryptedText
               text={label}
               animateOn="view"
               speed={100}
               maxIterations={10}
               useOriginalCharsOnly
            />
            <span className="text-xs">{' />'}</span>
         </p>

         <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            <DecryptedText text={title} animateOn="view" speed={80} maxIterations={15} />
         </h2>

         <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            {description}
         </p>
      </>
   )
}

export default SectionHeader
