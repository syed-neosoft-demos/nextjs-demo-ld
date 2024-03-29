"use client";

import Pagination from "@/src/components/shared/Pagination";
import { getPosts } from "@/src/utils/panel-api";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

const ListUser = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState<any>();

  const getData = async (id: number, userId?: number) => {
    let res: [];
    if (userId) {
      res = await getPosts(id, userId);
    } else res = await getPosts(id);
    setData(res);
  };

  const handleNext = async () => {
    setPage((pre) => pre + 5);
    getData(page + 5);
  };
  const handlePrevious = async () => {
    if (page <= 0) return;
    setPage((pre) => pre - 5);
    getData(page - 5);
  };
  useEffect(() => {
    getData(0);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search) {
        getData(page, search);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="relative shadow-md ml-10 mr-10 mt-5 rounded-sm">
      <div className="bg-white">
        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900" />
        <div className="mt-2">
          <input
            type="text"
            name="title"
            id="title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by user id"
            className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-2"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              User Id
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0
            ? data?.map((el: any) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={el?.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {el?.id}
                  </th>
                  <td className="px-6 py-4">{el?.userId}</td>
                  <td className="px-6 py-4">{el?.title}</td>
                  <td className="px-6 py-4">{el?.body?.substring(0, 120)}</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/panel/show-post/${el?.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            : "No data found"}
        </tbody>
      </table>
      <Pagination handleNext={handleNext} handlePrevious={handlePrevious} />
    </div>
  );
};

export default ListUser;
