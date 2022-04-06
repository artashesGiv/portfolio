export type InitialStatePortfolioType = {
   portfolioItems: PortfolioItemType[]
}

export type PortfolioItemType = {
   image: string
   name: string
   description: string
   stack: string[]
   link: string
}