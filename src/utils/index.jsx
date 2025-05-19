import React from "react"
import image from "@/assets/EMBLEM.svg"

export const Loading = () => {
    return <div className="w-full h-screen grid place-items-center">
        <img className="w-[120px]" src={image} alt="" />
    </div>
}

export const Suspense = ({children}) => {
    return <React.Suspense fallback={<Loading/>}>{children}</React.Suspense>
}