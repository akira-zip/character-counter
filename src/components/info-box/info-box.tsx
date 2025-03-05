import { TextStyles } from "@/libs/ui/styles"

interface InfoBoxProps {
  Color: string
  Role: string
  Data: number
}

export default function InfoBox(Props: InfoBoxProps) {
  return(
    <div className={`${Props.Color} w-[20vw] h-[20vh] rounded-[16px] flex flex-col items-start p-[8px]`}>
      <p className={`${TextStyles.HugeText} text-[#0f0f0f]`}>{Props.Data}</p>

      <p className={`${TextStyles.Text} text-[#0f0f0f]`}>{Props.Role}</p>
    </div>
  )
}