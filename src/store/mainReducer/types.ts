export type profileType = {
   photo: string
   name: string
   age: Date
   phone: string
   email: string
   address: string
   tags: string
}


export type welcomeType = {
   welcome: string
   cv: string
}

export type initialStateMainType = {
   profile: profileType
   welcome: welcomeType
}