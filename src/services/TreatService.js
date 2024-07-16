import { AppState } from "../AppState.js";


class TreatService {
  purchaseTreat(treat) {
    console.log(AppState.money, '👻');
    if (AppState.money <= treat.price) return
    console.log('🍔');
    AppState.money -= treat.price
    const treats = AppState.treats
    treats.forEach(treat => treat.price += treat.addAmount)


  }
}

export const treatService = new TreatService()
