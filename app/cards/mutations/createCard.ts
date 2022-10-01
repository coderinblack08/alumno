import { LexoRank } from "lexorank"
import { resolver } from "@blitzjs/rpc"
import { AuthorizationError } from "blitz"
import db from "db"
import { z } from "zod"

const CreateCard = z.object({
  term: z.string().nullish(),
  definition: z.string().nullish(),
  setId: z.number(),
  rank: z.string().optional(),
})

export default resolver.pipe(resolver.zod(CreateCard), resolver.authorize(), async (input, ctx) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const set = await db.set.findFirst({ where: { id: input.setId } })

  if (set?.userId !== ctx.session.userId) {
    throw new AuthorizationError()
  }

  const card = await db.card.create({
    data: { rank: LexoRank.middle().toString(), userId: ctx.session.userId, ...input },
  })

  return card
})
