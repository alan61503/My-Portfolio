import { ImageResponse } from "next/og";
import { baseURL, person } from "@/resources";

export const runtime = "nodejs";

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Portfolio";

  async function loadGoogleFont(font: string) {
    try {
      const url = `https://fonts.googleapis.com/css2?family=${font}`;
      const res = await fetch(url);
      const css = await res.text();

      // Try to find a woff2 font first (Google Fonts default), otherwise fallback to any url()
      const woff2Match = css.match(/src:\s*url\(([^)]+)\)\s*format\('woff2'\)/);
      const anyUrlMatch = css.match(/url\(([^)]+)\)/);
      const fontUrl = (woff2Match?.[1] ?? anyUrlMatch?.[1])?.trim();

      if (fontUrl) {
        const fontRes = await fetch(fontUrl);
        if (fontRes.ok) {
          return await fontRes.arrayBuffer();
        }
      }
    } catch (_err) {
      // Swallow and fallback to system fonts; we don't want OG generation to fail hard.
    }

    return undefined;
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "6rem",
        background: "#151515",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4rem",
          fontStyle: "normal",
          color: "white",
        }}
      >
        <span
          style={{
            padding: "1rem",
            fontSize: "6rem",
            lineHeight: "8rem",
            letterSpacing: "-0.05em",
            whiteSpace: "wrap",
            textWrap: "balance",
            overflow: "hidden"
          }}
        >
          {title}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5rem",
          }}
        >
          <img
            src={baseURL + person.avatar}
            style={{
              width: "12rem",
              height: "12rem",
              objectFit: "cover",
              borderRadius: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                fontSize: "4.5rem",
                lineHeight: "4.5rem",
                whiteSpace: "pre-wrap",
                textWrap: "balance",
              }}
            >
              {person.name}
            </span>
            <span
              style={{
                fontSize: "2.5rem",
                lineHeight: "2.5rem",
                whiteSpace: "pre-wrap",
                textWrap: "balance",
                opacity: "0.6",
              }}
            >
              {person.role}
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1280,
      height: 720,
      // Include fonts only if we managed to load them; otherwise rely on defaults.
      fonts: (await (async () => {
        const geist = await loadGoogleFont("Geist:wght@400");
        return geist
          ? [
              {
                name: "Geist",
                data: geist,
                style: "normal",
              },
            ]
          : [];
      })()),
    },
  );
}