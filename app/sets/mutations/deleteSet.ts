import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const DeleteSet = z.object({
  id: z.number(),
});

export default resolver.pipe(
  resolver.zod(DeleteSet),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const set = await db.set.deleteMany({ where: { id } });

    return set;
  }
);
