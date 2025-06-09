/**
 * useWakeLock - custom React hook to keep the screen awake while the app is active.
 *
 * uses the "Screen Wake Lock API" to prevent the display from dimming
 * or going to sleep while the browser tab or window is focused.
 *
 * docs: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
 */

import { useEffect } from "react";

export function useWakeLock() {
  useEffect(() => {
    let wakeLock = null;

    const requestWakeLock = async () => {
      try {
        if ("wakeLock" in navigator) {
          wakeLock = await navigator.wakeLock.request("screen");
          console.log("WakeLock Acquired");
        }
      } catch (err) {
        console.error("WakeLock Failed:", err.name, err.message);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        requestWakeLock();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    requestWakeLock();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (wakeLock) wakeLock.release();
    };
  }, []);
}
