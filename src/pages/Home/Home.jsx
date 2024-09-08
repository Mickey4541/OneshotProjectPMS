import axios from "axios"
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"


function Home() {
    //here we use usestate to store data coming from api,
    //here, we make usestate([]). [] is a empty container
    //to store the data.
    //yaha,,,data hernu paryo vani product and update garnupare setProduct garni.
    const [products,setProducts] = useState([])



    const fetchProducts = async() => {
    const response = await axios.get('https://66dd8f42f7bcc0bbdcde691a.mockapi.io/products')
    //console.log(response);
    //console.log(response.status);

    if(response.status === 200){
        setProducts(response.data)
    }
    
    }
    useEffect(()=>{
        fetchProducts()
       // console.log("haha");//yaha log garepaxi, console maa 2 patak haha log hunxa, yo sabai react ko strict mode ley 
        //gardaa ho. yo main.jsx file bhitra hunxa, yeslai faldidaa pani vayo. yo strict mode vaneko development phase maa 
        //error catch garna ko lagi ho. Strict mode tag bhitra <App/> pani hunxa teslai chai flanu hudaina,
        
    },[])//yaha []yo vaneko jaba user ley website load garxa yaa website open garxa, tei bela call hunxa.


    console.log(products); //to check if the data from api comes or not.
    

    return (
        <>
        <Navbar />
        <div className="flex flex-wrap justify-between mt-10 m-10">
        
        {/*  to show let say 6 cards in interface, tei <card/> lai copy paste garnu vanda we use Higher order function (HOF) map. */}
        {/* Map is a HOF and it takes function inside it. */}

        {
            products.map((product) => {
                return (
                    <Card productprops ={product} />
                )
            })
        }
        </div>

        </>
    )
}
export default Home