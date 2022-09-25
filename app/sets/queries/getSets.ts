import { paginate } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db, { Prisma } from "db";

interface GetSetsInput
  extends Pick<Prisma.SetFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetSetsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: sets,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.set.count({ where }),
      query: (paginateArgs) =>
        db.set.findMany({ ...paginateArgs, where, orderBy }),
    });

    return {
      sets,
      nextPage,
      hasMore,
      count,
    };
  }
);
