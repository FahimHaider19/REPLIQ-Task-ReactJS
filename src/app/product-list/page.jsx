import AddProduct from "./addProduct";

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
    category: "Daily data",
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

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <AddProduct />
        <div className="px-4 md:px-0  ">
          <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Reviews
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Price
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((product) => (
                  <tr key={product.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {product.id}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <img src={product.image} className="w-20 rounded-md" />
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      {product.name}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {product.category}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {product.reviews}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {product.price}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a
                        href="#"
                        className="pr-2 text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {product.name}</span>
                      </a>
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Delete<span className="sr-only">, {product.name}</span>
                      </a>
                    </td>
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
