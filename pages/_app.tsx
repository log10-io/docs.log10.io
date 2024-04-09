import "../styles/globals.css";
import type { AppProps } from "next/app";

const is_development = process.env["NEXT_PUBLIC_LOG10_ENV"] === "development";

import posthog from "posthog-js";
import { datadogLogs } from "@datadog/browser-logs";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined" && !is_development) {
  posthog.init("phc_bszejvERLYyGJCBW28mvdjTWg81A9OdrYGlqa2l43oU", {
    api_host: "https://app.posthog.com",
  });

  datadogLogs.init({
    clientToken: "pubc037575a0498fbb11d5913ea2eaf001c",
    site: "datadoghq.com",
    forwardErrorsToLogs: true,
    sessionSampleRate: 100,
    env: process.env["NEXT_PUBLIC_LOG10_ENV"],
    version: process.env["NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA"],
  });
} else {
  console.log("Turn off posthog and datadog in development mode.");
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostHogProvider client={posthog}>
      <Component {...pageProps} />
    </PostHogProvider>
  );
}

export default MyApp;
