import Link from "next/link";

export default async function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>no page found</p>
      <Link href="/">Home</Link>
    </div>
  );
}
