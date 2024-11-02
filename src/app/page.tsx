"use client";

import Topbar from "@/components/Topbar";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import axios from "axios";
import { Character } from "@/lib/types";

const Skeleton = Array(20).fill(0);

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async (pageNo: number) => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${pageNo}`
        );

        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col w-full">
        <div className="text-2xl font-bold text-center w-full p-4">
          Rick and Morty Characters
        </div>
        <div className="grid grid-cols-5 w-full p-4 gap-4">
          {Skeleton.map((_, index) => (
            <div key={index} className="h-44 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
        <div className="p-4"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <Topbar />
      <div className="grid grid-cols-5 w-full p-4 gap-4">
        {characters.map((character: Character, index: number) => (
          <div key={index} className="h-44 bg-gray-200 rounded-xl">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={character.image}
              alt={character.name}
            />
          </div>
        ))}
      </div>

      <div className="p-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {[...Array(Math.min(5, totalPages))].map((_, index) => {
              let pageNumber;
              if (totalPages <= 5) {
                pageNumber = index + 1;
              } else if (currentPage <= 3) {
                pageNumber = index + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNumber = totalPages - 4 + index;
              } else {
                pageNumber = currentPage - 2 + index;
              }

              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => handlePageChange(pageNumber)}
                    className={`cursor-pointer ${
                      currentPage === pageNumber ? "font-bold" : ""
                    }`}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
