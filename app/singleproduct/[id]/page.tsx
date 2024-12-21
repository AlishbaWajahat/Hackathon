import Header from '@/components/Header';
import Singleproduct from '@/components/Singleproduct'

import React from 'react'

let products = [{
    id: 1,
    title: "Trenton modular sofa_3",
    imageUrl: "/pic1(2nd sec).png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},
{
    id: 2,
    title: "Granite dining table with dining chair",
    imageUrl: "/pic2 (2nd sec).png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 3,
    title: "Outdoor bar table and stool",
    imageUrl: "/pic3(2nd sec) (2).png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 4,
    title: "Plain console with teak mirror",
    imageUrl: "/pic4(2nd sec).png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 5,
    title: "Grain coffee table",
    imageUrl: "/shop5.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 6,
    title: "Kent coffee table",
    imageUrl: "/shop6.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 7,
    title: "Round coffee table_color 2",
    imageUrl: "/shop7.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 8,
    title: "Round coffee table_color 2",
    imageUrl: "/shop8.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 9,
    title: "Plain console_",
    imageUrl: "/shop9.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 10,
    title: "Reclaimed teak Sideboard",
    imageUrl: "/shop10.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 11,
    title: "SJP_0825 ",
    imageUrl: "/shop11.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 12,
    title: "Bella chair and table",
    imageUrl: "/shop12.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 13,
    title: "Granite square side table",
    imageUrl: "/pic1(Home).png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 14,
    title: "Asgaard sofa",
    imageUrl: "/section3.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 15,
    title: "Maya sofa three seater",
    imageUrl: "/shop15.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
}, {
    id: 16,
    title: "Outdoor sofa set",
    imageUrl: "/shop16.png",
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},]



export default function Page({ params }: { params: { id: string } }) {
    const selectedProduct = products.find(
        (product) => product.id === Number(params.id)
    );

    if (!selectedProduct) {
        return <div>Product not found</div>; // Handle the case when no product is found
    }

    return (
        <>
            <Header />
            <Singleproduct
                ImageUrl={selectedProduct.imageUrl}
                title={selectedProduct.title}
                description={selectedProduct.description}
            />
        </>
    );
}
