"use client";
import Link from "next/link";
import { RxCross1, RxHome, RxHamburgerMenu, } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { IoCarOutline } from "react-icons/io5";
import { Colors } from "@/utils/Colors";
import { motion } from "framer-motion";
import { useState } from "react";

export function Navigation() {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }
  const fadeInVariant = {
    opened: { opacity: 1, transition: { delay: 1.2 } },
    closed: { opacity: 0 }
  }
  const ulVariant = {
    opened: { transition: { delayChildren: 1, staggerChildren: 0.18 } },
    closed: { transition: { staggerChildren: 0.06, staggerDirection: -1 } }
  }
  const liVariant = {
    opened: { opacity: 1, y: "0%", transition: { duration: 0.65, ease: "easeOut" } },
    closed: { opacity: 0, y: "100%", transition: { duration: 0.25, ease: "easeInOut" } }
  }

  const mobileMenuVariant = {
    opened: { y: "0%", transition: { delay: 0.15, duration: 1.1, ease: [0.74, 0, 0.19, 1.02] } },
    closed: { y: "-100%", transition: { delay: 0.35, duration: 0.63, ease: [0.74, 0, 0.19, 1.02] } }
  }

  // fetch user data here ...
  return (
    <motion.nav
      initial={"closed"}
      animate={isDisplayed ? "opened" : "closed"}
      className="w-full h-fit overflow-hidden p-2 bg-transparent border-b-2 border-slate-300 mb-2 bg-slate-800">
      <motion.button variants={hideNavItemsVariant} className="p-4" onClick={() => setIsDisplayed(true)}>
        <RxHamburgerMenu size={25} color={Colors.neutral[900]} strokeWidth={0.5} />
      </motion.button>
      <motion.div
        variants={mobileMenuVariant}
        className="w-full h-screen z-50 overflow-hidden top-0 left-0 bg-slate-900 absolute flex flex-col gap-8 justify-start"
      >
        <motion.button variants={fadeInVariant} className="md:justify-self-end w-fit md:mx-0 md:ml-auto mx-auto h-fit p-4 flex flex-row items-center content-center justify-center gap-2" onClick={() => setIsDisplayed(false)}>
          <RxCross1 size={29} color={Colors.slate[100]} />
          <h3 className="text-xl group-hover:text-red-500">Close</h3>
        </motion.button>
        <motion.ul variants={ulVariant}>
          <motion.li whileTap={{ scale: 0.95 }} className="w-fit h-fit py-4 px-12 space-x-4">
            <motion.div variants={liVariant} className="w-full flex hover:text-green-500 transition-colors duration-300 flex-row items-center group content-cetner justify-start gap-3">
              <RxHome size={29} />
              <Link className="text-xl tracking-wide text-slate-300 group-hover:text-green-500 transition-colors duration-300" href={"#"}>Home</Link>
            </motion.div>
          </motion.li>
          <motion.li whileTap={{ scale: 0.95 }} className="w-fit h-fit py-4 px-12 space-x-4">
            <motion.div variants={liVariant} className="w-full flex hover:text-green-500 transition-colors duration-300 flex-row items-center group content-cetner justify-start gap-3">
              <IoCarOutline size={29} />
              <Link className="text-xl tracking-wide text-slate-300 group-hover:text-green-500 transition-colors duration-300" href={"#"}>Rent</Link>
            </motion.div>
          </motion.li>
          <motion.li whileTap={{ scale: 0.95 }} className="w-fit h-fit py-4 px-12 space-x-4">
            <motion.div variants={liVariant} className="w-full flex hover:text-green-500 transition-colors duration-300 flex-row items-center group content-cetner justify-start gap-3">
              <MdOutlineReviews size={29} />
              <Link className="text-xl tracking-wide text-slate-300 group-hover:text-green-500 transition-colors duration-300" href={"#"}>Reviews</Link>
            </motion.div>
          </motion.li>
          <motion.div variants={liVariant} className="w-10/12 h-0.5 bg-slate-700 self-center m-auto"></motion.div>
          <motion.li className="w-full h-fit py-4 px-6">
            <motion.h3 className="text-xl tracking-wide text-slate-300" variants={liVariant}>Contact</motion.h3>
            <div className="w-full md:w-9/12 h-fit space-y-8 flex flex-col md:flex-row justify-items-flex">
              <motion.div variants={liVariant} className="md:w-1/2 h-fit p-4 flex flex-col gap-5 md:pt-8 pt-6 items-start content-center justify-evenly">
                <Link
                  className="flex flex-row gap-4 items-center content-center"
                  href="whatsapp://send?phone=+355694033377">
                  <BsTelephone size={25} color={Colors.green[600]} />
                  <p className="text-lg">
                    +355 69 4033377
                  </p>
                </Link>
                <Link
                  className="flex flex-row gap-4 items-center content-center"
                  href="whatsapp://send?phone=+355694033377">
                  <BsTelephone size={25} color={Colors.green[600]} />
                  <p className="text-lg">
                    +355 69 2066644
                  </p>
                </Link>
              </motion.div>
              <motion.div variants={liVariant} className="md:w-1/2">
                <Link
                  href="mailto:booking@first.al"
                  className="flex flex-row gap-2 items-center content-center"
                >
                  <HiOutlineMail size={25} />
                  <h5 className="w-fit h-fit text-sky-400">booking@first.al</h5>
                </Link>
              </motion.div>
            </div>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.nav >
  )
}
