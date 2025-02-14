"use client";
import React from "react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const AddReview = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(null);

  const handleSubmit = (e: FieldValues) => {
    e.preventDefault();
    const newReview = { name, email, review, rating };
    console.log(newReview);
  };

  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Customer Reviews
        </h2>

        {/* Review Form */}
        <div className="mb-8">
          <h3 className="text-xl text-gray-700 mb-3">Leave a Review</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="review" className="block text-gray-600">
                Review
              </label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Write your review here..."
                required
              />
            </div>
            <div className="mt-6 flex items-center">
              <label htmlFor="rating" className="block text-gray-600 mr-3">
                Rating:
              </label>
              <div className="flex space-x-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <input
                    key={star}
                    type="radio"
                    name="rating"
                    id={`rating-${star}`}
                    value={star}
                    checked={rating === star}
                    onChange={() => setRating(star)}
                    className="text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Reviews List */}
        <div>
          <h3 className="text-xl text-gray-700 mb-3">Customer Reviews</h3>
          <div className="space-y-4">
            {/* Example of displaying submitted reviews */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800">John Doe</h4>
                  <div className="flex space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 .25l1.176 3.619h3.804l-3.045 2.222 1.175 3.618-3.159-2.3-3.156 2.3 1.174-3.618-3.045-2.222h3.804L8 .25z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  The LCD quality is excellent. Highly recommended!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
