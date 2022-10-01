import { resolver } from "@blitzjs/rpc"
import { NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateCard = z.object({
  id: z.number(),
  term: z.string().optional(),
  definition: z.string().optional(),
  setId: z.number().optional(),
  parentId: z.number().optional(),
  rank: z.string().optional(),
})

export default resolver.pipe(
  resolver.zod(UpdateCard),
  resolver.authorize(),
  async ({ id, ...data }, ctx) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    let card = await db.card.findFirst({ where: { id, userId: ctx.session.userId } })

    if (!card) throw new NotFoundError()

    card = await db.card.update({ where: { id }, data })

    return card
  }
)
