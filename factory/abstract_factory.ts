import AbstractDebitCard from "../products/abstract_debit_card";

export default interface AbstractFactory {
    createProductA(): AbstractDebitCard;
}
