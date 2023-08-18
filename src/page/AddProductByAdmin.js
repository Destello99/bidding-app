import React, { useState } from 'react'
import productService from "../services/productServices"
const AddProductByAdmin = () => {

    const[productName,setProductName] = useState('');
    const[price,setPrice] = useState('');
    const[description,setDescriptio] = useState('');
    const[category,setCategory] = useState('')
    const[image,setImage] = useState(null);

    const options =[
      {key:"Painting" ,label:"Painting"},
      {key:"Jewellery" ,label:"Jewellery"},
      {key:"Art and Craft" ,label:"Art and Craft"},
      {key:"Antique" ,label:"Antique"},
    ]

    const saveProduct = (p)=>{
        p.preventDefault();


    const product = {
        productName,
        price,
        description,
        category,
        image
    };
    // drop down list
    


    
    productService.createProduct(product).
    then((response) =>{
        console.log("Product adde successfully"+ product);}).
        catch((error)=>{console.log(error.response)})
    
   
};

  return (
    <>
    
<section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 className="text-xl font-bold text-white capitalize dark:text-white">Product Information</h1>
    <form encType='multipart/form-data'>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-white dark:text-gray-200" htmlFor="productName">Name of Product</label>
                <input id="productName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value = {productName} onChange={(p)=>setProductName(p.target.value)}></input>
            </div>

            <div>
                <label className="text-white dark:text-gray-200" htmlFor="price">Price</label>
                <input id="price" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={price} onChange={(p)=>setPrice(p.target.value)}></input>
            </div>

            

            
            
            <div>
                <label className="text-white dark:text-gray-200" htmlFor="category">Category</label>
                <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={category} onChange={(p)=>setCategory(p.target.value)}>
                    {/* <option>Painting</option>
                    <option>Jewellery</option>
                    <option>Art and Craft</option>
                    <option>Antique</option> */}
                    {
                      options.map((option)=>(
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))
                    }
                </select>
            </div>
            {/* <div>
                <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Range</label>
                <input id="range" type="range" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
            </div> */}
            <div>
                <label className="text-white dark:text-gray-200" htmlFor="date">Date</label>
                <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></input>
            </div>

            
            <div>
                <label className="text-white dark:text-gray-200" htmlFor="decription">Description</label>
                <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" rows={5}
                value={description} onChange={(p)=>setDescriptio(p.target.value)}></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span className="">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" ></input>
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
<section>
    <br /><br /><br />
</section>

</>
  )
}

export default AddProductByAdmin