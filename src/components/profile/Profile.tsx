import React from "react";
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer"
import {ProfileInfoType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profileInfo: ProfileInfoType | null
    status: string
    updateStatus: () => void
    isOwner: boolean
    savePhoto: (mainPhoto: any) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <ProfileInfo profileInfo={props.profileInfo}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}