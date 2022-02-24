export type initialStateResumeType = {
   mainDescription: string
   education: timelineItem[]
   employment: timelineItem[]
   skills: skillsItem[]
}

export type timelineItem = {
   title: string
   date: string
   description: string
}

export type skillsItem = {
   title: string
   percent: number
}