"use client";

import { useState } from "react";
import { createOrder } from "../../api/order.api"; 
import { useRouter } from "next/navigation";
import { ArrowLeft, Package } from "lucide-react";
import Link from "next/link";

export default function NewOrderPage() {
  const [userId, setUserId] = useState<number | "">("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (userId === "" || price === "" || !product.trim()) return;
    try {
      await createOrder({
        userId: Number(userId),
        product,
        price: Number(price),
      });
      router.push("/orders");
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/orders"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          Quay lại
        </Link>
      </div>

      <div className="max-w-md mx-auto">
        {/* Form Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Tạo đơn hàng mới
            </h1>
            <p className="text-gray-500 mt-1">
              Nhập thông tin đơn hàng của bạn
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="userId" className="text-sm font-medium text-gray-700">
                User ID
              </label>
              <input
                id="userId"
                value={userId}
                onChange={(e) =>
                  setUserId(e.target.value === "" ? "" : Number(e.target.value))
                }
                placeholder="Nhập ID người dùng"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="product" className="text-sm font-medium text-gray-700">
                Tên sản phẩm
              </label>
              <input
                id="product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Nhập tên sản phẩm"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium text-gray-700">
                Giá tiền
              </label>
              <input
                id="price"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value === "" ? "" : Number(e.target.value))
                }
                placeholder="Nhập giá tiền"
                type="number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={userId === "" || price === "" || !product.trim()}
            >
              Tạo đơn hàng
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}