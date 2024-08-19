import { AiFillHtml5 } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-black flex flex-col md:flex-row justify-around h-auto py-10">
      <div className="flex flex-col text-white my-4 md:my-10 items-center md:items-start">
        <h1 className="font-bold text-xl">Abstract</h1>
        <div className="mt-4">
          <a href="#" className="text-sm hover:underline">
            Branches
          </a>
        </div>
      </div>
      <div className="flex flex-col text-white my-4 md:my-10 items-center md:items-start">
        <h1 className="font-bold text-xl">Resources</h1>
        <div className="mt-4 flex flex-col">
          <a href="#" className="text-sm hover:underline">
            Blog
          </a>
          <a href="#" className="text-sm hover:underline mt-1">
            Help Center
          </a>
          <a href="#" className="text-sm hover:underline mt-1">
            Release Notes
          </a>
          <a href="#" className="text-sm hover:underline mt-1">
            Status
          </a>
        </div>
      </div>
      <div className="flex flex-col text-white my-4 md:my-10 items-center md:items-start">
        <h1 className="font-bold text-xl">Community</h1>
        <div className="mt-4 flex flex-col">
          <a href="#" className="text-sm hover:underline">
            Twitter
          </a>
          <a href="#" className="text-sm hover:underline mt-1">
            LinkedIn
          </a>
          <a href="#" className="text-sm hover:underline mt-1">
            Facebook
          </a>
          <a href="#" className="text-sm hover:underline mt-1">
            Dribbble
          </a>
          <a href="#" className="text-sm hover:underline mt-1">
            Podcast
          </a>
        </div>
      </div>
      <div className="flex flex-col text-white my-4 md:my-10 items-center md:items-start">
        <h1 className="font-bold text-xl">Company</h1>
        <div className="mt-4 flex flex-col">
          <a href="#" className="text-sm hover:underline">
            About Us
          </a>
          <a href="#" className="text-sm hover:underline mt-1">
            Careers
          </a>
          <a href="#" className="text-sm hover:underline mt-1">
            Legal
          </a>
        </div>
        <h2 className="text-sm mt-7 font-bold">Contact Us</h2>
        <h3 className="text-sm mt-1">info@abstract.com</h3>
      </div>
      <div className="flex flex-col text-white my-4 md:my-10 items-center md:items-start">
        <AiFillHtml5 className="text-4xl mb-2" />
        <h2>&#169; Copyright 2024</h2>
        <h2 className="mt-1">Abstract Studio Design, Inc.</h2>
        <h2 className="mt-1">All rights reserved</h2>
      </div>
    </div>
  );
}
