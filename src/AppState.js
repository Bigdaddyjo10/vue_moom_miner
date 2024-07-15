import { reactive } from 'vue'
import { UpGrades } from './models/UpGrades.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {UpGrades[]} UpGrades*/
  upGrades: [
    new UpGrades({
      name: 'Dog Treat',
      price: 10,
      addAmount: 20
    }),
    new UpGrades({
      name: 'Big Dog Treat',
      price: 50,
      addAmount: 25
    }),
    new UpGrades({
      name: 'Bigger Dog Treat',
      price: 100,
      addAmount: 50
    })
  ]
})
