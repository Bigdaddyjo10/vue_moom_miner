import { reactive } from 'vue'
import { Treat } from './models/Treat.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {Treat[]} Treats*/
  treats: [
    new Treat({
      name: 'Dog Treat',
      price: 10,
      addAmount: 5
    }),
    new Treat({
      name: 'Big Dog Treat',
      price: 50,
      addAmount: 25
    }),
    new Treat({
      name: 'Bigger Dog Treat',
      price: 100,
      addAmount: 50
    })
  ],
  money: 0
})
