import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    database: process.env.DB_URL,
    session: {
        jwt: true
    },
    jwt: {
        secret: 'afjsdaj1212jsaf'
    },
    callbacks: {
        async jwt(token, user, account) {
            if (user) {
                token.id = user.id
                return token
            }
            return token
        },
        async session(session, token) {
            session.user.id = token.id
            return session
        },
        signIn: async (profile, account, metadata) => {
            // console.info('we are here to see the callback\nP\nP');
            // console.log(profile, 'is the profile');
            // console.log(account, 'is the account');
            // console.log(metadata, 'is the metadata');
            const res = await fetch('https://api.github.com/user/emails', {
                headers: {
                    'Authorization': `token ${account.accessToken}`
                }
            })
            const emails = await res.json()
            if (!emails || emails.length === 0) {
                return
            }
            const sortedEmails = emails.sort((a, b) => b.primary - a.primary)
            profile.email = sortedEmails[0].email
        },
    }
})