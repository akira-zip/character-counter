import { TextStyles } from '@/libs/ui/styles'
import Header from '@/components/header/header'
import TextBox from '@/components/text-box/text-box'

export default function Index() {
  return (
    <div className='w-[80vw] min-h-[100vh]'>
      <Header/>

      <div className='w-[80vw] h-auto text-(--font-color) flex flex-col items-center relative top-[16vh]'>
        <p className={TextStyles.HugeText}>Analyze your text in real-time.</p>

        <TextBox/>
      </div>
    </div>
  )
}