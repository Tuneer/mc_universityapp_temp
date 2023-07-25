// pages/api/user/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { createRouter } from "next-connect";
import jwt from "jsonwebtoken";
import getIncomeBeforeAfterTax from "../../../repository/getIncomeBeforeAfterTax";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
  const country = await getIncomeBeforeAfterTax(req.query.id);
  return res.status(200).json(country);
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end("Data not found!");
  },
});
