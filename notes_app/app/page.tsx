"use client";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setISLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setISLoading(true);
    } catch (error) {}
  };

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">My Notes</h1>
          <p className="text-gray-400 ">
            Create , read , update , and delete your notes
          </p>
        </div>
        {/* Form*/}
        <div className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-yellow-400 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter note title..."
                className="w-full px-4 border border-gray-700  bg-gray-800 text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-yellow-5 00 placeholder-gray-500"
              />
            </div>

            <div className="">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter note title..."
                rows={5}
                className="w-full px-4 border border-gray-700  bg-gray-800 text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-yellow-5 00 placeholder-gray-500"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className=" flex-1 bg-yellow-500 text-gray-900 py-2 px-2 rounded-lg hover:bg-yellow-600 disabled:bg-gray-600 transition font-semibold"
                >
                  Add Note
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
