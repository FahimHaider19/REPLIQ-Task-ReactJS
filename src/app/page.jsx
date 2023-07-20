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


export default function Cart() {

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {data.map((product) => (
            <div key={product.id} class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href={`/product/${product.id}`} class="block relative h-48 rounded overflow-hidden">
                <img
                  alt={product.name}
                  class="object-cover object-center w-full h-full block"
                  src={product.image}
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p class="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
