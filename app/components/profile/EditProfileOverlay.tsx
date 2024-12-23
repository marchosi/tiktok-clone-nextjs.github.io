import { CropperDimensions, ShowErrorObject } from "@/app/types";
import { get } from "http";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import TextInput from "../TextInput";

export default function EditProfileOverlay () {
    const router =useRouter()

    const[file,setFile] =useState<File | null>(null);
    const[croppre,setCroppre] =useState<CropperDimensions | null>(null);
    const[uploadedImage,setUploadedImage] =useState<string | null>(null);
    const[userImage,setUserImage] =useState<string | ''>('https://placehold.co/100');
    const[userName,setUserName] =useState<string | ''>('');
    const[userBio,setUserBio] =useState<string | ''>('');
    const[isUpdating,setIsUpdating] =useState(false);
    const[error,setError] =useState<ShowErrorObject | null>(null);

    const getUploadedImage = () =>{
        console.log('getUploadedImage')
    }

    const showError = (type: string) => {
        if(error && Object.entries(error).length > 0 && error?.type == type){
            return error.message;
        }
        return '';
    }

    return(
        <>
        <div
            id="EditProfileOverlay"
            className="fixed flex justify-center pt-14 md:pt-[105px] z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto"
        >
            <div
                className={
                    `relative bg-white w-full max-w-[700px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-lg mb-10
                    ${!uploadedImage ? 'h-[655px]':'h-[580px]'}
                `}
            >
                 <div className="aboslute fiex items-center justify-center w-full p-5 left-0 top-0 border-b border-gray-300">
                    <h1 className="text-[22px] font-mdeium">
                        Edit Profile
                    </h1>
                    <button
                        disabled={isUpdating}
                        className="Hover:bg-gray-200 p-1 rounded-full"
                    >
                        <AiOutlineClose size='25'/>
                    </button>
                 </div>

                 <div className={`h-[calc(500px-200px) ${!uploadedImage ? 'mt-16':'mt-[58px]'}`}>
                    {!uploadedImage ? (
                        <div>
                            <div
                            id="ProfilePhotoSection"
                            className="flex flex-col border-b sm:h-[118px] h-[145px] px-1.5 py-2 w-full"
                            >
                                <h3 className="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                                    Profile Photo
                                </h3>

                                <div className="flex items-center justify-center sm:-mt-6">
                                    <label 
                                        htmlFor="image" 
                                        className="relative cursor-pointer">
                                        <img  
                                            className="ronuded-full" width="95"
                                            src={userImage}
                                        />
                                        <button className="absolute bottom-0 right-0 bg-white shadow-xl border p-1 border-gray-300 inline-block w-[32px] h-[32px]">
                                            <BsPencil size='17' className="ml-0.5"/>
                                        </button>
                                    </label>
                                    <input 
                                        className="hidden"
                                        type="file"
                                        id="image"
                                        onChange={getUploadedImage}
                                        accept="image/png, image/jpeg, image/jpg"
                                    />
                                </div>
                            </div>

                            <div
                                id="UserNameSection"
                                className="flex flex-col border-b sm:h-[118px] px-1.5 py-2 mt-1.5 w-full"
                            >
                                    <h3 className="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                                        Name
                                    </h3>

                                    <div className="flex items-center justify-center sm:-mt-6">
                                        <div className="sm:[60%] w-full max-w-md">
                                            <TextInput
                                                string={userName}
                                                placeholder="Username"
                                                onUpdate={setUserName}
                                                inputType="text"
                                                error={showError('username')}
                                            />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    ) :(
                        <div></div>
                    )}
                 </div>
            </div>

        </div>
        </>
    )
}