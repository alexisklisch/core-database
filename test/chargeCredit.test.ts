import { db, eq, schema } from '../src/index'

const userId = 'asdfg-12345-asdfgx'
await db.transaction(async (trx) => {
  // Busca los créditos del usuario
  let credits = await trx.query.creditsSchema.findFirst({
    where: eq(schema.creditsSchema.userId, userId)
  })

  // Si no existen, crea una fila nueva con un saldo inicial (por ejemplo, 0)
  if (!credits) {
    const [newCredits] = await trx.insert(schema.creditsSchema)
      .values({
        userId,
      })
      .returning()
    credits = newCredits
  }

  // Inserta la carga (charge) de créditos
  const [{ newChargeQ }] = await trx.insert(schema.creditChargesSchema)
    .values({
      chargeType: 'promo',
      creditId: credits.creditId,
      quantity: 10,
      unitPrice: 0.36,
    }).returning({ newChargeQ: schema.creditChargesSchema.quantity })

  // Actualiza la cantidad de créditos sumándole la nueva carga
  await trx.update(schema.creditsSchema)
    .set({
      quantity: credits.quantity! + newChargeQ!
    })
    .where(eq(schema.creditsSchema.creditId, credits.creditId))
})