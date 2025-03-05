import ThemeSwitcher from '@/components/theme-switcher/theme-switcher'
import Logo from '@/components/logo/logo'

export default function Header() {
  return(
    <header className='w-[80vw] h-[8vh] flex justify-between items-center fixed inset-0 top-[4vh] mx-auto'>
      <Logo/>
      
      <ThemeSwitcher/>
    </header>
  )
}