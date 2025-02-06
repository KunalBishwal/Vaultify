"use server"

import { clerkClient } from '@clerk/nextjs/server'

interface Card {
    cardNo : string,
    expiryDate : string,
    cvv : string,
}

export async function addCardServer(cardNo: string, expiryDate: string, cvv: string,userId:string) {


  const client = await clerkClient()
  const user = await client.users.getUser(userId)
  let cards: Card[] = []
  if(Array.isArray(user.privateMetadata.cards)){
     cards = user.privateMetadata.cards || []
     cards.push({cardNo,expiryDate,cvv})      
  }

  await client.users.updateUserMetadata(userId, {
    privateMetadata: {
      cards: cards
    },
  })
}