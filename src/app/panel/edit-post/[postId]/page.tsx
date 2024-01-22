"use client";

import { Error, Success } from "@/src/components/shared/toast";
import { getPost, updatePost } from "@/src/utils/panel-api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  params: { postId: string };
};
const EditUser = ({ params }: Props) => {
  const [loader, setLoader] = useState(false);
  const [payload, setPayload] = useState({
    title: "",
    body: "",
    id: "",
    userId: "",
  });

  const handleInput = (elem: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = elem.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleCreate = async () => {
    if (!payload.title || !payload.body)
      return toast.custom(<Error message="please fill all required fields" />);
    setLoader(true);
    console.log("payload", payload);
    const res = await updatePost(payload);
    toast.custom(<Success message="Post successfully updated" />);
    console.log("res", res);
    setLoader(false);
  };
  useEffect(() => {
    const post = async () => {
      const res = await getPost(params?.postId);
      console.log("res", res);
      setPayload({ ...res, body: res?.body });
    };
    post();
  }, [params?.postId]);

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
                  name="body"
                  value={payload.body}
                  onChange={(el) => handleInput(el)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-2"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-10">
        <button
          onClick={handleCreate}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {loader ? "Loading..." : "Update"}
        </button>
      </div>
    </div>
  );
};

export default EditUser;
