'use client';

import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import ArrowButton from "@/components/ArrowButton";

const Chap1s7 = () => {
    const [telegramWindow, setTelegramWindow] = useState(false)
    const [stage, setStage] = useState(0)



    console.log(stage)

    return (
        <div className="flex flex-row">
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence />
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                <Discussion stage={stage} setStage={setStage} />
            </div>
            {
                stage === 4 &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <Link href="/construction" className="absolute bottom-8 right-8 animate-pulse"
                    >
                        <ArrowButton />
                    </Link>
                </motion.div>
            }
        </div>
    )
}

export default Chap1s7