    import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"



    function SingleProduct() {
        //we can use useparams hook when our route is dynamic. In our case, :id is dynamic:::/product/:id in app.jsx.
        //tyo id maa 1,2,3..... jati ni aauna sakxa
        //The work of useparams hook is:::. parameter maa kehi data aairako xa vani yesle linaa sakxa.
        
        //params lai log gareko:::
        // const haha = useParams()
        // console.log(haha);
        const {id} = useParams()
        const [product, setProduct] = useState({})//single product id herni bela data object maa aauxa, all product herni bela api bata data array maa aauxa.


        const navigate = useNavigate()

        
        const fetchProducts = async() => {
        const response = await axios.get("https://66dd8f42f7bcc0bbdcde691a.mockapi.io/products/" + id)
        if(response.status === 200){
            setProduct(response.data)
        }else{
            console.log("khoi k vayo")
        }
        //console.log(response);
        
    }
        

        const deleteMe = async () => {
        const response = await axios.delete('https://66dd8f42f7bcc0bbdcde691a.mockapi.io/products/' + id)
           //console.log(response);
        if(response.status === 200){
            //yaha link tag  halera navigate garna mildaina, hamile function bhitra bataa navigate garna paryo vani usenavigate hooks use garnu paryo.
            navigate("/")
        }else{
            alert("Error aayo hai !!!!")
        }
    }






        useEffect(()=>{
            fetchProducts()
        },[])
        return (
            <>
            <Navbar/>
            <div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={product.productImage} alt="Product Image" />
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                    {/* //yo link chai jun product maa click garxa tyo product ko 
                    //id url bar maa dekhauna ko lagi. */}
                    <Link to ={`/edit/${product.id}`}>
                    <button class="w-full bg-gray-900 dark:bg-green-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit Product</button>

                    </Link>
                    </div>
                    <div class="w-1/2 px-2">
                    {/* //yaha product ko id mathi banako deleteme function maa pass garako. */}
                    {/* <button onClick={() => deleteMe(product.id)} class= */}
                        <button onClick={deleteMe} class="w-full bg-gray-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Delete Product</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.ProductName}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {product.ProductBrand}
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span class="text-gray-600 dark:text-gray-300">${product.ProductPrice}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                        <span class="text-gray-600 dark:text-gray-300">{product.productCategory}</span>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {product.productDescription}. This is very intresting. I like it . very much. Once upon a time there
                    lived a clever fox inside the jungle. He one da went in search of food in the forest......Why do programmers prefer dark mode?
                    Because the light attracts bugs! 😄.....Why did the React component break up with its partner?
                    Because it found someone else to hook into! But don't worry, it handled the split with a clean useEffect. 😄
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

            </>
        )
    }
    export default SingleProduct