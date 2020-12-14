import AbstractDebitCard from "../products/abstract_debit_card";
import DebitCardProduct from "../products/debit_card_product";
import AbstractFactory from "./abstract_factory";

export default class DebitCardFactory implements AbstractFactory {
    public createProductA(): AbstractDebitCard {
        return new DebitCardProduct();
    }
}