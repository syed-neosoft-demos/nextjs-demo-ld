import { headers } from "next/headers";
import Link from "next/link";

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");
  console.log("domain", domain);

  return (
    <div>
      <h2>Not Found</h2>
      <p>No page found at given path</p>
      <Link href="/">Home</Link>
    </div>
  );
}
