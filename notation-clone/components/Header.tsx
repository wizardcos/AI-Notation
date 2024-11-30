'use client'
import { useUser,SignedOut,SignedIn,SignInButton,UserButton } from "@clerk/nextjs"  
const Header = () => {
    const {user} = useUser();
  return (

    <div className="flex items-center p-5 justify-between">
        {
            user &&(
                <h1 className="text-2xl">{user.firstName}{`'s`} space</h1>
            )
        }
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
    </div>
    

    </div>
  )
}

export default Header