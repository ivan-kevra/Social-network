export type PostType = {
    id: number
    post: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    message: string
    userId: number
    avatar: string
}
export type FriendType = {
    id: number
    name: string
    avatar: string
}
export type ProfilePageType = {
    posts: PostType[]

}
export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
}
export type NavbarType = {
    friends: FriendType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbar: NavbarType
}
const avatar = 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, post: 'post 1', likesCount: 10},
            {id: 2, post: 'post 2', likesCount: 15},
            {id: 3, post: 'post 3', likesCount: 20},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi, I am 1st user', userId: 1, avatar},
            {id: 2, message: 'Hi, I am 2nd user', userId: 2, avatar},
            {id: 3, message: 'Bye from 1st user', userId: 1, avatar},
            {id: 4, message: 'Bye from 2nd user', userId: 2, avatar},
        ],
        dialogs: [
            {id: 1, name: 'Dimych', avatar},
            {id: 2, name: 'Andrey', avatar},
            {id: 3, name: 'Sveta', avatar},
            {id: 4, name: 'Sasha', avatar},
            {id: 5, name: 'Victor', avatar},
            {id: 6, name: 'Valera', avatar},
        ],
    },
    navbar: {
        friends: [
            {id: 1, name: 'Andrew', avatar},
            {id: 2, name: 'Sasha', avatar},
            {id: 3, name: 'Igor', avatar},
        ]
    }
}

