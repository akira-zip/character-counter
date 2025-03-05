import { Metadata } from "next"
import { Poppins } from '@/libs/ui/fonts'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Character counter'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${Poppins.className} box-border m-0 p-0`}>
      <body className='bg-(--background) flex justify-center'>
        {children}
      </body>
    </html>
  )
}