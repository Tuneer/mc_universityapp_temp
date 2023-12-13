// pages/api/user/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { createRouter } from "next-connect";
import jwt from "jsonwebtoken";
import deleteRow from "../../../repository/deleteRow";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const response = await deleteRow(req, res);
  return res.status(200).json(response);
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end("Data not found!");
  },
});
