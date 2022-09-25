import { passportAuth } from "@blitzjs/auth"
import { Strategy as GitHubStrategy } from "passport-github2"
import { api } from "app/blitz-server"
import db from "db"

export default api(
  passportAuth({
    successRedirectUrl: "/",
    errorRedirectUrl: "/",
    strategies: [
      {
        authenticateOptions: { scope: ["user:email"] },
        strategy: new GitHubStrategy(
          {
            clientID: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            scope: ["user:email"],
            callbackURL:
              process.env.NODE_ENV === "production"
                ? "https://myapp.com/api/auth/github/callback"
                : "http://localhost:3000/api/auth/github/callback",
          },
          async function (_token, _tokenSecret, profile, done) {
            const email = profile.emails && profile.emails[0]?.value

            console.log(profile)

            if (!email) {
              return done(new Error("GitHub OAuth response doesn't have email."))
            }

            const user = await db.user.upsert({
              where: { email },
              update: { email },
              create: { email, name: profile.displayName, image: profile.profileUrl },
            })

            const publicData = { userId: user.id, roles: [user.role], source: "github" }
            done(undefined, { publicData })
          }
        ),
      },
    ],
  })
)
