"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");


  return (
    <main className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-white to-gray-50">
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-16 sm:pt-20">
        <div className="text-center">
          <p className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">Liên hệ</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Kết nối với chúng tôi</h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Có câu hỏi, góp ý hay cần báo lỗi? Hãy gửi tin nhắn — chúng tôi phản hồi sớm nhất có thể.
          </p>
        </div>

        <div className="mt-10 grid gap-6 ">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Thông tin liên hệ</h2>
            <p className="mt-2 text-sm text-gray-600">Bạn cũng có thể gọi điện hoặc ghé trực tiếp.</p>

            <dl className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-xl bg-blue-100/80 ring-1 ring-blue-200 grid place-items-center">📞</div>
                <div>
                  <dt className="text-sm font-medium text-gray-800">Điện thoại</dt>
                  <dd className="text-gray-600"><a href="tel:+84000000000" className="hover:underline">+84 00 0000 000</a></dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-xl bg-blue-100/80 ring-1 ring-blue-200 grid place-items-center">✉️</div>
                <div>
                  <dt className="text-sm font-medium text-gray-800">Email</dt>
                  <dd className="text-gray-600"><a href="mailto:hello@foodshop.vn" className="hover:underline">hello@foodshop.vn</a></dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-xl bg-blue-100/80 ring-1 ring-blue-200 grid place-items-center">📍</div>
                <div>
                  <dt className="text-sm font-medium text-gray-800">Địa chỉ</dt>
                  <dd className="text-gray-600">405 Nguyễn Văn A, Quận B, TP.HCM</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-xl bg-blue-100/80 ring-1 ring-blue-200 grid place-items-center">⏰</div>
                <div>
                  <dt className="text-sm font-medium text-gray-800">Giờ làm việc</dt>
                  <dd className="text-gray-600">Thứ 2–Thứ 7: 9:00–18:00</dd>
                </div>
              </div>
            </dl>
      
          </div>

        </div>
      </section>
    </main>
  );
}
