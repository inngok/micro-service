import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p className="text-xl font-extrabold">Hệ thống quản lý</p>
          <p className="mt-2 text-gray-600">
           </p>
        </div>
        
        <div>
          <p className="font-semibold">Liên hệ</p>
          <p className="mt-2 text-gray-600">Hotline: 0123 456 789</p>
          <p className="text-gray-600">Email: support@system.vn</p>
          <p className="text-gray-600">Địa chỉ: 123 Đường ABC, Quận 10, TP.HCM</p>
        </div>
        <div>
          <p className="font-semibold">Điều hướng</p>
          <div className="mt-2 flex flex-col gap-2 text-gray-600">
            <Link href="/users" className="hover:text-gray-900 transition">Quản lý Users</Link>
            <Link href="/orders" className="hover:text-gray-900 transition">Quản lý Orders</Link>
          </div>
        </div>
      </div>

     
    </footer>
  );
}
