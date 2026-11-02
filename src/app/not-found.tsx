'use client'
import {usePathname} from 'next/navigation'
import NotFoundPage from '../features/verrity/pages/NotFoundPage'
export default function NotFound(){const path=usePathname();return <NotFoundPage locale={path.split('/')[1]==='en'?'en':'zh'} basePath=""/>}
