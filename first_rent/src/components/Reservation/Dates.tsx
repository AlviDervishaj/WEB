import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  error: string,
  children: ReactNode
}
export function Dates({ children, error }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, translateX: -300 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{
        type: "spring",
        duration: 0.6,
      }}
    >
      <div className="w-full h-fit flex flex-col items-center content-center justify-center">
        <div className="w-full p-10 lg:p-0 lg:w-1/2 h-fit mx-auto flex flex-col lg:flex-row items-center content-center justify-center gap-x-20">
          {children}
        </div>
        {error ? <p className="p-4 text-red-600 font-medium text-xl text-balance">{error}</p> : null}
      </div>
    </motion.section>
  )
}
