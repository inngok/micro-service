import Link from "next/link";
import { ArrowRight, Package, Plus, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero gọn */}
      <section className="py-16 md:py-20 border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Quản lý đơn hàng đơn giản & nhanh chóng
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Tạo và theo dõi đơn hàng trên một giao diện tối giản, tập trung vào hiệu suất.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/orders/new"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white hover:opacity-90"
            >
              <Plus className="h-5 w-5" />
              Tạo đơn hàng
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/orders"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              <Package className="h-5 w-5" />
              Xem đơn hàng
            </Link>
          </div>
        </div>
      </section>

      {/* Tính năng cơ bản */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Tính năng cơ bản</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-white p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                <Plus className="h-5 w-5" />
              </div>
              <h3 className="font-medium">Tạo đơn nhanh</h3>
              <p className="mt-1 text-sm text-gray-600">
                Tạo đơn trong vài bước, chỉ nhập thông tin cần thiết.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="font-medium">Theo dõi đơn</h3>
              <p className="mt-1 text-sm text-gray-600">
                Xem danh sách và chi tiết đơn hàng rõ ràng, dễ tìm kiếm.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="font-medium">Nhìn tổng quan</h3>
              <p className="mt-1 text-sm text-gray-600">
                Bức tranh tổng quan giúp bạn nắm tiến độ xử lý trong ngày.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
