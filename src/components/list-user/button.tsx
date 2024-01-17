"use client";

import { useState } from "react";
import ConfirmModel from "../shared/model";

// import Link from "next/link";

// const ViewButton = (props: { id: string }) => {
//   return <Link href={`/panel/list-user/${props.id}`}>View</Link>;
// };

// export default ViewButton;

export const DeleteButton = (props: { id: string }) => {
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    setOpen(true);
  };
  return (
    <>
      <button onClick={handleDelete}>Delete</button>
      <ConfirmModel isOpen={open} setIsOpen={setOpen} />
    </>
  );
};
