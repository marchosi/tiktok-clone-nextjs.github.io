export interface RandomUsers{
    id:string;
    name:string;
    image:string;
}

export interface CropperDimensions{
    height?:number|null;
    width?:number|null;
    left?:number|null;
    top?:number|null;
}

export interface ShowErrorObject{
    type:string;
    message:string;
}

export interface Like{
    id:string;
    user_id:string;
    post_id:string;
}

export interface Post{
    id:string;
    user_id:string;
    video_url:string;
    text:string;
    created_at:string; 
}

export interface Comments{
    id:string;
    user_id:string;
    post_id:string;
    text:string;
    created_at:string;
}

export interface PostWithProfile{
    id:string;
    user_id:string;
    video_url:string;
    text:string;
    created_at:string;
    profile:{
        user_id:string;
        name:string;
        image:string;
    }
}

export interface UploadError{
    type:string;
    message:string;
}

////////////////////////////////////
////////////////////////////////////

//COMPONENT TYPES


export interface PostMainCompTypes{
    post:PostWithProfile
} 

export interface PostMainLikesCompTypes{
    post:PostWithProfile
} 

export interface PostPageTypes{
    params:{ userId : string, postId: string; };
}

export interface PostUserCompTypes{
    post:Post    
}

export interface ProfilePageTypes{
    params:{ id:string; };
} 

//LAYOUT INCLUDE TYPES
export interface MenuItemTypes{
    iconSting:string,
    colorSting:string,
    sizeSting:string
}
export interface MenuItemFollowCompTypes{
    user:RandomUsers
}

export interface TextInputCompTypes {
    string:string;
    inputType:string;
    placeholder:string;
    onUpdate:(newValue:string)=>void;
    error:string
}