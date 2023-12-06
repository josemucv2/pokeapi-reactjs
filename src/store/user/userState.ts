import { IUser } from "@/interfaces"


interface IUserState {
    token: string,
    user: IUser | null
}

export const initialStateUser: IUserState = {
    token:'',
    user: {
        email:'',
        password:''
    }
}
