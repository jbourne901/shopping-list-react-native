const uuid = require("uuid");

export interface IShoppingItem {
    id: string;
    text: string;
}

export const constructItem = (txt: string) => {
    const it: IShoppingItem = {
        id: uuid(),
        text: txt
    };
    return it;
}

export const mockItems: IShoppingItem[] = 
    "Milk,Eggs,Bread,Juice".split(",").map(txt => constructItem(txt));

