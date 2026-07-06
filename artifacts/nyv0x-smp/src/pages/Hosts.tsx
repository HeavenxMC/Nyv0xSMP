import React from "react";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

const MAP_URL = "http://maps.nyvox.xyz:45779/";

export default function Hosts() {
  const isSecurePage = typeof window !== "undefined" && window.location.protocol === "https:";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">Hosted map</p>
            <h1 className="text-3xl font-bold tracking-tight text-primary">Nyv0x hosts</h1>
          </div>

          <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
            <div className="flex min-h-[70vh] flex-col justify-between gap-6 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),_transparent_40%),linear-gradient(135deg,_rgba(10,15,24,1),_rgba(8,12,18,1))] p-8">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                  Live preview
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Explore the hosted world from the browser.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                  The direct map viewer is hosted on an HTTP endpoint, so GitHub Pages cannot embed it inline. This preview card keeps the experience alive with a strong call to action and a clear path to the live map.
                </p>
              </div>

              <div className="grid gap-4 rounded-2xl border border-border/60 bg-background/70 p-6 md:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">Map endpoint</p>
                  <p className="break-all font-mono text-sm text-primary">{MAP_URL}</p>
                  <p className="text-sm text-muted-foreground">
                    Open the map in a new tab for the full interactive view and coordinates.
                  </p>
                </div>
                <div className="flex flex-col justify-end gap-3">
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Open live map <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
                  >
                    Back home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
