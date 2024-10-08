import React from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../assets/download (6).png";

const testimonials = [
  {
    id: 1,
    img: img1,
    name: "John Doe",
    rating: 5,
    description: "This service is fantastic! Highly recommend to everyone.",
  },
  {
    id: 2,
    img: img1,
    rating: 4,
    description: "A great experience overall, will definitely come back!",
  },
  {
    id: 3,
    img: img1,
    name: "Alex Johnson",
    rating: 5,
    description: "Amazing quality and customer service. Absolutely love it!",
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Customers are Saying About us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-32 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">
              {testimonial.name}
            </h3>
            <div className="flex justify-center mb-2">
              {[...Array(testimonial.rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-600 text-center">
              {testimonial.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
