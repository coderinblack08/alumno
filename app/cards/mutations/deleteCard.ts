import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const DeleteCard = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeleteCard),
  resolver.authorize(),
  async ({ id }, ctx) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const card = await db.card.deleteMany({ where: { id, userId: ctx.session.userId } })

    return card
  }
)
