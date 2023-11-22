import { auth } from "auth"
import { unstable_noStore as noStore } from "next/cache"

export const dynamic = 'force-dynamic'

export const GET = auth((req) => {
  noStore()
  if (req.auth) {
    return Response.json({ data: "Protected data" })
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 })
}) as any // TODO: Fix `auth()` return type
