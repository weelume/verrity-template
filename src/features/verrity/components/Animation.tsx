'use client'
import {useEffect,useRef,useState,type RefObject} from 'react'
import {animate,motion,useInView,useMotionValue,useReducedMotion,useTransform} from 'framer-motion'
import {debug} from '../utils'
// 离屏、后台及悬停期间保留当前步骤，恢复时继续；减少动态效果直接展示最终状态。
export function useCycle(ref:RefObject<HTMLElement|null>,count:number,milliseconds:number,paused=false){
 const visible=useInView(ref,{amount:.15}),reduced=useReducedMotion(),[tick,setTick]=useState(0),[progress,setProgress]=useState(0),elapsed=useRef(0)
 useEffect(()=>{
  if(!visible||paused||reduced||count<2)return
  let timer:ReturnType<typeof setInterval>|undefined,last=Date.now()
  const update=()=>{const now=Date.now();elapsed.current+=now-last;last=now;if(elapsed.current>=milliseconds){const advances=Math.floor(elapsed.current/milliseconds);elapsed.current%=milliseconds;setTick(value=>value+advances)}setProgress(elapsed.current/milliseconds)}
  const pause=()=>{if(timer){update();clearInterval(timer);timer=undefined}}
  const resume=()=>{last=Date.now();if(!timer)timer=setInterval(update,50)}
  const visibility=()=>{if(document.hidden)pause();else resume()}
  if(!document.hidden)resume()
  document.addEventListener('visibilitychange',visibility)
  return()=>{pause();document.removeEventListener('visibilitychange',visibility)}
 },[visible,paused,reduced,count,milliseconds])
 const setStep=(value:number)=>{elapsed.current=0;setProgress(0);setTick(value)}
 return {step:reduced?count-1:tick%count,cycle:Math.floor(tick/count),setStep,progress:reduced?1:progress,visible,reduced}
}
export function Count({value,suffix='',precision=0}:{value:number;suffix?:string;precision?:number}){const ref=useRef<HTMLSpanElement>(null),visible=useInView(ref,{once:true}),reduce=useReducedMotion(),number=useMotionValue(0),display=useTransform(number,x=>x.toFixed(precision)),[text,setText]=useState((reduce?value:0).toFixed(precision));useEffect(()=>display.on('change',setText),[display]);useEffect(()=>{if(!visible)return;const controls=animate(number,value,{duration:reduce?0:2.1,ease:[.22,1,.36,1]});return()=>controls.stop()},[visible,value,number,reduce]);return <span ref={ref} className="v-count" aria-label={value.toFixed(precision)+suffix}><span aria-hidden="true">{text}{suffix}</span></span>}
export function RollingPrice({value}:{value:number}){const reduce=useReducedMotion();return <span className="v-rolling-price" aria-label={'$'+value}><span aria-hidden="true">$</span>{String(value).split('').map((digit,i)=><span key={i} className="v-digit" aria-hidden="true"><motion.span animate={{y:`-${Number(digit)*10}%`}} transition={{duration:reduce?0:.8,delay:i*.06,ease:[.22,1,.36,1]}}>{Array.from({length:10},(_,n)=><span key={n}>{n}</span>)}</motion.span></span>)}</span>}
export function MotionLog({name,step}:{name:string;step:number}){useEffect(()=>debug('animation.step',{name,step}),[name,step]);return null}
export function useTypedText(text:string,cycle=0){const ref=useRef<HTMLSpanElement>(null),visible=useInView(ref),reduced=useReducedMotion(),progress=useMotionValue(0),[length,setLength]=useState(0);useEffect(()=>progress.on('change',value=>setLength(Math.floor(value))),[progress]);useEffect(()=>{if(!visible)return;progress.set(0);const controls=animate(progress,text.length,{duration:reduced?0:Math.min(2.8,text.length*.035),delay:reduced?0:.25,ease:'linear'});return()=>controls.stop()},[visible,text,cycle,reduced,progress]);return {ref,length:reduced?text.length:length}}
export function Typewriter({text,cycle=0,onComplete}:{text:string;cycle?:number;onComplete?:()=>void}){const {ref,length}=useTypedText(text,cycle);
 useEffect(()=>{if(length===text.length)onComplete?.()},[length,text.length,onComplete])
 // 完整文字负责占位，保证初始空文本也能被视口观察器检测，并避免逐字时卡片跳高。
 return <span ref={ref} className="v-typewriter" aria-label={text}><span className="v-typewriter-measure" aria-hidden="true">{text}</span><span className="v-typewriter-visible" aria-hidden="true">{text.slice(0,length)}</span></span>}
