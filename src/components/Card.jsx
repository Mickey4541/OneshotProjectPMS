import { Link } from "react-router-dom"

function Card({productprops}){
    return (
        //yesle jun product/card maa click garxau url maa tesko id pani dekhauxa.
        <Link to={`/product/${productprops.id}`}>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={productprops.productImage} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{productprops.ProductName}</div>
            <p className="text-gray-700 text-base">
                {productprops.productDescription}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{productprops.ProductBrand}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{productprops.productCategory}</span>
        </div>
        </div>
        </Link>
    )
}
export default Card