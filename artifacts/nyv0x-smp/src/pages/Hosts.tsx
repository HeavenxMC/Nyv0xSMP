import React from "react";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

const MAP_URL = "http://maps.nyvox.xyz:45779/#world:-375:0:-460:6098:-2.55:0:0:0:perspective";

export default function Hosts() {
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
            <iframe
              src={MAP_URL}
              title="Nyv0x hosts map"
              className="h-[70vh] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
