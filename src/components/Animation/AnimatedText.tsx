import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SplitBy = "chars" | "words";

type AnimatedTextProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  splitBy?: SplitBy;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
};

export default function AnimatedText({
  text,
  as = "span",
  className,
  splitBy = "words",
  delay = 0,
  duration = 0.7,
  stagger = 0.035,
  once = true,
}: AnimatedTextProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const tokens = useMemo(() => {
    if (splitBy === "chars") {
      return Array.from(text);
    }

    const words = text.split(/(\s+)/);
    return words.length ? words : [text];
  }, [splitBy, text]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const parts = Array.from(root.querySelectorAll("[data-anim-part]"));
    if (!parts.length) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(parts, { y: 24, opacity: 0, filter: "blur(10px)" });

      const tl = gsap.timeline({
        delay,
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once,
        },
      });

      tl.to(parts, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration,
        ease: "back.out(1.8)",
        stagger,
      });
    }, root);

    return () => ctx.revert();
  }, [delay, duration, once, splitBy, stagger, text]);

  const Tag = as;

  return (
    <Tag ref={(node) => {
      rootRef.current = node;
    }} className={className}>
      {tokens.map((token, idx) => {
        const isWhitespace = /^\s+$/.test(token);
        if (isWhitespace) {
          return <span key={`ws-${idx}`}>{token}</span>;
        }

        return (
          <span
            key={`t-${idx}`}
            data-anim-part
            className="inline-block will-change-transform"
          >
            {token}
          </span>
        );
      })}
    </Tag>
  );
}
