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
      cv: 'https://disk.yandex.ru/edit/disk/disk%2F%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8%2F%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%B4%D0%BB%D1%8F%20Frontend%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0%20%282%29.docx?source=docs&sk=y04d6b3b2c30e0a936ef91534f34c21bc',
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