
import Header from '@/components/Header';
import Singleproduct from '@/components/Singleproduct'
import { product } from '@/types/types';
import { client } from '@/sanity/lib/client';









export default async function Page({ params }: { params: { id: string } }) {

            // GROQ query to fetch data
            const query = `
              *[_type=='product']{
                id,
                description,
                name,
                stockLevel,
                discountPercentage,
                price,
                isFeaturedProduct,
                category,
                "imagePath": imagePath.asset->url
              }
            `;
            const data=await client.fetch(query)
            console.log(data)
        


   

    const selectedProduct = data?.find(
        (product: product) => product.id === params.id
    );

    if (!selectedProduct) {
        return <div>Product not found</div>; // Handle the case when no product is found
    }

    return (
        <>
            <Header />
            <Singleproduct
                ImageUrl={selectedProduct.imagePath}
                title={selectedProduct.name}
                description={selectedProduct.description}
                Cost={selectedProduct.price}
                prod={selectedProduct}
            />
        </>
    );
}
