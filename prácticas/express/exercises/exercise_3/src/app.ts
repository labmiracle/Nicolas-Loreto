import express from "express";
import { serviceConfig } from "./settings";

const port: number | string = process.env.PORT || serviceConfig.port;

interface IItem {
    id: string;
    name: string;
    price: number;
}

const app = express();

app.use(express.json());

const shopList: IItem[] = [
    {
        id: "1",
        name: "Laptop",
        price: 1000,
    },
    {
        id: "2",
        name: "Wireless Mouse",
        price: 20,
    },
    {
        id: "3",
        name: "Water Bottle",
        price: 3,
    },
    {
        id: "4",
        name: "T-shirt",
        price: 5,
    },
    {
        id: "5",
        name: "Headphones",
        price: 50,
    },
    {
        id: "6",
        name: "Mechanical Keyboard",
        price: 80,
    },
];

const insert = (item: IItem) => {
    shopList.push(item);
};

app.get("/items", (req, res) => {
    return res.json(shopList);
});

app.post("/items", (req, res) => {
    try {
        insert(req.body);
        res.status(201).end("Item created");
    } catch {
        res.status(500).send("error server");
    }
});

// get by id

app.get("/items/:id", (req, res) => {
    const param = req.params.id;

    const foundIndex = shopList.findIndex(item => item.id === param);

    if (foundIndex != -1) {
        res.json({
            name: shopList[foundIndex].name,
            price: shopList[foundIndex].price,
        });
    } else {
        res.status(404).end("Item not found");
    }
});

// edit

app.patch("/items/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const foundIndex = shopList.findIndex(item => item.id === id);

    if (foundIndex !== -1) {
        shopList[foundIndex].name = name;
        shopList[foundIndex].price = price;
        return res.json(shopList[foundIndex]);
    } else {
        return res.status(404).end("Item not found");
    }
});

app.delete("/items/:id", (req, res) => {
    const param = req.params.id;

    const foundIndex = shopList.findIndex(item => item.id === param);

    if (foundIndex != -1) {
        shopList.splice(foundIndex, 1);
        return res.end("Deleted item");
    }
    return res.status(500).send("Error server");
});

app.listen(port, () => {
    console.log("server started on port:", port);
});
