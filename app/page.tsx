"use client";
import React, { useState } from "react";
import NavBar from "@/app/components/Navbar";
import data from "./data.json";
import Tab from "@/components/tab";
import Card from "@/components/card";
import Search from "@/components/search";
import Image from "next/image";
import Select from "@/components/select";

export default function Home() {
  const [filteredData, setFilteredData] = useState(data.designs);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // INCLUDES FILTER - string appears anywhere
  // const handleFilterData = (searchValue: string) => {
  //   setQuery(searchValue);
  //   setIsLoading(true);
  //   // simulating data fetching
  //   setTimeout(() => {
  //     const filteredDesigns = data.designs.filter((design) =>
  //       design.name.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //     setIsLoading(false);
  //     setFilteredData(filteredDesigns);
  //   }, 1500);
  // };

  // STARTS WITH FILTER - string only appears at start
  const handleFilterData = (searchValue: string) => {
    setQuery(searchValue);
    setIsLoading(true);
    setTimeout(() => {
      const filteredDesigns = data.designs.filter((design) =>
        design.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      setIsLoading(false);
      setFilteredData(filteredDesigns);
    }, 1500);
  };

  return (
    <main>
      <NavBar />
      <div className="border-b border-gray-light">
        <div className="max-w-[1200px] w-full m-auto flex flex-col pt-80 px-40 gap-60 ">
          <h1 className="headline-xl-bold">Designs</h1>
          <div className="flex flex-row gap-30">
            <Tab label="Active" selected={true} uppercase={false} />
            <Tab label="Archived" selected={false} uppercase={false} />
            <Tab label="Invalid" selected={false} uppercase={false} />
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] w-full m-auto flex flex-col pt-40 px-40 gap-40">
        <div className="flex justify-between">
          <Select label="Labels" disabled={true} />
          <Search onSearch={handleFilterData} />
        </div>
        <div className="grid grid-cols-5 gap-15 mb-60">
          {filteredData.length === 0 ? (
            <NoResults query={query} />
          ) : (
            filteredData.map((design) => (
              <Card
                key={design.id}
                gender={design.gender}
                createdDate={design.createdDate}
                name={design.name}
                createdBy={design.createdBy}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}

function NoResults({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center flex-grow justify-center gap-5 py-60 col-span-5">
      <Image
        width={80}
        height={80}
        src="/no-results-icon.png"
        alt="No results Icon"
      />
      <h2 className="headline-md-bold uppercase">
        We are sorry, we couldn’t find any results for {query}
      </h2>
      <p className="text-gray-dark">Please try another design name</p>
    </div>
  );
}
