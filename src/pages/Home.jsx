import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

function Home() {
  const categories = useLoaderData();

  return (
    <main className="p-2 lg:p-0 lg:w-11/12 mx-auto">
      <div className="mt-24">
        <h1 className="text-4xl text-center font-bold mb-12">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex flex-col lg:flex-row lg:gap-x-6 gap-x-0">
          <div className="xl:w-2/12 lg:w-3/12 mb-6 lg:mb-0">
            <Categories categories={categories} />
          </div>
          <div className="lg:w-9/12 xl:w-10/12">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
