"use client";

import SideNav from "@/app/ui/dashboard/side-nav";
import { checkAuthRequest } from "@/lib/auth";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  (async () => {
    const result = await checkAuthRequest();
    setShow(result);
  })();
  return (
    show && (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    )
  );
}
