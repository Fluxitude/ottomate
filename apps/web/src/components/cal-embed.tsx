"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed({ calLink }: { calLink: string }) {
  // Call hooks at the top level so React preserves the call order.
  useEffect(() => {
    if (!calLink) return; // Nothing to initialise

    async function initializeCalendar() {
      const cal = await getCalApi();

      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }

    initializeCalendar();
  }, [calLink]);

  if (!calLink) {
    return null;
  }

  return (
    <Cal
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
