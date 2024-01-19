export async function loginApi(payload: any) {
  const res = await fetch(`https://dummyjson.com/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  console.log("res", res);
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
}
