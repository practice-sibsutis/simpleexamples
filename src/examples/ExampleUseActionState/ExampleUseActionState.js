import { useActionState, useState } from "react";
import { addToCart } from "./actions.js";

function AddToCartForm({itemID, itemTitle}) {
    const [message, formAction, isPending] = useActionState(addToCart, null);
    return (
        <form action={formAction}>
            <h2>{itemTitle}</h2>
            <input type="hidden" name="itemID" value={itemID} />
            <button type="submit">Add to Cart</button>
            {isPending ? "Loading..." : message}
        </form>
    );
}

export default function ExampleUseActionState() {
    return (
        <>
            <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
            <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
        </>
    )
}