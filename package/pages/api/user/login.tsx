// pages/api/user/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { createRouter } from "next-connect";
import apiRequest from "../../../repository/user";
import jwt from "jsonwebtoken";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(async (req, res, next) => {
  const start = Date.now();
  await next(); // call next in chain
  const end = Date.now();
  console.log(`Request took ${end - start}ms`);
});

router.post(async(req, res) => {
  console.log(" Request data: "+req.body.userName)
  console.log(" Request data: "+req.body.userRole)
  console.log(" Request data: "+req.body.userPassword)
    const user = await apiRequest(req,res);
    console.log(" response data: "+JSON.stringify(user))

    if (user!=undefined||user!=null) {
      console.log(" response data: 2 "+user)
      return res.status(200).json({user: user,token:jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        userid: user.userid
      }, 'secret')});
    }else{
      return res.status(500).json({'message':'User not found!'});
    }
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