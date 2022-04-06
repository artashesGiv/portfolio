export type ProfileType = {
   photo: string
   name: string
   age: Date
   phone: string
   email: string
   address: string
   tags: string
}


export type WelcomeType = {
   welcome: string
   cv: string
}

export type InitialStateMainType = {
   profile: ProfileType
   welcome: WelcomeType
}