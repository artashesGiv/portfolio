export type InitialStateResumeType = {
   mainDescription: string
   education: TimelineItemType[]
   employment: TimelineItemType[]
   skills: SkillsItemType[]
}

export type TimelineItemType = {
   title: string
   date: string
   description: string
}

export type SkillsItemType = {
   title: string
   percent: number
}