'use client'

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { roboto } from '@/utils/font'
import roadmap from "@/img/roadmap.png"


const Modal = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className={` bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 rounded-md text-center w-4/5`}>
                {/* <h1 className="flex justify-center text-base sm:text-xl mb-4 font-bold text-slate-300">Revolte.app is an adventure game to onboard Web2 users into Web3</h1> */}
                
                <div className="flex justify-center">
                    <p className=" sm:block text-sm md:text-3xl my-4 font-bold">Revolte </p>
                    <p className="font-sans  sm:block text-sm md:text-xl my-4 font-bold">&nbsp;is an open source project, is you want to support us, you can make a donation at:</p>
                </div>
                <p className="font-sans  sm:block justify-center text-xs md:text-base mb-4 font-bold ">0x94b9420F65fB3ec966d96BB034b35AF86487D929</p>
                <Image
                    className="object-contain transform md:scale-75"
                    src={roadmap}
                    alt="roadmap"
                />
                {/* <p className="hidden sm:block text-base mb-4 font-bold text-slate-300">Revolte.app is an opensource {' '} <a className="underline" href="https://github.com/pgrandne/revolte">project</a> built by <a className="underline" href="https://irruptionlab.com">Irruption Lab</a></p> */}
                <button
                    className="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                    onClick={() => setModal(false)}
                >Ok</button>
            </div>
        </div>
    )
}

export default Modal;