import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
export const { handlers, signIn, signOut, auth } = NextAuth({
    callbacks:{
        authorized({auth,request:{url}}){
          if(!auth){
            if(url.includes('/test')) return false
            else return true
          }
          return true
        }
      },
    providers: [
    Credentials({
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        credentials: {
          phoneno: {},
          passcode: {},
        },
        authorize: async (credentials) => {
        //   let user = null
   
        //   // logic to salt and hash password
        //   const pwHash = saltAndHashPassword(credentials.password)
   
        //   // logic to verify if the user exists
        //   user = await getUserFromDb(credentials.email, pwHash)
   
        //   if (!user) {
            // No user found, so this is their first attempt to login
            // Optionally, this is also the place you could do a user registration
            if(!(credentials.phoneno=="0942303571" && credentials.passcode=="123456")) {
            throw new Error("Invalid credentials.")
          }
   
          // return user object with their profile data
          return null
        },
      }),

  ],
})