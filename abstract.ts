import AbstractFactory from "./factory/abstract_factory";

export function getInfoCard(factory: AbstractFactory) {
    const debitCard = factory.createProductA();
    return debitCard.usefulFunctionA();
};