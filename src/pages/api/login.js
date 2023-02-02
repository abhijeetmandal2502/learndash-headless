import { NextApiRequest, NextApiResponse } from "next";

const res = NextApiRequest;
const req = NextApiResponse;

export default function (req, res) {
    console.log(req.body)
    res.json({ num: Math.floor(Math.random() * 10) });
}