'use client';
import { Button } from "@/components/ui/button";

import Image from 'next/image';
import {
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

function Products() {
  const products = [
    {
      id: 1,
      img: '/chair.png',
      name: 'Cantilever Chair',
      code: 'Y523201',
      price: '$42.00',
    },
    {
      id: 2,
      img: '/chair2.png',
      name: 'Cantilever Chair',
      code: 'Y523201',
      price: '$42.00',
    },
    {
      id: 3,
      img: '/chair3.png',
      name: 'Cantilever Chair',
      code: 'Y523201',
      price: '$42.00',
    },
    {
      id: 4,
      img: '/chair4.png',
      name: 'Cantilever Chair',
      code: 'Y523201',
      price: '$42.00',
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-5">
      {/* Heading */}
      <h2 className="text-black text-3xl md:text-4xl text-center mb-12 font-bold">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Product Image with Icons */}
            <div className="w-full bg-gray-100 flex justify-center items-center relative overflow-hidden h-[300px] sm:h-[350px] md:h-[400px]">
              {/* Product Image */}
              <Image
                src={product.img}
                width={200}
                height={250}
                alt={product.name}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
              />

              {/* Icons (Wishlist, View Details, and Zoom) */}
              <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Wishlist Icon */}
                <Button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <HeartIcon className="w-5 h-5 text-gray-700" />
                </Button>
                {/* Magnifying Glass Icon */}
                <Button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-700" />
                </Button>
                {/* Cart Icon */}
                <Button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <ShoppingCartIcon className="w-5 h-5 text-gray-700" />
                </Button>
              </div>

              {/* Add to Cart Button */}
              <div className="absolute bottom-0 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full py-3 text-sm bg-green-500 hover:bg-green-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <div className="flex justify-center items-center gap-1 mt-2">
                <span className="text-green-500 text-2xl">●</span>
                <span className="text-pink-500 text-2xl">●</span>
                <span className="text-blue-500 text-2xl">●</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Code - {product.code}</p>
              <p className="mt-1 text-base font-semibold text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
