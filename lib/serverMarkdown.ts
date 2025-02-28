import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Server-side function to load markdown content
 * This function runs only on the server and provides pre-rendered content
 */
export async function loadMarkdownContentOnServer(locale: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'public', 
    locale === 'zh' ? 'content/about-zh.md' : 'content/about-en.md');
  
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error('Error loading markdown on server:', error);
    return ''; // Return empty string on error
  }
} 