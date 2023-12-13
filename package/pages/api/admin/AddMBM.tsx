// pages/api/user/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { createRouter } from "next-connect";
import jwt from "jsonwebtoken";
import addMBM from "../../../repository/addMBM";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  console.log("AddMBM: " + req.body.request);
  const response = await addMBM(req, res);
  return res.status(200).json(response);
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end("Data not found!");
  },
});
