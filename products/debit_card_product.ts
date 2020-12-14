import AbstractDebitCard from "./abstract_debit_card";

export default class DebitCardProduct implements AbstractDebitCard {
    public usefulFunctionA(): string {
        return 'The result of the product A1.';
    }
}