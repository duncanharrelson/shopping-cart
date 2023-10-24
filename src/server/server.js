//Stripe keys

//Stripe test key
const stripe_key = "YOUR_STRIPE_KEY"

//product test keys.  used in src/productsStore.js
// Coffee: price_1O4rmJHfk6TyDeClLTYv0sSb
// Sunglasses: price_1O4rn5Hfk6TyDeClasbe9Z5z
// Camera:  price_1O4rntHfk6TyDeClybQ2XCHh

const express = require('express');
let cors = require('cors');
const stripe = require('stripe')(stripe_key);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async(req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */

    //Stripe calls items lineItems in the API call
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        //organize data how Stripe wants with price as id
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    })

    res.send(JSON.stringify({
        url: session.url
    }))
})

app.listen(4000, () => console.log("Listening on port 4000"))