import { resolver } from "@blitzjs/rpc"
import { LexoRank } from "lexorank"
import db from "db"
import { z } from "zod"

const CreateSet = z.object({
  name: z.string(),
  rank: z.string().optional(),
  parentId: z.number().optional(),
})

export default resolver.pipe(resolver.zod(CreateSet), resolver.authorize(), async (input, ctx) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const set = await db.set.create({
    data: { rank: LexoRank.middle().toString(), userId: ctx.session.userId, ...input },
  })

  return set
})
