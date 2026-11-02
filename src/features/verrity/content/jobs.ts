import data from './jobs.json'
import type {Job} from '../types'
import {localized,detailBlocks} from './schema'
export const jobs:Job[]=data.map(job=>({...job,title:localized(job.title),summary:localized(job.summary),department:localized(job.department),location:localized(job.location),blocks:detailBlocks(job.blocks)}))
