"use client";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function TopLoader() {
  const pathname = usePathname();
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();
    // Simulate a short delay for demo; in real use, tie to data loading
    timer.current = setTimeout(() => {
      NProgress.done();
    }, 700);
    return () => {
      if (timer.current) clearTimeout(timer.current);
      NProgress.done();
    };
    // Only run on route/pathname change
  }, [pathname]);

  return null;
} 