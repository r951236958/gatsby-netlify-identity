import React, { useEffect } from "react"
import { Link } from "gatsby"
// import { FontIcon } from "@react-md/icon"
import { BsTrash } from "@react-icons/all-files/bs/BsTrash"
import { MdAdd } from "@react-icons/all-files/md/MdAdd"
import { FaEdit } from "@react-icons/all-files/fa/FaEdit"
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const SecondPage = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      console.log("🎉 Dark mode is supported")
    }
  })

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>

      <Link className="link pb-1 mb-2 mx-2" to="/">
        Go back to the homepage
      </Link>
      <div className="flex flex-wrap p-4">
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-gray-400 text-gray-400 hover:bg-gray-600 hover:bg-opacity-10 hover:border-gray-500 hover:text-white py-2 px-3">
          <span className="capitalize">gray</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-yellow-400 text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-10 hover:border-yellow-500 hover:text-white py-2 px-3">
          <span className="capitalize">yellow</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-orange-400 text-orange-400 hover:bg-orange-600 hover:bg-opacity-10 hover:border-orange-500 hover:text-white py-2 px-3">
          <span className="capitalize">orange</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-red-400 text-red-400 hover:bg-red-600 hover:bg-opacity-10 hover:border-red-500 hover:text-white py-2 px-3">
          <span className="capitalize">red</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-green-400 text-green-400 hover:bg-green-600 hover:bg-opacity-10 hover:border-green-500 hover:text-white py-2 px-3">
          <span className="capitalize">green</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-teal-400 text-teal-400 hover:bg-teal-600 hover:bg-opacity-10 hover:border-teal-500 hover:text-white py-2 px-3">
          <span className="capitalize">teal</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-blue-400 text-blue-400 hover:bg-blue-600 hover:bg-opacity-10 hover:border-blue-500 hover:text-white py-2 px-3">
          <span className="capitalize">blue</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:bg-opacity-10 hover:border-indigo-500 hover:text-white py-2 px-3">
          <span className="capitalize">indigo</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-purple-400 text-purple-400 hover:bg-purple-600 hover:bg-opacity-10 hover:border-purple-500 hover:text-white py-2 px-3">
          <span className="capitalize">purple</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-pink-400 text-pink-400 hover:bg-pink-600 hover:bg-opacity-10 hover:border-pink-500 hover:text-white py-2 px-3">
          <span className="capitalize">pink</span>
        </button>
      </div>
      <div className="flex flex-wrap p-4">
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm rounded-md mx-2 mb-2 bg-gray-600 text-gray-100 border-gray-600 hover:bg-gray-700 hover:border-gray-700 hover:text-white py-2 px-3">
          <span className="capitalize">gray</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm rounded-md mx-2 mb-2 bg-yellow-600 text-yellow-100 border-yellow-600 hover:bg-yellow-700 hover:border-yellow-700 hover:text-white py-2 px-3">
          <span className="capitalize">yellow</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm rounded-md mx-2 mb-2 bg-orange-600 text-orange-100 border-orange-600 hover:bg-orange-700 hover:border-orange-700 hover:text-white py-2 px-3">
          <span className="capitalize">orange</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm rounded-md mx-2 mb-2 bg-red-600 text-red-100 border-red-600 hover:bg-red-700 hover:border-red-700 hover:text-white py-2 px-3">
          <span className="capitalize">red</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm rounded-md mx-2 mb-2 bg-green-600 text-green-100 border-green-600 hover:bg-green-700 hover:border-green-700 hover:text-white py-2 px-3">
          <span className="capitalize">green</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm rounded-md mx-2 mb-2 bg-teal-600 text-teal-100 border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white py-2 px-3">
          <span className="capitalize">teal</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm rounded-md mx-2 mb-2 bg-blue-600 text-blue-100 border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-white py-2 px-3">
          <span className="capitalize">blue</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm rounded-md mx-2 mb-2 bg-indigo-600 text-indigo-100 border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 hover:text-white py-2 px-3">
          <span className="capitalize">indigo</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm rounded-md mx-2 mb-2 bg-purple-600 text-purple-100 border-purple-600 hover:bg-purple-700 hover:border-purple-700 hover:text-white py-2 px-3">
          <span className="capitalize">purple</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm rounded-md mx-2 mb-2 bg-pink-600 text-pink-100 border-pink-600 hover:bg-pink-700 hover:border-pink-700 hover:text-white py-2 px-3">
          <span className="capitalize">pink</span>
        </button>
      </div>

      <div className="flex flex-wrap items-end p-4">
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-teal-600 text-teal-100 border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white h-10 px-6">
          <i className="far fa-edit mr-1" />
          <FaEdit className="mr-1" />
          <span>Edit</span>
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-teal-600 text-teal-100 border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white h-10 px-3">
          <FaEdit />
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white h-8 text-sm px-2">
          <BsTrash />
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white h-10 px-3">
          <FaRegTrashAlt />
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white h-12 text-lg px-4">
          <BsTrash />
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline mx-2 mb-2 border-green-600 bg-white text-green-600 hover:bg-green-600 hover:border-green-600 hover:text-white text-sm p-2 rounded-full">
          <MdAdd />
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline  mx-2 mb-2 border-green-600 bg-white text-green-600 hover:bg-green-600 hover:border-green-600 hover:text-white p-3 rounded-full">
          <MdAdd />
        </button>
        <button className="btn leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline mx-2 mb-2 border-green-600 bg-white text-green-600 hover:bg-green-600 hover:border-green-600 hover:text-white text-lg p-4 rounded-full">
          <MdAdd />
        </button>
      </div>
    </Layout>
  )
}

export default SecondPage
