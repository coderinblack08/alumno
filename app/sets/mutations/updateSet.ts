import { resolver } from "@blitzjs/rpc"
import { NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateSet = z.object({
  id: z.number(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateSet),
  resolver.authorize(),
  async ({ id, ...data }, ctx) => {
    let set = await db.set.findFirst({
      where: { id, userId: ctx.session.userId },
    })

    if (!set) throw new NotFoundError()

    set = await db.set.update({ where: { id }, data })
    return set
  }
)
