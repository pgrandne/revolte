'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedText from '@/components/AnimatedText';
import azadPic from "./img/back.png"
import skylerhomePic from "./img/skyler-place.png"
import { Dispatch, SetStateAction } from "react";

const Sequence = () => {
    const narration = "Skyler's place"
    const hour = "8:03 pm"

    return (
        <div className="relative flex flex-col justify-center h-screen py-[5%]">
            <motion.div
                className="flex pr-[35%]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.5 }}>
                <Image className="object-contain" src={skylerhomePic} alt="redaction" />
            </motion.div>
            <div className="pl-6 pt-2 z-10">
                <AnimatedText size={"text-xl"} content={narration} speed={0.08} delay={2} />
                <AnimatedText size={"text-base"} content={hour} speed={0.08} delay={5} />
            </div>
            < motion.div
                className="absolute bottom-0 right-0 flex h-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3, duration: 1.5 }}>
                <div className="flex justify-end pl-[30%] pt-[15%] pb-[5%]">
                    <Image className="object-contain" src={azadPic} alt="Azad" />
                </div>
            </motion.div>
        </div >
    )
}

export default Sequence;