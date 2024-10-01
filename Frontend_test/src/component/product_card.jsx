import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

function Product_card({ _id, nom, prix, description, image, categorie }) {
 return (
  <div key={_id} className="w-full p-4">
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl duration-500 h-full flex flex-col">
      <div className="cursor-pointer">
        <img src={image} alt={nom} className="w-full h-auto object-contain max-h-48" />
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-gray-400 uppercase text-xs">{categorie}</span>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-black mt-1">{nom}</h3>
            <p className="text-md text-black my-2 line-clamp-2">
              {description.length > 65 ? description.substring(0, 65) + "..." : description}
            </p>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <p className="text-lg font-semibold text-black">${prix.toFixed(2)}</p>

          <button className="ml-auto flex items-center rounded-3xl text-md py-2 px-3 bg-[#9b0656] text-[#feeef6] hover:text-[#9b0656] border-[#feeef6] hover:bg-[#feeef6] font-semibold">
            <FaCartPlus className="mr-2" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

}

export default Product_card;
