import type {ReactNode} from 'react'
import '../features/verrity/theme.css'
import './globals.css'
export const metadata={title:'Verity · 可溯源 AI 协作',description:'让每个答案都有据可查 / The AI copilot that shows its work.'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh" data-verrity=""><body>{children}</body></html>}
