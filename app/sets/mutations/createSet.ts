import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const CreateSet = z.object({
  name: z.string(),
  userId: z.number(),
})

export default resolver.pipe(resolver.zod(CreateSet), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const set = await db.set.create({ data: input })

  return set
})
