import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

/* ---------- Reveal ---------- */
const variants: Record<string, Variants> = {
  up: { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -60 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } },
  blur: { hidden: { opacity: 0, filter: "blur(20px)" }, show: { opacity: 1, filter: "blur(0px)" } },
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  direction?: keyof typeof variants;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      variants={variants[direction]}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Stagger container ---------- */
export function Stagger({ children, className, stagger = 0.12 }: { children: ReactNode; className?: string; stagger?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div className={className} variants={variants.up} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
);

/* ---------- Scroll progress bar (top of page) ---------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500"
    />
  );
}

/* ---------- Animated SVG wave divider (transparent, gold stroke) ---------- */
export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative w-full leading-[0] ${flip ? "rotate-180" : ""}`} aria-hidden>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[60px] md:h-[90px]"
      >
        <defs>
          <linearGradient id="waveGold" x1="0" x2="1">
            <stop offset="0%" stopColor="#f5c462" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#f5c462" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f5c462" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <motion.path
          fill="none"
          stroke="url(#waveGold)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          d="M0,60 C240,140 480,-20 720,60 C960,140 1200,-20 1440,60"
        />
        <motion.path
          fill="none"
          stroke="url(#waveGold)"
          strokeWidth="0.6"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.4, ease: "easeOut", delay: 0.2 }}
          d="M0,80 C240,10 480,150 720,80 C960,10 1200,150 1440,80"
        />
      </svg>
    </div>
  );
}

/* ---------- Animated curve / arc divider ---------- */
export function CurveDivider({ color = "#0a1024", flip = false }: { color?: string; flip?: boolean }) {
  return (
    <div className={`relative w-full leading-[0] -mt-[1px] ${flip ? "rotate-180" : ""}`} aria-hidden>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]">
        <path d="M0,0 Q720,160 1440,0 L1440,100 L0,100 Z" fill={color} />
      </svg>
    </div>
  );
}

/* ---------- Floating animated blobs (3D-ish background) ---------- */
export function BlobField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-amber-400/10 blur-[120px]"
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 -right-40 w-[36rem] h-[36rem] rounded-full bg-blue-500/10 blur-[120px]"
        animate={{ x: [0, -70, 40, 0], y: [0, -50, 30, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[28rem] h-[28rem] rounded-full bg-amber-300/10 blur-[120px]"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ---------- Parallax wrapper ---------- */
export function Parallax({ children, offset = 80, className }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ---------- 3D tilt card ---------- */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ rotateX: -6, rotateY: 8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{ transformStyle: "preserve-3d", transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Animated section wrapper combining divider + reveal ---------- */
export function AnimatedSection({
  children,
  topWave,
  bottomWave,
  waveColor = "#0a1024",
}: {
  children: ReactNode;
  topWave?: boolean;
  bottomWave?: boolean;
  waveColor?: string;
}) {
  return (
    <>
      {topWave && <WaveDivider color={waveColor} />}
      <Reveal>{children}</Reveal>
      {bottomWave && <WaveDivider flip color={waveColor} />}
    </>
  );
}
