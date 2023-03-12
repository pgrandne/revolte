'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi'

const ModalProgression = ({ setModalProgression, wallet }: {
    setModalProgression: Dispatch<SetStateAction<boolean>>
    wallet: boolean
}) => {
    const [loading, setLoading] = useState(false)
    const [resumeButton, setResumeButton] = useState('Resume last session')
    const router = useRouter()
    const { address } = useAccount()

    useEffect(() => {
        if (typeof address !== 'undefined')
            setResumeButton('Resume last session')

    }, [address])


    const getProgression = async () => {
        setLoading(true)
        try {
            const progRes = await fetch('/api/game/progression', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ address }),
            })
            if (progRes.status !== 200) throw new Error('Error loading progression')
            const path = await progRes.text()
            router.push(path)
        } catch (error) {
            alert(error.message)
            setModalProgression(false)
        }
    }

    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-30">
            <div className={`flex flex-col bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 gap-2 rounded-md text-center w-2/5`}>
                <p className="mb-4 text-xl">Select where you want to go</p>
                <Link className="btnProgression" href="/chapter1/scene1">Chapter 1</Link>
                <Link className="btnProgression" href="/chapter2">Chapter 2</Link>
                {wallet && <button
                    className="btnProgression text-3xl"
                    onClick={() => { typeof address === 'undefined' ? setResumeButton('Please connect wallet') : getProgression() }}
                >{resumeButton}
                </button>
                }
                <button
                    disabled={loading}
                    className="btnClose mx-auto w-36"
                    onClick={() => setModalProgression(false)}
                >
                    {loading &&
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    <span className="mx-auto">{loading ? "Wait.." : "Close"}</span>
                </button>
            </div>
        </div>
    )
}

export default ModalProgression;