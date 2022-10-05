import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../utils/prisma'

function getUserFromRequest(req: NextApiRequest){
  const token = req.cookies.token
}

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}) {
  const user = getUserFromRequest(req)

  return {req, res, prisma}
}

export type Context = ReturnType<typeof createContext>