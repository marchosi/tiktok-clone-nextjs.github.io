import { useState } from 'react';


export default function (){
    const[shouldShowInput, setShouldShowInput] =useState(false);
    
    const toggleInputVisibility = () =>{
        setShouldShowInput((prev) =>!prev);
    };

    const handleSearchName =(event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log("Input value",event.target.value);
    };

    return(
        <div className='p-4'>
            <button
            onClick={toggleInputVisibility}
            className='px-4 py-2 bg-blue-500 text-white rounded'
            >
                {shouldShowInput ? "":""}
            </button>

            {shouldShowInput &&(
                <div className='mt-4'>
                    <input 
                        type="text"
                        onChange={handleSearchName}
                        placeholder=''
                        className='p-2 border rounded w-full'
                         />
                </div>
            )}
        </div>
    );
}