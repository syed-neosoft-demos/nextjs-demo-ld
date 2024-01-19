export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
}
export async function getUser(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
}

export async function getPosts(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${id ?? 0}&_limit=5`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
}
export async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
}
export async function createPost(payload: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    body: payload,
    headers: {
      Authorization: "Basic " + "token",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  console.log("res", res);
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
}
