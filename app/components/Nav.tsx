"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex justify-between">
      <div className="font-bold">ImageGen AI</div>
      <div>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/generate" className="hover:text-gray-400">
              Generate
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-400">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
