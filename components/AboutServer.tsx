import { loadMarkdownContentOnServer } from "@/lib/serverMarkdown";
import AboutClientIsland from "./AboutClientIsland";

/**
 * Server component for the About section
 * This component pre-fetches the markdown content on the server
 * and passes it to the client island for rendering with animations
 */
export default async function AboutServer({ locale }: { locale: string }) {
  // Server-side data fetching
  const markdownContent = await loadMarkdownContentOnServer(locale);
  
  // Pass the pre-fetched content to the client component
  return <AboutClientIsland markdownContent={markdownContent} />;
} 