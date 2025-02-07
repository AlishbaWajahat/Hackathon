

import { product } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Create a customer in Stripe
        // const customer = await stripe.customers.create({
        //     email: data.email,
        //     address: {
        //         postal_code: "1234",
        //         city: "Karachi",
        //         country: "Pakistan",
        //     },
        //     name: data.name,
        // });
        // 🔥 Create line items from cart
        const line_items = data.cart.map((item: product) => ({
            quantity: item.quantity,
            price_data: {
                currency: "USD",
                unit_amount: convertToSubcurrency(item.price), // Already in cents from frontend
                product_data: {
                    name: item.name,
                },
            },
        }));

        // Create a checkout session
        const checkOutSession = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            // customer: customer.id,
            mode: "payment",
            success_url: `http://localhost:3000/success`,
            cancel_url: `http://localhost:3000/cancel`,
            line_items: line_items
        });

        return NextResponse.json(
            { msg: "Checkout session created", url: checkOutSession.url },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

