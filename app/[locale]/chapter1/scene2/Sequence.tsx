'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from '@/app/components';
import { Dispatch, SetStateAction } from "react";
import { azadDeskPic, chatPic, notifPic, redactionPic } from "@/public/img"
import { useTranslations } from 'next-intl';

const Sequence = ({ discussionWindow, setTelegramWindow, telegramWindow }: {
    discussionWindow: boolean,
    setTelegramWindow: Dispatch<SetStateAction<boolean>>
    telegramWindow: boolean,
}) => {
    const t = useTranslations('Chap1s2');

    return (
        <div className="relative flex flex-col justify-center h-screen py-[5%]">
            <motion.div
                className="flex pr-[35%]"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}>
                <Image className="object-contain" src={redactionPic} alt="redaction" />
            </motion.div>
            <div className="pl-6 pt-2 z-10">
                <AnimatedText size={"text-xl"} content={t('narration')} speed={0.06} delay={1.5} />
                {discussionWindow &&
                    <AnimatedText size={"text-base"} content={t('hour1')} speed={0.06} delay={4} />
                }
                {!discussionWindow &&
                    <AnimatedText size={"text-base"} content={t('hour2')} speed={0.06} delay={1} />
                }
            </div>
            {discussionWindow &&
                < motion.div
                    className="absolute bottom-0 right-0 flex h-full"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 5, duration: 1 }}>
                    <div className="flex justify-end pl-[10%] pt-[25%] pb-[15%]">
                        <Image className="object-contain" src={chatPic} alt="chat" />
                    </div>
                </motion.div>
            }
            {!discussionWindow &&
                <>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}>
                        <div className="flex justify-end pl-[40%] pt-[20%] pb-[0%]">
                            <Image className="object-contain" src={azadDeskPic} alt="Azad" />
                        </div>
                    </motion.div>
                    {!telegramWindow &&
                        < motion.div
                            className="absolute top-0 right-0 flex h-full"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 3.5, duration: 1.5 }}>
                            <div className="flex pl-[70%] pb-[47%] min-h-[50%]">
                                <Image
                                    className="object-contain cursor-pointer animate-pulse"
                                    src={notifPic}
                                    alt="notification"
                                    onClick={() => setTelegramWindow(true)}
                                />
                            </div>
                        </motion.div>
                    }
                </>
            }
        </div >
    )
}

export default Sequence;