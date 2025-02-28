"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SectionHeading from "./SectionHeading";

interface AboutClientIslandProps {
  markdownContent: string;
}

export default function AboutClientIsland({ markdownContent }: AboutClientIslandProps) {
  const { ref } = useSectionInView("About");
  const sectionLan = useTranslations("SectionName");

  // Custom components for styling Markdown
  const components = {
    h1: ({ children, ...props }: React.ComponentPropsWithoutRef<"h1">) => (
      <h1 className="text-xl md:text-2xl font-bold mb-4" {...props}>
        {children}
      </h1>
    ),
    p: ({ children, ...props }: React.ComponentPropsWithoutRef<"p">) => (
      <p className="mb-3" {...props}>
        {children}
      </p>
    ),
    a: ({ children, ...props }: React.ComponentPropsWithoutRef<"a">) => (
      <a
        className="text-xl md:text-2xl font-bold italic underline"
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    strong: ({
      children,
      ...props
    }: React.ComponentPropsWithoutRef<"strong">) => (
      <strong className="font-bold" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }: React.ComponentPropsWithoutRef<"em">) => (
      <em className="italic" {...props}>
        {children}
      </em>
    ),
  };

  return (
    <motion.section
      ref={ref}
      // @ts-ignore - motion.section has className prop
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      <div className="flex flex-col gap-2">
        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </motion.section>
  );
} 