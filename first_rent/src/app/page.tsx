"use client";
import { motion } from "framer-motion";
import { Navigation } from '@/components/Navigation'
import Image from 'next/image'
import { Reservation } from "@/components/Reservation/Reservation";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Page() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <main className="w-full max-h-full min-h-screen bg-gray-200">
        <Navigation />
        <section
          className="w-full lg:w-1/2 mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, translateX: -300 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              type: "spring",
              duration: 1.3,
            }}
            className="p-2"
          >
            <div className="w-full mx-auto h-40 lg:h-72 relative">
              <Image src="/DRIVE-FIRST-CLASS.png" className="w-full h-fit" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={100} alt="Logo" loading="lazy" fill={true} />
            </div>
          </motion.div>
          <Reservation />
        </section>
      </main>
    </LocalizationProvider>
  )
}
