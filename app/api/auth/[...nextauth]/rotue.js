import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


console.log({

    clientId:process.env.GOOGLE_ID,
    clientSecret:process.env.GOOGLE_CCLIENT_SECRET,

})


const handler = NextAuth ({
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CCLIENT_SECRET,

        })
    ],
    async session({ session }){


    },
    async signIn({ profile }) {


    }
})

export { handler as GET, handler as POST};