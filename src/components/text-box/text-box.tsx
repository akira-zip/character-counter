'use client'

import { useState } from 'react'
import { TextStyles } from '@/libs/ui/styles'
import InfoBox from '@/components/info-box/info-box'

export default function TextBox() {
  const [Char, SetChar] = useState(0)
  const [Word, SetWord] = useState(0)
  const [Time, SetTime] = useState(0)

  return(
    <div className='w-[80vw] h-auto text-(--font-color) flex flex-col gap-[16px] mt-[32px]'>
      <div className='w-[80vw] h-auto'>
        <textarea
          className='w-[80vw] min-h-[40vh] bg-(--foreground) rounded-[16px] outline-none resize-none p-[16px] placeholder:text-(--font-color)'
          placeholder='Start typing here!'
          onChange={(e) => {
            SetChar(e.target.value.length)
            SetWord((Number(e.target.value.split(' ').length)) - 1)
            SetTime(Math.floor(Word / 200))
          }}
        />

        <p className={TextStyles.LittleText}>Reading time: {Time < 1 ? '< 1' : Time} minutes</p>
      </div>

      <div className='w-[80vw] h-auto flex justify-evenly'>
        <InfoBox Color='bg-(--tc-info-box)' Data={Char} Role='Total characters'/>

        <InfoBox Color='bg-(--wc-info-box)' Data={Word} Role='Word count'/>
      </div>
    </div>
  )
}