"use client";

import { useState } from "react";
import { createUser } from "../../api/user.api"; 
import { useRouter } from "next/navigation";
import { ArrowLeft, UserPlus } from "lucide-react";
import Link from "next/link";

export default function NewUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await createUser({ name, email });
      router.push("/users");
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/users"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          Quay lại
        </Link>
      </div>

      <div className="max-w-md mx-auto">
        {/* Form Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-black-50 rounded-lg">
            <UserPlus className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Thêm người dùng mới
            </h1>
            <p className="text-gray-500 mt-1">
              Nhập thông tin người dùng của bạn
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Họ và tên
              </label>
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nhập họ và tên"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Nhập địa chỉ email"
                type="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!name.trim() || !email.trim()}
            >
              Thêm người dùng
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}