import { getPost, getUser } from "@/src/utils/panel-api";
import { Suspense } from "react";

type Props = {
  params: { postId: string };
};
const page = async ({ params }: Props) => {
  const post = await getPost(params?.postId);
  const user = await getUser(post?.userId);

  return (
    <div className="grid grid-cols-2 gap-1 grid-rows-2 m-10 rounded-sm">
      <div className="bg-white shadow-sm rounded-md p-2  cursor-pointer">
        <h2 className="font-bold">User Details</h2>
        <Suspense fallback={<h1>Loading...</h1>}>
          {Object.entries(user).map((el: any) => (
            <>
              {typeof el?.[1] !== "object" && (
                <div className="flex" key={el[0]}>
                  <p className="font-semibold pr-2 "> {el?.[0]}: </p>
                  <p className="truncate">{el?.[1]} </p>
                </div>
              )}
            </>
          ))}
        </Suspense>
      </div>
      <div className="bg-white shadow-sm rounded-md p-2  cursor-pointer">
        <h2 className="font-bold">Post Details</h2>
        <Suspense fallback={<h1>Loading...</h1>}>
          {Object.entries(post).map((el: any) => (
            <div className="flex" key={el[0]}>
              <p className="font-semibold pr-2 "> {el?.[0]}: </p>
              <p className="truncate">{el?.[1]} </p>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default page;
