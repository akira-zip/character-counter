import Image from 'next/image'
import LogoImg from '../../../public/images/logo.png'

export default function Logo() {
  return(
    <div className='flex justify-center items-center'>
      <Image
        src={LogoImg}
        width={60}
        height={60}
        alt='Logo'
      />

      <p className='sm:text-[24px] text-[16px] text-(--font-color)'>Character counter</p>
    </div>
  )
}