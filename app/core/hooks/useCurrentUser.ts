import { useQuery } from "@blitzjs/rpc"
import getCurrentUser from "app/users/queries/getCurrentUser"

export const useCurrentUser = () => {
  const [user] = useQuery(getCurrentUser, null, { suspense: false })
  return user
}
