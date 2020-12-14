import { getInfoCard } from "./abstract";
import DebitCardFactory from "./factory/debit_card_factory";

console.log(getInfoCard(new DebitCardFactory()));