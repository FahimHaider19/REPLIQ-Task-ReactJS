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

export default function ProductList() {
  return (
    <div className="flex flex-col max-w-7xl">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="table-auto min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Image</th>
                  <th scope="col" className="px-6 py-4">Product Name</th>
                  <th scope="col" className="px-6 py-4">Price</th>
                  <th scope="col" className="px-6 py-4">Category</th>
                  <th scope="col" className="px-6 py-4">Reviews</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product, index) => (
                  <tr
                    key={product.id}
                    className={`border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600`}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{product.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{product.price}</td>
                    <td className="whitespace-nowrap px-6 py-4">{product.category}</td>
                    <td className="whitespace-nowrap px-6 py-4">{product.reviews}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}



