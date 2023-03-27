'use client';

import { useState } from "react"
import { AzadChoices, AzadDiscussion, ExternalDiscussion } from '@/app/components';
import { scene4 } from '@/lib/utils/story'
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from 'next-intl';

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap1s4');

    return (
        <div className="flex w-full h-full">
            <div className="relative flex flex-col flex-1">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        <div>
                            <ExternalDiscussion text={scene4[6]} name="Skyler" delay={7} />
                        </div>
                        {stage > 6 && <>
                            <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene4[7]} name="Skyler" delay={2} />
                        </>}
                        {stage > 7 && <>
                            <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene4[8]} name="Skyler" delay={1.5} />
                        </>}
                        {stage > 8 && <>
                            <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                        </>}
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 6 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c5.choice1')} choice2={t('choices.c5.choice2')} delay={9} duration={.5} />
                    }
                    {stage === 7 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c6.choice1')} choice2={t('choices.c6.choice2')} delay={6} duration={.5} />
                    }
                    {stage === 8 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c7.choice1')} choice2={t('choices.c7.choice2')} delay={3} duration={.5} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;