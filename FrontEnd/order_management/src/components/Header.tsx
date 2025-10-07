"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Trang chủ" },
  { href: "/users", label: "Người dùng" },
  { href: "/orders", label: "Đơn hàng" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkCls = (href: string) =>
    `transition ${isActive(href) ? "text-black font-semibold" : "hover:text-black"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo_1.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-auto w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-base font-medium whitespace-nowrap">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={linkCls(item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 border"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2 ${linkCls(item.href)}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}