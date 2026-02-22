import DecryptedText from '../ui/react-bits/DecryptedText'
import React from 'react'

interface SectionHeaderProps {
   label: string
   title: string
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title }) => {
   return (
      <>
         <p className="font-mono text-sm tracking-widest text-primary uppercase mb-4">
            <DecryptedText
               text={label}
               animateOn="view"
               speed={80}
               maxIterations={15}
               useOriginalCharsOnly
            />
         </p>

         <h2 className="font-sans text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            <DecryptedText text={title} animateOn="view" speed={100} maxIterations={25} />
         </h2>
      </>
   )
}

export default SectionHeader
