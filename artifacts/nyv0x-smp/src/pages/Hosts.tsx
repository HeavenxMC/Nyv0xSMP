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
            {isSecurePage ? (
              <div className="flex h-[70vh] flex-col items-center justify-center gap-4 bg-background p-8 text-center">
                <p className="text-lg font-semibold text-primary">The live map cannot be embedded from this secure page.</p>
                <p className="max-w-xl text-sm text-muted-foreground">
                  Open the map directly in a new tab to view the hosted world.
                </p>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Open map <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <iframe
                src={MAP_URL}
                title="Nyv0x hosts map"
                className="h-[70vh] w-full border-0"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
