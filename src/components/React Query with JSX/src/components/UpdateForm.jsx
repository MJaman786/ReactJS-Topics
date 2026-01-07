import React, { useState } from 'react';

const UpdateForm = ({ postId, initialTitle, initialBody, cancelEdit, onUpdate }) => {

  const [formData, setFormData] = useState({
    title: initialTitle,
    body: initialBody
  })

  // console.log(initialTitle);
  // console.log(initialBody);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onUpdate({
      id: postId,
      ...formData
    });
    cancelEdit()
  }

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <div className="max-w-xl mx-auto my-12 p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 relative">

      {/* ❌ Cross/Cancel Button */}
      <button
        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-600 hover:bg-red-300 rounded-full transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={cancelEdit} // Logic removed as requested
        aria-label="Close form"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 className="text-3xl font-extrabold text-white mb-6 border-b border-indigo-600 pb-3">
        Edit Post Details
      </h2>

      <form
        onSubmit={handleSubmit} // Logic removed
        className="space-y-6"
      >
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
            Title
          </label>
          <div className="mt-1">
            <input
              id="title"
              name="title"
              type="text"
              required
              value={formData.title}
              onChange={handelChange}
              className="block w-full rounded-md border-0 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 p-3 transition duration-150 outline-none"
              placeholder="Enter the post title"
            />
          </div>
        </div>

        {/* Body Field (Textarea) */}
        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-300 mb-1">
            Body Content
          </label>
          <div className="mt-1">
            <textarea
              id="body"
              name="body"
              rows={6}
              required
              value={formData.body}
              onChange={handelChange}
              className="block w-full outline-none rounded-md border-0 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 p-3 transition duration-150 resize-none"
              placeholder="Write the full body content here..."
            />
          </div>
        </div>

        {/* Update Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full justify-center rounded-md bg-indigo-600 px-4 py-3 text-lg font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 transition duration-150 ease-in-out transform hover:scale-[1.01]"
          >
            Update Post
          </button>
        </div>

      </form>
    </div>
  );
};

export default UpdateForm;