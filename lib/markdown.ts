/**
 * Utility functions for loading and processing Markdown content
 */

/**
 * Loads Markdown content from a file
 * @param path Path to the Markdown file relative to the public directory
 * @returns The Markdown content as a string
 */
export async function loadMarkdownContent(path: string): Promise<string> {
  try {
    const response = await fetch(`/${path}`);
    if (!response.ok) {
      throw new Error(`Failed to load Markdown content: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading Markdown content:', error);
    return ''; // Return empty string on error
  }
} 