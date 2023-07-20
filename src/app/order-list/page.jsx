'use client'
import { Disclosure, Transition } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const orders = [
  {
    id: 1,
    customerName: "ABCD Watson",
    products: [
      {
        product: {
          id: 1,
          name: "Headset",
          price: "$60.00",
          category: "Accessories",
          reviews: 4,
          image:
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!",
        },
        quantity: 2,
      },
      {
        product: {
          id: 2,
          name: "Dove Cream",
          price: "21.15",
          category: "Skin Care",
          reviews: 7,
          image:
            "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!",
        },
        quantity: 1,
      },
      {
        product: {
          id: 3,
          name: "Nike Shoes",
          price: "70.00",
          category: "Foot Wear",
          reviews: 14,
          image:
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!",
        },
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    customerName: "EFGH Watson",
    products: [
      {
        product: {
          id: 4,
          name: "Apple Watch",
          price: "420.00",
          category: "Accessories",
          reviews: 12,
          image:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!",
        },
        quantity: 2,
      },
      {
        product: {
          id: 5,
          name: "Water Pot",
          price: "16.00",
          category: "Daily Product",
          reviews: 15,
          image:
            "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis facere debitis doloribus natus iure quam ducimus veritatis rerum tempora atque saepe beatae odit, praesentium est delectus, ab aliquid sequi quis eos. Repellat consectetur laudantium, eos consequatur provident explicabo, accusantium excepturi aspernatur beatae voluptates possimus inventore nemo, amet sed non aliquam cupiditate architecto assumenda enim? Suscipit nulla officiis fuga quod!",
        },
        quantity: 1,
      }
    ],
  },
];

export default function OrderList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
            Order Lists
          </h1>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {orders.map((order) => (
              <Disclosure as="div" key={order.id} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="flex justify-between text-base text-justify lg:text-xl font-semibold leading-7">
                          {order.id + "#" + order.customerName}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        {order.products.map((product) => (
                          <div
                            key={product.id}
                            class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                          >
                            <img
                              src={product.img}
                              alt="product-image"
                              class="w-full rounded-lg sm:w-40"
                            />
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                              <div class="mt-5 sm:mt-0">
                                <h2 class="text-lg font-bold text-gray-900">
                                  {product.name}
                                </h2>
                                <p class="mt-1 text-xs text-gray-700">
                                  {product.seller}
                                </p>
                              </div>
                              <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div class="flex items-center border-gray-100">
                                  <input
                                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                                    type="text"
                                    readOnly
                                    value={product.quantity}
                                    min="1"
                                    onChange={(e) =>
                                      updateQuantity(
                                        product.id,
                                        parseInt(e.target.value)
                                      )
                                    }
                                  />
                                </div>
                                <div class="flex items-center space-x-4">
                                  <p class="text-sm">{product.price}$</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
