import {InitialStateResumeType} from './types'


const initialStateResume: InitialStateResumeType = {
   mainDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto asperiores 
   aspernatur, aut, consequatur corporis cum dicta doloremque dolores eaque earum eos excepturi fuga id illo incidunt 
   laborum libero minus modi neque nihil nisi nostrum odio omnis quaerat quibusdam quisquam reiciendis ullam veritatis.
   Dolorum enim error fugiat maiores numquam?`,
   education: [
      {
         title: 'university of minnesota twin cities',
         date: '2005-2006',
         description: 'Bachelor Computer Engineering Lorem',
      },
      {
         title: 'minnesota twin cities',
         date: '2006-2010',
         description: 'Bachelor Computer Engineering Lorem',
      },
      {
         title: 'university',
         date: '2010-2022',
         description: 'Bachelor Computer Engineering Lorem Bachelor Computer Engineering Lorem',
      },
   ],
   employment: [
      {
         title: 'university of minnesota twin cities',
         date: '2005-2006',
         description: 'Bachelor Computer Engineering Lorem',
      },
      {
         title: 'university of minnesota twin cities',
         date: '2005-2006',
         description: 'Bachelor Computer Engineering Lorem',
      },
      {
         title: 'university of minnesota twin cities',
         date: '2005-2006',
         description: 'Bachelor Computer Engineering Lorem',
      },
   ],
   skills: [
      {
         title: 'html5',
         percent: 90,
      },
      {
         title: 'css3',
         percent: 80,
      },
      {
         title: 'java script',
         percent: 60,
      },
      {
         title: 'type script',
         percent: 75,
      },
      {
         title: 'react',
         percent: 85,
      },
      {
         title: 'redux',
         percent: 75,
      },
   ],
}

export const resumeReducer = (state: InitialStateResumeType = initialStateResume, action: actionsTypes): InitialStateResumeType => {
   switch (action.type) {
      default:
         return state
   }
}

type actionsTypes = any