import {InitialStateMainType} from './types'

const initialStateMain: InitialStateMainType = {
   profile: {
      name: 'Арташес Дживанян',
      address: '400002',
      age: new Date(1996, 5, 10),
      email: 'artashes.96@gmail.com',
      phone: '+7(999)-627-70-16',
      photo: 'https://sun9-57.userapi.com/impf/c849524/v849524507/d2f33/Po9bVzpvjXs.jpg?size=1440x2160&quality=96&sign=4335f29c9fac8b3b10b914aa7cf97b36&type=album',
      tags: 'junior frontend developer, react developer',
   },
   welcome: {
      cv: '',
      welcome: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos dolor ipsum magni
               neque
               odio
               optio repellat ullam. Amet aperiam autem dolorem, eligendi harum laudantium nostrum perspiciatis,
               praesentium quis quo quos recusandae, velit voluptas! Dolore ducimus ex laboriosam molestias,
               officiis,
               perspiciatis quae quasi quidem, sed soluta ullam ut voluptas voluptatum.`,
   },
}

export const mainReducer = (state: InitialStateMainType = initialStateMain, action: actionsTypes): InitialStateMainType => {
   switch (action.type) {
      default:
         return state
   }
}

type actionsTypes = any