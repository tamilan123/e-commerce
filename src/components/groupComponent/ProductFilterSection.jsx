/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { collections, getProducts } from '../../utils/commonapi'
import { useNavigate, useSearchParams } from 'react-router-dom'

const sortOptions = [
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const filterData = [
  {
    id: 'availability',
    name: 'Availability',
    options: [
      { value: 'in_shock', label: 'In shock', checked: false },
      // { value: 'out_shock', label: 'Out of shock', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'bag', label: 'Bag', checked: false },
      { value: 'travel', label: 'Travel', checked: false },
      { value: 'jacket', label: 'Jacket', checked: false },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'Xs', label: 'Xs', checked: false },
      { value: 'M', label: 'M', checked: false },
      { value: 'L', label: 'L', checked: false },
      { value: 'XL', label: 'XL', checked: false },
      { value: 'XXL', label: 'XXL', checked: false },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductFilterSection() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [collection, setCollection] = useState();
  const [filter, setFilter] = useState(filterData);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get the value of a specific query parameter


  const handleClick = (id) => {
    navigate(`/product/${id}`)
  }

  const handleOnchange = (event, section) => {
    let color = searchParams.get('colors') ? searchParams.get('colors')?.split(",") : []; // e.g., ?myParam=value
    let category = searchParams.get('category') ? searchParams.get('category')?.split(",") : []; // e.g., ?myParam=value
    let size = searchParams.get('size') ? searchParams.get('size')?.split(",") : []; // e.g., ?myParam=value
    let inStock = searchParams.get('inStock') ? true : false; // e.g., ?myParam=value

    switch (section) {
      case "color":
        if (color?.includes(event.target.value)) {
          color = color.filter((item) => item !== event?.target?.value)
        } else {
          color.push(event?.target.value)
        }
        break;

      case "category":
        if (category?.includes(event.target.value)) {
          category = category.filter((item) => item !== event?.target?.value)
        } else {
          category.push(event?.target.value)
        }
        break;

      case "size":
        if (size?.includes(event.target.value)) {
          size = size.filter((item) => item !== event?.target?.value)
        } else {
          size.push(event?.target.value)
        }
        break;

      case "availability":
        if (inStock) {
          inStock = false
        } else {
          inStock = true
        }
        break;

      default:
        if (color.includes(event.target.value)) {
          color = color.filter((item) => item !== event?.target?.value)
        } else {
          color.push(event?.target.value)
        }
        break;
    }

    let query_string = "";

    if (color?.length > 0) {
      query_string += query_string ? `&colors=${color}` : `colors=${color}`;
    }

    if (category?.length > 0) {
      query_string += query_string ? `&category=${category}` : `category=${category}`;
    }

    if (size?.length > 0) {
      query_string += query_string ? `&size=${size}` : `size=${size}`;
    }

    if (inStock) {
      query_string += query_string ? `&inStock=true` : `inStock=true`;
    }

    navigate(`?${query_string}`);
    fetchCollectionData(query_string);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { data } } = await getProducts(1);
        setCollection(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchCollectionData = async (query) => {
    try {
      const { data: { data } } = await collections(query);
      setCollection(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      // setLoading(false);
    }
  };

  const getCollectionsData = useCallback(async () => {
    let color = searchParams.get('colors') ? searchParams.get('colors').split(",") : [];
    let category = searchParams.get('category') ? searchParams.get('category').split(",") : [];
    let size = searchParams.get('size') ? searchParams.get('size').split(",") : [];
    let inStock = searchParams.get('inStock') ? true : false; // e.g., ?myParam=value

    let query_string = "";

    if (color.length > 0) {
      query_string += query_string ? `&colors=${color}` : `colors=${color}`;
    }

    if (category.length > 0) {
      query_string += query_string ? `&category=${category}` : `category=${category}`;
    }

    if (size.length > 0) {
      query_string += query_string ? `&size=${size}` : `size=${size}`;
    }

    if (inStock) {
      query_string += query_string ? `&inStock=true` : `inStock=true`;
    }

    try {
      const { data: { data } } = await collections(query_string);
      setCollection(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      // setLoading(false);
    }
  }, [searchParams]); // Include searchParams if it affects the function

  useEffect(() => {
    getCollectionsData();
  }, [getCollectionsData]); // Now including getCollectionsData


  // Memoize the function using useCallback
  const getParamsInitialLoad = useCallback(() => {
    // Get colors from URL parameters
    const color = searchParams.get('colors') ? searchParams.get('colors').split(",") : [];
    const category = searchParams.get('category') ? searchParams.get('category').split(",") : [];
    const size = searchParams.get('size') ? searchParams.get('size').split(",") : [];
    let inStock = searchParams.get('inStock') ? true : false; // e.g., ?myParam=value

    const newData = [...filter]; // Create a copy of the current filter

    // Update options based on URL parameters
    if (newData[0] && newData[0].options) {
      newData[0].options = newData[0].options.map((obj) => ({
        ...obj,
        checked: inStock ? true : false,
      }));
    }

    if (newData[1] && newData[1].options) {
      newData[1].options = newData[1].options.map((obj) => ({
        ...obj,
        checked: color.includes(obj.value),
      }));
    }

    if (newData[2] && newData[2].options) {
      newData[2].options = newData[2].options.map((obj) => ({
        ...obj,
        checked: category.includes(obj.value),
      }));
    }

    if (newData[3] && newData[3].options) {
      newData[3].options = newData[3].options.map((obj) => ({
        ...obj,
        checked: size.includes(obj.value),
      }));
    }

    return newData; // Return the new data instead of setting it directly
    // eslint-disable-next-line
  }, [searchParams]); // Only depend on searchParams

  useEffect(() => {
    const newData = getParamsInitialLoad();
    setFilter(newData); // Update filter only once on the initial load

  }, [getParamsInitialLoad]); // Add isInitialLoad to control when to run


  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filter && Array.isArray(filter) && filter?.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-end border-b border-gray-200 pb-6 pt-12">

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block h-[calc(100vh-15.125rem)] overflow-hidden overflow-y-auto">
                {filter.map((section) => {
                  if (section.id !== "availability") {
                    return (
                      <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6" defaultOpen={true}>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                              <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  value={option.value}
                                  // defaultChecked={option.checked}
                                  checked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={(e) => handleOnchange(e, section?.id)}
                                />
                                <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                    )
                  } else {
                    return (
                      <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6" defaultOpen={true}>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                              <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  value={option.value}
                                  checked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}`}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={(e) => handleOnchange(e, section?.id)}
                                />
                                <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                    )
                  }
                })}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
                  {
                    collection && Array.isArray(collection) && collection?.map((item, idx) => (
                      <div className="card card1 cursor-pointer" onClick={()=>handleClick(item?._id)} key={idx}>
                        <div className="card-image border border-gray-200 rounded-xl p-6 h-[20rem] overflow-hidden">
                          <img
                            alt={item?.name}
                            src={item?.images?.thumbnail}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <div className="card-content py-4 flex flex-col gap-2">
                          <h6 className='m-0 text-black text-base font-semibold'>
                            {item?.name}
                          </h6>
                          <p className='m-0 text-zinc-700 text-sm font-medium'>Rs.{item?.price}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
