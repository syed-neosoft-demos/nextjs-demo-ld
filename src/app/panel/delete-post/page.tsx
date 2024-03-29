"use client";

import Pagination from "@/src/components/shared/Pagination";
import { Success } from "@/src/components/shared/toast";
import { deletePost, getPosts } from "@/src/utils/panel-api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DeleteUser = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const getData = async (id: number) => {
    let res = await getPosts(id);
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
  const handleDelete = async (id: number) => {
    await deletePost(id);
    toast.custom(<Success message="Post sccessfully deleted " />);
  };

  useEffect(() => {
    getData(0);
  }, []);
  return (
    <div className="relative shadow-md ml-10 mr-10 mt-5 rounded-sm">
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
          {data?.map((el: any) => (
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
              <td className="px-6 py-4">{el?.body?.substring(0, 100)}</td>
              <td className="px-6 py-4 text-right">
                <p
                  className="font-medium text-blue-600 cursor-pointer"
                  onClick={() => handleDelete(el?.id)}
                >
                  Delete
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination handleNext={handleNext} handlePrevious={handlePrevious} />
    </div>
  );
};

export default DeleteUser;
