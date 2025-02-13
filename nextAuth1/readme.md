## flow 
- npm create next-app@latest
- structure files app/api/auth/[...nextauth]



# Next Auth
- Create /api/auth/[…nextauth]/route.ts
all routes through this will go through nextjs authentication
- npm install next-auth

## There are three broad types of providers
OAuth (Login with google)
Email (Passwordless Email login via email OTP)
Credentials (your own strategy)

1. Credentials provider
This lets you create your own authentication strategy
For example
Email + Password
Phone number
Login with Metamask
steps: 
1. Add a credentials provider
2. Add providers.tsx : for  <SessionProvider> wrapping of layout.tsx
3. Get the user details in the top level page.tsx (client component)
 const session = useSession();
      {JSON.stringify(session.data?.user)}
4. Get the user details on the server (server component)
import { getServerSession } from "next-auth"


## Callbacks
are asynchronous functions you can use to control what happens when an action is performed.
- signin 
- redirect 
- jwt
- session

## to get scesses to ids etc in backend 
alongside getServerSession use auth config everywhere
    const session = await getServerSession(auth)