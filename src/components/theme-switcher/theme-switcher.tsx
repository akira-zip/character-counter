'use client'

import Image from 'next/image'
import { useState } from 'react'
import DarkSwitcher from '../../../public/images/theme-switcher-dark.png'
import LightSwitcher from '../../../public/images/theme-switcher-light.png'

export default function ThemeSwitcher() {
  const [Theme, SetTheme] = useState(false)

  function ToogleTheme() {
    SetTheme(!Theme)
    document.body.classList.toggle('dark')
  }

  return(
    <button className='w-[60px] h-[60px] bg-(--foreground) rounded-[16px] flex justify-center items-center' onClick={ToogleTheme}>
      <Image
        src={Theme ? DarkSwitcher : LightSwitcher}
        width={36}
        height={36}
        alt='Theme switcher'
      />
    </button>
  )
}