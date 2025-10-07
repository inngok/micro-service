import { getUsers } from "../api/user.api";
import Link from "next/link";
import { UserPlus, Users } from "lucide-react";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-black-50 rounded-lg">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Quản lý người dùng
            </h1>
            <p className="text-gray-500 mt-1">
              {users.length} người dùng trong hệ thống
            </p>
          </div>
        </div>
        <Link
          href="/users/new"
          className="inline-flex items-center gap-2 rounded-lg bg-black-600 px-5 py-3 text-white hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <UserPlus className="h-5 w-5" />
          Thêm người dùng
        </Link>
      </div>

      {/* Danh sách người dùng */}
      {users.length === 0 ? (
        <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
          <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <Users className="h-10 w-10 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Chưa có người dùng nào
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Bắt đầu bằng cách thêm người dùng đầu tiên vào hệ thống của bạn.
          </p>
          <Link
            href="/users/new"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <UserPlus className="h-5 w-5" />
            Thêm người dùng đầu tiên
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((u: any) => (
            <div
              key={u.id}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:shadow-lg hover:border-blue-200 hover:translate-y-[-2px]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-1">
                    {u.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">ID: #{u.id}</p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="line-clamp-1">{u.email}</span>
                </div>
                
                {u.role && (
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {u.role}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href={`/users/${u.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 group/link"
                >
                  Xem chi tiết
                  <svg 
                    className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}