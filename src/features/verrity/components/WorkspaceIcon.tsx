import type {CSSProperties} from 'react'

const paths={
 search:'m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
 grid:'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
 inbox:'M4 5h16l2 10v5H2v-5L4 5ZM2 15h6l2 3h4l2-3h6',
 records:'M4 4h16v16H4zM8 8h8M8 12h8M8 16h5',
 chart:'M4 20V9h4v11M10 20V4h4v16M16 20V12h4v8M2 20h20',
 workflow:'M4 4h6v6H4zM14 14h6v6h-6zM7 10v7h7',
 sparkle:'m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z',
 file:'M5 2h9l5 5v15H5V2Zm9 0v6h5M8 12h8M8 16h8',
 check:'m5 12 4 4L19 6',
 clock:'M12 7v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',
 plus:'M12 4v16M4 12h16',
 copy:'M8 8h13v13H8zM16 8V3H3v13h5',
 chevron:'m8 10 4 4 4-4',
 shield:'m12 2 8 4v6c0 6-8 10-8 10S4 18 4 12V6l8-4Zm-4 9 3 3 5-6',
 message:'M4 4h16v13H8l-4 4V4Zm4 5h8M8 13h5',
 link:'m9 15 6-6M7 14l-2 2a4 4 0 0 0 6 6l4-4M17 10l2-2a4 4 0 0 0-6-6L9 6',
} as const
export type WorkspaceIconName=keyof typeof paths
export function WorkspaceIcon({name,className='',style}:{name:WorkspaceIconName;className?:string;style?:CSSProperties}){
 return <svg className={'v-workspace-icon '+className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]}/></svg>
}
