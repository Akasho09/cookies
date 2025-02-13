import { auth } from "@/lib/auth"
import  { getServerSession } from "next-auth"

export default async function u(){
    const session = await getServerSession(auth)
    return <div>
       {JSON.stringify(session)} 
    </div>
}