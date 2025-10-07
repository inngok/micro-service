const USER_BASE = process.env.NEXT_PUBLIC_USER_API || "http://localhost:8081";

export async function getUsers() {
  const res = await fetch(`${USER_BASE}/api/users`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function getUserById(id: number) {
  const res = await fetch(`${USER_BASE}/api/users/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

export async function createUser(data: any) {
  const res = await fetch(`${USER_BASE}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
}
