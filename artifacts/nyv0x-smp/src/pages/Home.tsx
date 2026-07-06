import React, { useState } from "react";
import { Link } from "wouter";
import { Terminal, ShieldAlert, Cpu, Server, Users, ArrowRight, Copy, Check, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const DISCORD_URL = "https://discord.com/invite/RpdjvHMXD9";
const BLUEMAP_URL = "http://maps.nyvox.xyz:45779";

const SectionHeader = ({ children, id }: { children: React.ReactNode, id?: string }) => (
  <motion.h2 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="text-2xl md:text-3xl font-bold mb-8 text-primary border-b border-border pb-4 uppercase tracking-widest inline-flex items-center gap-4"
  >
    <span className="text-secondary opacity-50 text-xl font-normal">&gt;</span>
    {children}
    <span className="w-2 h-6 bg-primary animate-pulse ml-2 inline-block"></span>
  </motion.h2>
);

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyIp = () => {
    navigator.clipboard.writeText("play.nyvox.xyz");
    setCopied(true);
    toast({
      title: "COPIED TO CLIPBOARD",
      description: "play.nyvox.xyz",
      className: "bg-background border-primary text-primary font-mono",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col relative w-full overflow-x-hidden">
      {/* Decorative scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 crt opacity-20"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-widest text-primary flex items-center gap-2 hover:text-secondary transition-colors">
            <Terminal className="w-5 h-5" />
            NYV0X
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="/map" className="text-muted-foreground hover:text-primary transition-colors">Map</a>
            <a href="#rules" className="text-muted-foreground hover:text-primary transition-colors">Rules</a>
          </div>
          <a 
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-4 py-2 text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2"
          >
            [ JOIN ]
          </a>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 md:py-24 flex flex-col gap-32">
        
        {/* HERO SECTION */}
        <section className="flex flex-col lg:flex-row gap-12 items-center min-h-[60vh]">
          <div className="flex-1 flex flex-col gap-6 items-start">
            <div className="text-secondary text-sm font-mono uppercase tracking-widest border border-secondary/30 px-3 py-1 bg-secondary/5">
              Open survival · est. 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter glitch-text text-white">
              NYV0X <span className="text-primary">SMP</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-sans font-light">
              A long-term survival world where every chunk you load is one someone else already built on. No resets, no plugins that hold your hand — just a persistent map, a small community, and whatever you make of it.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground font-bold px-8 py-4 uppercase tracking-widest hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Join the Discord <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#features"
                className="border border-muted-border text-muted-foreground hover:text-primary hover:border-primary px-8 py-4 uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                See what's built
              </a>
              <a 
                href="/map"
                className="border border-muted-border text-muted-foreground hover:text-secondary hover:border-secondary px-8 py-4 uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                View Map
              </a>
            </div>
          </div>

          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="border border-primary bg-background terminal-box p-6 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/20"></div>
              <div className="flex justify-between items-center mb-6 border-b border-border pb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Connection Info</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary/50"></div>
                  <div className="w-2 h-2 rounded-full bg-secondary/50"></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-muted-foreground mb-1 uppercase">Server Address</div>
                  <button 
                    onClick={copyIp}
                    className="w-full flex items-center justify-between bg-primary/10 border border-primary/30 p-3 hover:bg-primary/20 transition-colors group/btn"
                  >
                    <span className="font-mono text-primary text-lg">play.nyvox.xyz</span>
                    {copied ? <Check className="w-5 h-5 text-primary" /> : <Copy className="w-5 h-5 text-primary opacity-50 group-hover/btn:opacity-100 transition-opacity" />}
                  </button>
                </div>
                <div className="flex justify-between border-t border-border/50 pt-4">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase">Version</div>
                    <div className="font-mono mt-1 text-white">1.21.11</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground uppercase">Whitelist</div>
                    <div className="font-mono mt-1 text-secondary">COMING SOON</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="max-w-4xl">
          <SectionHeader>Philosophy</SectionHeader>
          <div className="prose prose-invert max-w-none text-lg text-muted-foreground font-sans font-light leading-relaxed border-l-2 border-secondary pl-6 py-2">
            <p>
              We believe the best Minecraft experiences emerge over years, not months. Most servers wipe their maps right when history starts getting interesting. We don't.
            </p>
            <p className="mt-4">
              Nyv0x is committed to a single persistent map, a player-driven economy, and a strict no-pay-to-win ruleset. There are no seasonal wipes, no arbitrary resets, and no drama. Just a canvas that remembers what you build.
            </p>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features">
          <SectionHeader>System Architecture</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Cpu />}
              title="Vanilla-plus core"
              desc="Light QoL datapacks only. No gameplay-altering plugins that ruin the vanilla feel."
              tag="SURVIVAL"
            />
            <FeatureCard 
              icon={<Users />}
              title="Player-run market"
              desc="Shops priced by players. A completely organic, community-driven trade network."
              tag="ECONOMY"
            />
            <FeatureCard 
              icon={<Server />}
              title="Community events"
              desc="Build contests, boss fights, and market days. All scheduled in our Discord."
              tag="EVENTS"
            />
            <FeatureCard 
              icon={<ShieldAlert />}
              title="Active, low-ego mods"
              desc="A small team that plays on the same map and actually answers reports."
              tag="STAFF"
            />
            <FeatureCard 
              icon={<Terminal />}
              title="Backed up, always on"
              desc="Hourly off-site backups and a reliable dedicated host. Your builds are safe."
              tag="UPTIME"
            />
          </div>
        </section>


        {/* RULES SECTION */}
        <section id="rules" className="max-w-4xl">
          <SectionHeader>Protocols</SectionHeader>
          <div className="space-y-4">
            <RuleRow num="01" text="Be someone people want to build near. Harassment, hate speech, and drama gets you removed instantly." />
            <RuleRow num="02" text="No griefing, stealing, or hacked clients. Claim your land early to avoid disputes." />
            <RuleRow num="03" text="No lag machines. Farms are welcome, but tick-halving monstrosities are not." />
            <RuleRow num="04" text="Keep builds a reasonable distance from spawn. Give new players room to breathe." />
            <RuleRow num="05" text="Disputes go to staff via DM, never in global chat. Keep the server feed clean." />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-primary/5 border border-primary/20 p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 blur-3xl rounded-full"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tighter">Spawn is waiting.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            The server is open now — no whitelist required. A whitelist application is coming soon, so join the Discord early to lock in your spot.
          </p>
          <a 
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold px-10 py-5 uppercase tracking-widest hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          >
            [ Initiate Connection ] <ExternalLink className="w-5 h-5" />
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border mt-auto bg-background py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span>nyv0x.smp — not affiliated with Mojang or Microsoft</span>
          </div>
          <div className="flex gap-6">
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Discord</a>
            <a href="https://www.youtube.com/@nyvox0" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc, icon, tag }: { title: string, desc: string, icon: React.ReactNode, tag: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border bg-card p-6 relative group hover:border-primary/50 transition-colors"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all">
        {icon}
      </div>
      <div className="text-[10px] font-bold text-secondary mb-4 uppercase tracking-widest">{tag}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-sm text-muted-foreground font-sans font-light leading-relaxed">{desc}</p>
      
      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-border group-hover:border-primary/50 transition-colors m-1"></div>
    </motion.div>
  );
}

function RuleRow({ num, text }: { num: string, text: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex gap-6 items-start p-4 hover:bg-white/5 transition-colors border-l border-transparent hover:border-primary"
    >
      <div className="text-primary font-bold text-xl pt-1">
        {num}
      </div>
      <div className="text-muted-foreground font-sans font-light text-lg">
        {text}
      </div>
    </motion.div>
  );
}
