import { PrismaClientKnownRequestError }  from '@prisma/client/runtime'
import * as trpc from '@trpc/server'
import { TRPCError } from '@trpc/server'
import { createUserOutputSchema, createUserSchema, requestOtpSchema } from '../../schema/user.schema'
import { createRouter } from '../createRouter'
import { resolve } from 'path'

export const userRouter = createRouter().mutation('register-user', {
    input: createUserSchema,
    async resolve({ctx, input }) {
      const { email, name } = input
      
      try {
        const user = await ctx.prisma.user.create({
            data: {
                email,
                name,  
            },
          })
          
          return user
    }catch(e) {
      if(e instanceof PrismaClientKnownRequestError){
        if(e.code === 'P2002'){
          throw new trpc.TRPCError({
            code: 'CONFLICT',
            message: 'User already exist',
          })
        }
      }

      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Something went wrong'
      })
    }
  },
}).mutation('request.otp', {
  input: requestOtpSchema,
  async resolve( input , ctx ){
    const { email, redirect } = input

    const user = await ctx.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if(!user){
      throw new TRPCError({
        code: "NOT_FOUND",
        message: 'User not found'
      })
    }

    const token = await ctx.prisma.loginToken.create({
      data: {
        redirect,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    })

  return true
  },
})
