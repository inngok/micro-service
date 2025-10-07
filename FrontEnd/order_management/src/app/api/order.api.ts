const ORDER_BASE = process.env.NEXT_PUBLIC_ORDER_API || "http://localhost:8082";

export async function getOrders() {
  const res = await fetch(`${ORDER_BASE}/api/orders`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
}

export async function getOrderById(id: number) {
  const res = await fetch(`${ORDER_BASE}/api/orders/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch order");
  return res.json();
}

export async function createOrder(data: any) {
  const res = await fetch(`${ORDER_BASE}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create order");
  return res.json();
}
