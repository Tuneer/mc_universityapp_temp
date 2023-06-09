// pages/api/user/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { createRouter } from "next-connect";
import jwt from "jsonwebtoken";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(async (req, res, next) => {
  const start = Date.now();
  await next(); // call next in chain
  const end = Date.now();
  console.log(`Request took ${end - start}ms`);
});

  router.use("/dashboard", (request) => {
    if (!isAuthenticated(request)) {
      return NextResponse.redirect(new URL("/authenticate/login", request.url));
    }
    return NextResponse.next();
  });


  const isAuthenticated = (request:NextApiRequest):any =>{{
    return false
  }}

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end("Users not found!");
  },
});