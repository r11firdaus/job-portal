import user from "@/../dummy/userDummy"
import { NextResponse } from "next/server";

export function GET(req: Request) {
  // if (req.method == 'GET') {
  //   return new Response('Only', {
  //     status: 405,
  //   })
  // }

  const userData = user

  return NextResponse.json({ data: userData })
}
