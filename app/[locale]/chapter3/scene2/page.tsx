'use client'

import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

const Chap3s2 = () => {
  const locale = useLocale()
  redirect(`/${locale}/construction?source=chap2scene2`);
}

export default Chap3s2;