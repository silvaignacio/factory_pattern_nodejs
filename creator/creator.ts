abstract class Creator {

    public abstract factoryMethod(): Card;


    public getInfoCard(): string {
        // Call the factory method to create a Product object.
        const card = this.factoryMethod();
        // Now, use the product.
        return `Creator: The same creator's code has just worked with ${card.getInfo()}`;
    }
}

export default Creator;