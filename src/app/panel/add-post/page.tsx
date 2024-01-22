"use client";

import { Error, Success } from "@/src/components/shared/toast";
import { createPost } from "@/src/utils/panel-api";
import { useState } from "react";
import toast from "react-hot-toast";

const AddUser = () => {
  const [loader, setLoader] = useState(false);
  const [payload, setPayload] = useState({
    title: "",
    description: "",
  });

  const handleInput = (elem: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = elem.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleCreate = async () => {
    if (!payload.title || !payload.description)
      return toast.custom(<Error message="please fill all required fields" />);
    setLoader(true);
    console.log("payload", payload);
    const res = await createPost(JSON.stringify(payload));
    toast.custom(<Success message="Post successfully created" />);
    setLoader(false);
    setPayload({
      title: "",
      description: "",
    });
  };
  return (
    <div className="bg-white p-4 m-10">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              />
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={payload.title}
                  onChange={(el) => handleInput(el)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-2"
                />
              </div>
            </div>
            <div className="col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Post description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={payload.description}
                  onChange={(el) => handleInput(el)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-2"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-10">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          onClick={handleCreate}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {loader ? "Loading..." : " Create user"}
        </button>
      </div>
    </div>
  );
};

export default AddUser;
