const data = [
  {
    id: 1,
    name: "Headset",
    price: "$60.00",
    category: "Accessories",
    reviews: 4,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!"
  },
  {
    id: 2,
    name: "Dove Cream",
    price: "21.15",
    category: "Skin Care",
    reviews: 7,
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!"
  },
  {
    id: 3,
    name: "Nike Shoes",
    price: "70.00",
    category: "Foot Wear",
    reviews: 14,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!"
  },
  {
    id: 4,
    name: "Apple Watch",
    price: "420.00",
    category: "Accessories",
    reviews: 12,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!"
  },
  {
    id: 5,
    name: "Water Pot",
    price: "16.00",
    category: "Daily Product",
    reviews: 15,
    image: "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!"
  },
  {
    id: 6,
    name: "DSLR Lens",
    price: "2100.00",
    category: "Accessories",
    reviews: 2,
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!"
  },
  {
    id: 7,
    name: "Watch",
    price: "120.00",
    category: "Fashion",
    reviews: 7,
    image: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!"
  },
  {
    id: 8,
    name: "Black Sunglass",
    price: "18.40",
    category: "Fashion",
    reviews: 8,
    image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!"
  }
];

function error()
{
  return(
    <>
        <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="absolute">
                        <div class="">
                            <h1 class="my-2 text-gray-800 font-bold text-2xl">
                                Looks like you've found the
                                doorway to the great nothing
                            </h1>
                            <p class="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
    </>
  )
}

const product =  async({params}) => {
  let p = data.filter(product => product.id==params.id)[0];
  if(!p) return error();

  return(
    <>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={p.image} />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">{p.category}</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{p.name}</h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">{p.reviews} Reviews</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class="leading-relaxed">{p.description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div class="flex">
                  <span class="mr-3">Color</span>
                  <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Size</span>
                  <div class="relative">
                    <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">${p.price}</span>
                <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to cart</button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default product;