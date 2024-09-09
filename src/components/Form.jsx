import { useState, useEffect } from "react"; // Make sure to import useEffect as well if you're using it
import axios from "axios"
import {useNavigate} from "react-router-dom"



function Form({type,id}){
    const navigate = useNavigate()
    const [data,setData] = useState({})

    const fetchProduct = async()=>{
        const response = await axios.get("https://66dd8f42f7bcc0bbdcde691a.mockapi.io/products/" + id)
        if(response.status === 200){
            setData(response.data)
        }
    }
    useEffect(()=>{
        if(type == "Edit"){
            fetchProduct()
        }
    },[])


    const handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value   OR
        const {name,value} = e.target
        // console.log(e.target.value, e.target.name)
        // console.log(name,value)


        //...data vanni object maa j jati data xa, jammai lai tetaki xordey
        // ani jsko name/key ko value chai name vanni maa j aayeko xa tesko thau maa value chai
        //jasto name vanni Productname vanni aai rako xa, usle kei kura chalayena(...data),
        //k matra chalayo vanda jaa nera key ko name ProductName xa, tesma lagera j value aako xa tei set gardey vaneko. 
        setData({
            ...data,
            [name] : value
        })
    }
    //console.log(data)
    const createProduct = async(e) => {
        e.preventDefault()//to stop the page from being refresh while submitting data. we are doing post but bu default form is submitted in get. So to prevent it.
        if(type === "Create"){
            const response = await axios.post("https://66dd8f42f7bcc0bbdcde691a.mockapi.io/products", data)
            // console.log(response);
            if(response.status === 201){
                navigate("/")
            }else{
                alert("Create vayena hau. ERROR AAYO !!")
            }
        }else{
            const response = await axios.put("https://66dd8f42f7bcc0bbdcde691a.mockapi.io/products/" +id, data)
            // console.log(response)
            if(response.status === 200){
                navigate("/product/" + id)
            }else{
                alert("Edit Vayena !!!!!")
            }
        }
      
    }
   


    return (
        <div className="bg-white border-black border-4 rounded-lg shadow relative m-10">

        <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">
                {type} product
            </h3>
            <button type="button" className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    
        <div className="p-6 space-y-6">
            <form onSubmit = {createProduct}>
                <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                    <input type="text" name="ProductName" id="product-name" className="shadow-sm bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" value={data.ProductName} placeholder="Apple Imac 27”" required="" onChange={handleChange} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                     <input type="text" name="productCategory" id="category" className="shadow-sm bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" value={data.productCategory} placeholder="Electronics" required="" onChange={handleChange}/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Brand</label>
                      <input type="text" name="ProductBrand" id="brand" className="shadow-sm bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" value={data.ProductBrand} placeholder="Apple" required="" onChange={handleChange}/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                       <label htmlFor="image" className="text-sm font-medium text-gray-900 block mb-2">Image</label>
                       <input type="text" name="productImage" id="image" className="shadow-sm bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" value={data.productImage}placeholder="https://example.com/image.png" required="" onChange={handleChange} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                       <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                       <input type="number" name="ProductPrice" id="price" className="shadow-sm bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" value={data.ProductPrice} placeholder="$2300" required="" onChange={handleChange} />
                </div>
                <div className="col-span-full">
                      <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
                      <textarea id="product-details" name="productDescription" rows="6" className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" value={data.productDescription} placeholder="Details" onChange={handleChange}></textarea>
                </div>

             </div>
           
        
    
        <div className="p-6 border-t border-gray-200 rounded-b">
            <button className="text-white bg-blue-700 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">{type === "Edit" ? "Edit" : "Create" }</button>
            </div>
        </form>
        </div>
    
    </div>
    )
}
export default Form