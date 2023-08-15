import React from "react";


function ProductList1 (){
    const srcimage=[{id:1,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",name:"earthen pot",price:"$90"},{id:2,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"},{id:3,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"},{id:4,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"},{id:5,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",name:"earthen pot",price:"$90"},{id:6,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"},{id:7,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"},{id:8,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"},{id:9,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",name:"earthen pot",price:"$90"},{id:1,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"},{id:1,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"},{id:1,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"},{id:2,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",name:"earthen pot",price:"$90"},{id:1,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"},{id:1,srclink:"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",name:"earthen pot",price:"$90"}]
  return(
<div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>
    <div className="flex flex-wrap">
    {srcimage.map((user)=>(<div className="w-1/3 p-4">
    <a href={user.id} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src={user.srclink} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" style={{width:"100%",height:"500px"}}></img>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{user.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{user.price}</p>
      </a>

    </div>))
    }
    </div>
    </div>
  </div>

);
};

export default ProductList1;