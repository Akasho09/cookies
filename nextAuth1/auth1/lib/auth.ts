import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
export const auth = 
    {
        providers: [
            CredentialsProvider ({
                name: "Email" ,
                credentials:{
                    username : {label:"username" , placeholder:"enter name" , type:"text"},
                    password:  {label:"password" , placeholder:"enter password" , type:"password"}
                },
                async authorize(credentials:any){
                    // db code
                    if(credentials.password=="1234"){
                        return {
                            id: "123",
                            "name" : credentials.username,
                        }
                    } else return null;
                }
            }),
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID || "",
                clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
              })
        ],
        secret: process.env.NEXTAUTH_SECRET  , // whenever jwt is used use this as a secret key
       callbacks:{
        jwt:(({token}:any)=>{
            console.log(token) // id is `sub` in token
            token.userId=token.sub
            return token
        }),
        session: (({session,token,user}:any)=>{
            console.log(session)
            if(session.user && session) session.user.id=token.userId
            return session;
        })
       }
    }