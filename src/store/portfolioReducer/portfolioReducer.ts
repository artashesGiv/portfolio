import {InitialStatePortfolioType} from './types'

const initialStateMain: InitialStatePortfolioType = {
   portfolioItems: [
      {
         name: 'Social Network1',
         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            iusto
            libero, mollitia nobis numquam quae repellendus. Adipisci asperiores aspernatur, corporis fugiat hic
            iusto minima molestiae mollitia necessitatibus nulla obcaecati officia porro qui quibusdam quisquam
            quo
            repellat similique suscipit ullam vitae.`,
         image: 'https://dummyimage.com/400x400/ececec/000111&text=project+promo',
         link: 'github.com/artashesGiv',
         stack: ['html', 'css', 'react', 'type script'],
      },
      {
         name: 'Todolist2',
         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            iusto
            libero, mollitia nobis numquam quae repellendus. Adipisci asperiores aspernatur, corporis fugiat hic
            iusto minima molestiae mollitia necessitatibus nulla obcaecati officia porro qui quibusdam quisquam
            quo
            repellat similique suscipit ullam vitae.`,
         image: 'https://dummyimage.com/400x400/ececec/000111&text=project+promo',
         link: 'github.com/artashesGiv',
         stack: ['html', 'css', 'react', 'type script'],
      },
      {
         name: 'Social Network3',
         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            iusto
            libero, mollitia nobis numquam quae repellendus. Adipisci asperiores aspernatur, corporis fugiat hic
            iusto minima molestiae mollitia necessitatibus nulla obcaecati officia porro qui quibusdam quisquam
            quo
            repellat similique suscipit ullam vitae.`,
         image: 'https://dummyimage.com/400x400/ececec/000111&text=project+promo',
         link: 'github.com/artashesGiv',
         stack: ['html', 'css', 'react', 'type script'],
      },
      {
         name: 'Social Network',
         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            iusto
            libero, mollitia nobis numquam quae repellendus. Adipisci asperiores aspernatur, corporis fugiat hic
            iusto minima molestiae mollitia necessitatibus nulla obcaecati officia porro qui quibusdam quisquam
            quo
            repellat similique suscipit ullam vitae.`,
         image: 'https://dummyimage.com/400x400/ececec/000111&text=project+promo',
         link: 'github.com/artashesGiv',
         stack: ['html', 'css', 'react', 'type script'],
      },
   ],
}

export const portfolioReducer = (state: InitialStatePortfolioType = initialStateMain, action: ActionsTypes): InitialStatePortfolioType => {
   switch (action.type) {
      default:
         return state
   }
}

type ActionsTypes = any