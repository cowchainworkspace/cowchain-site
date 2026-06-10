"use client";

import { track, trackBeacon } from "@/lib/track";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function deviceLabel() {
  const ua = navigator.userAgent || "";
  const mobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
  let browser = "Browser";
  if (/Edg\//.test(ua)) browser = "Edge";
  else if (/OPR\/|Opera/.test(ua)) browser = "Opera";
  else if (/Chrome\//.test(ua)) browser = "Chrome";
  else if (/Firefox\//.test(ua)) browser = "Firefox";
  else if (/Safari\//.test(ua)) browser = "Safari";
  return `${mobile ? "Mobile" : "Desktop"} · ${browser}`;
}

export default function SiteTracker() {
  const pathname = usePathname();
  const summarySent = useRef(false);

  // Fire "enter" once per browser session; start the session timer + page list.
  useEffect(() => {
    try {
      if (!sessionStorage.getItem("cc_start")) {
        sessionStorage.setItem("cc_start", String(Date.now()));
        sessionStorage.setItem(
          "cc_pages",
          JSON.stringify([window.location.pathname])
        );
        track({
          type: "enter",
          page: window.location.pathname,
          referrer: document.referrer || "",
          device: deviceLabel()
        });
      }
    } catch (e) {}
  }, []);

  // Append each visited page (client-side navigation).
  useEffect(() => {
    try {
      const pages = JSON.parse(sessionStorage.getItem("cc_pages") || "[]");
      if (pages[pages.length - 1] !== pathname) {
        pages.push(pathname);
        sessionStorage.setItem("cc_pages", JSON.stringify(pages));
      }
    } catch (e) {}
  }, [pathname]);

  // Send the session summary when the user leaves / backgrounds the tab.
  useEffect(() => {
    const sendSummary = () => {
      if (summarySent.current) return;
      try {
        const start = Number(sessionStorage.getItem("cc_start")) || Date.now();
        const pages = JSON.parse(sessionStorage.getItem("cc_pages") || "[]");
        const durationSec = Math.round((Date.now() - start) / 1000);
        if (durationSec < 2) return; // ignore instant bounces
        summarySent.current = true;
        trackBeacon({ type: "session", durationSec, pages, device: deviceLabel() });
      } catch (e) {}
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") sendSummary();
    };

    window.addEventListener("pagehide", sendSummary);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", sendSummary);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return null;
}
