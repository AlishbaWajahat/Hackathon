"use client"

import Image from 'next/image'
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import Card2 from "@/components/Card2";
import { product } from '@/types/types';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { RiSearchLine } from "react-icons/ri";
import { Slider } from "@/components/ui/slider"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Shop() {

    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [filterMinPrice, setFilterMinPrice] = useState<number>(0);
    const [filterMaxPrice, setFilterMaxPrice] = useState<number>(0);
    const [isOpen, setisOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate an API call with a delay
        setTimeout(() => {
            setIsLoading(false); // Set loading to false once data is fetched.
        }, 1000); // Simulated 2-second delay.
    }, []);
    function filterPanel() {
        if (isOpen === false) {
            setisOpen(true)
        }
        else {
            setisOpen(false)
        }
    }


    // state variable to store fetched data from sanity
    const [products, setProducts] = useState<product[] | undefined>(undefined);
    const [allProducts, setAllProducts] = useState<product[]>([]);


    // state variable to store selected category value
    const [Categoryvalue, setCaterogyvalue] = useState<string>('All');
    const categoryHandling = (event: { target: { value: string } }) => {
        setCaterogyvalue(event.target.value)
    }
    // state variable to store searched value
    const [typedSearch, settypedsearch] = useState<string>('');
    const [Searchedvalue, setSearchedvalue] = useState<string>('');
    const SearchHandling = (event: { target: { value: string } }) => {
        settypedsearch(event.target.value)

    }
    // To filter data
    useEffect(() => {
        if (!Searchedvalue) {
            if (Categoryvalue === "All") {
                setProducts(allProducts.filter(item => item.price >= filterMinPrice && item.price <= filterMaxPrice))
            } else {
                setProducts(allProducts.filter(item => item.category.toLowerCase() === Categoryvalue.toLowerCase() && (item.price >= filterMinPrice && item.price <= filterMaxPrice)));
            }

        } else if (Searchedvalue) {
            if (Categoryvalue === "All") {
                setProducts(allProducts.filter(item =>
                    (item.category.toLowerCase().includes(Searchedvalue.toLowerCase()) ||
                        item.name.toLowerCase().includes(Searchedvalue.toLowerCase()) ||
                        item.description.toLowerCase().includes(Searchedvalue.toLowerCase())) && (item.price >= filterMinPrice && item.price <= filterMaxPrice)
                ))
            } else {
                setProducts(allProducts.filter(item => item.category.toLowerCase() === Categoryvalue.toLowerCase() &&
                    (item.category.toLowerCase().includes(Searchedvalue.toLowerCase()) ||
                        item.name.toLowerCase().includes(Searchedvalue.toLowerCase()) ||
                        item.description.toLowerCase().includes(Searchedvalue.toLowerCase())) && (item.price >= filterMinPrice && item.price <= filterMaxPrice)
                ));
            }
        }

    }, [Categoryvalue, allProducts, Searchedvalue, filterMinPrice, filterMaxPrice]);


    // to store user typing data into searchedvalue after clicking search icon
    function searchClickHandler() {
        setSearchedvalue(typedSearch)

    }
    // to clear searched value when user removes typed data
    useEffect(() => {
        if (!typedSearch) {
            setSearchedvalue('')
        }
    }, [typedSearch])

    // to search product in selected category
    useEffect(() => {
        settypedsearch('')
    }, [Categoryvalue])


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

    // fetching data from sanity 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await client.fetch(query);
                setProducts(data);  // Set products initially
                setAllProducts(data)
                if (data.length > 0) {
                    const min = Math.min(...data.map((product: product) => product.price));
                    const max = Math.max(...data.map((product: product) => product.price));
                    setMinPrice(min);
                    setMaxPrice(max);
                    setFilterMinPrice(min);
                    setFilterMaxPrice(max);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts(); // Call fetch function to load products when the component mounts
    }, []);  // Empty dependency array ensures this only runs once
    return (
        <>
            <div className="max-w-[3000px] h-[70px] bg-[#FAF4F4] mt-8 font-poppin flex items-center lg:text-xl text-base lg:px-12 px-4 gap-6">
                {/* Filter and View Section */}
                <div className="h-[55px] w-full sm:justify-around justify-center flex sm:px-4 gap-6">
                    <div className="flex sm:gap-6 gap-4 items-center sm:px-0 px-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="flex gap-2 items-center  cursor-pointer" onClick={filterPanel}>
                                        <div className="w-[16px] h-[16px] relative">
                                            <Image src={"/Vector.png"} alt="filter" fill />
                                        </div>
                                        <p>Filter</p>
                                    </div>

                                </TooltipTrigger>
                                <TooltipContent className='w-[150px] h-[30px] text-md justify-center flex items-center font-poppin '>
                                    <p>Set price range</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <HiViewGrid className='xl:block hidden' />
                        <BsViewList className='xl:block hidden' gap-4 />

                    </div>


                    {/* search bar */}
                    <div className='sm:flex hidden xl:w-[600px] md:w-[450px] w-[300px] h-[50px] sm:gap-4 gap-3 bg-[#FBEBB5] rounded-xl items-center justify-center mx-auto'>
                        <input
                            value={typedSearch}
                            onChange={SearchHandling}
                            placeholder='Search here'
                            type="text"
                            className='xl:w-[500px] md:w-[350px] w-[220px]  h-[40px] rounded-xl pl-4 border-none focus:outline-none focus:ring-0' />
                        <div><RiSearchLine onClick={searchClickHandler} className='cursor-pointer' /></div>
                    </div>
                    {/* category */}
                    <div className="flex gap-6">
                        <div className='flex gap-3 items-center '>
                            <p>Category</p>
                            <select
                                id="dropdown"
                                className="border rounded px-3 py-2"
                                onChange={categoryHandling}
                            >
                                <option value="All">All</option>
                                <option value="Bed">Beds</option>
                                <option value="Chair">Chairs</option>
                                <option value="Sofa">Sofas</option>
                                <option value="Table">Tables</option>
                            </select>

                        </div>

                    </div>
                </div>
            </div>
            {/* second div */}
            <div className='max-w-[3000px] h-[50px] sm:hidden block '>
                {/* search bar */}
                <div className='sm:w-[600px] w-[300px] h-[50px] flex gap-4 bg-[#FBEBB5] rounded-xl items-center justify-center mx-auto'>
                    <input
                        value={typedSearch}
                        onChange={SearchHandling}
                        placeholder='Search here'
                        type="text"
                        className='sm:w-[500px] w-[250px]  h-[40px] rounded-xl pl-4 border-none focus:outline-none focus:ring-0' />
                    <div><RiSearchLine onClick={searchClickHandler} className='cursor-pointer' /></div>
                </div>

            </div>
            {/* slider */}
            <div className={` ${isOpen ? 'block' : 'hidden'} border-2 border-[#FBEBB5] mx-auto sm:text-lg text-sm sm:w-[400px] w-[300px] p-4 flex flex-col sm:gap-4 gap-3 rounded-md mt-4 font-poppin bg-[#FFF9E5] `}>

                <p className=' text-gray-500 text-center'>Set the price range to jump into you budget-friendly world!</p>
                <label>Min: ${filterMinPrice}</label>
                <Slider
                    min={minPrice}
                    max={maxPrice}
                    step={10}
                    value={[filterMinPrice]}
                    onValueChange={(value) => setFilterMinPrice(value[0])}
                    className="w-full cursor-pointer"
                />

                <label>Max: ${filterMaxPrice}</label>
                <Slider
                    min={minPrice}
                    max={maxPrice}
                    step={10}
                    value={[filterMaxPrice]}
                    onValueChange={(value) => setFilterMaxPrice(value[0])}
                    className="w-full cursor-pointer"
                />
            </div>

            {/* Product List Section */}
            <div className="flex max-w-[3000px] items-center justify-center flex-col pt-12 md:pt-16 font-poppin">
                <div className="flex gap-12 flex-wrap w-[90%] justify-center">
                    {isLoading ? <p>Loading products..</p> :
                        products && products.length > 0 ? (
                            products.map((product: product) => {
                                return (
                                    <Card2
                                        key={Number(product.id)}
                                        imageUrl={product.imagePath}
                                        text={product.name}
                                        id={product.id}
                                        Product={product}
                                        Cost={product.price}
                                    />
                                );
                            })
                        ) : (
                            <p className='text-red-500 text-lg'>No Search Results</p>
                        )}
                </div>
                <div className="h-[60px] flex sm:gap-8 gap-4 text-xl sm:mb-16 mb-12 sm:mt-24 mt-12">
                    <div className="p-4 sm:p-6 flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FBEBB5]">1</div>
                    <div className="p-4 sm:p-6 flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FFF9E5]">2</div>
                    <div className="p-4 sm:p-6 flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FFF9E5]">3</div>
                    <div className="p-4 sm:p-6 font-light flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FFF9E5]">Next</div>
                </div>
            </div>
        </>
    )
}


