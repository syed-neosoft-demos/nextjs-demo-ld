import { DeleteButton } from "@/src/components/list-user/button";
import { getUser } from "@/src/utils/api-call";
import Link from "next/link";
import style from "./page.module.css";

const ListUser = async () => {
  const res = await getUser();
  return (
    <div className={style.userList}>
      <h5>User List</h5>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>website</th>
            <th>Delete</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {res?.map((el: any) => (
            <tr key={el?.id}>
              <td>{el?.id}</td>
              <td>{el?.name}</td>
              <td>{el?.email}</td>
              <td>{el?.website}</td>
              <td>
                <DeleteButton id={el?.id} />
              </td>
              <td>
                <Link href={`/panel/list-user/${el?.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
