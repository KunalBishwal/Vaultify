"use server"

import { clerkClient } from "@clerk/nextjs/server"

interface Card {
  cardNo: string
  expiryDate: string
  cvv: string
}

export async function addCardServer(cardNo: string, expiryDate: string, cvv: string, userId: string) {
  const client = await clerkClient()
  const user = await client.users.getUser(userId)
  const cards: Card[] = Array.isArray(user.privateMetadata.cards) ? user.privateMetadata.cards : []
  cards.push({ cardNo, expiryDate, cvv })

  await client.users.updateUserMetadata(userId, {
    privateMetadata: {
      cards: cards,
    },
  })
}

// export async function deleteCardServer(cardNo: string, userId: string) {
//   const client = await clerkClient()
//   const user = await client.users.getUser(userId)
//   let cards: Card[] = Array.isArray(user.privateMetadata.cards) ? user.privateMetadata.cards : []
//   cards = cards.filter((card) => card.cardNo !== cardNo)

//   await client.users.updateUserMetadata(userId, {
//     privateMetadata: {
//       cards: cards,
//     },
//   })
// }

// export async function updateCardServer(updatedCard: Card, userId: string) {
//   const client = await clerkClient()
//   const user = await client.users.getUser(userId)
//   let cards: Card[] = Array.isArray(user.privateMetadata.cards) ? user.privateMetadata.cards : []
//   cards = cards.map((card) => (card.cardNo === updatedCard.cardNo ? updatedCard : card))

//   await client.users.updateUserMetadata(userId, {
//     privateMetadata: {
//       cards: cards,
//     },
//   })
// }

