"use client"
import { signIn,signOut, useSession } from "next-auth/react"
export default function appbar (){
    const session = useSession()
    return <div className="">
        <button onClick={()=>signIn()}>SignIn</button><br />
        <button onClick={()=>signOut()}>SignOut</button><br />
        {JSON.stringify(session)}   
    </div>
}