import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';
import { revalidatePath, unstable_noStore } from 'next/cache';

// export const revalidate = 5;
// this constant do the same thing we did for next: { revalidate: 5 } in fetch . the name should be same revalidate.


// export const dynamic = 'force-dynamic';
// export const dynamic = 'error';
// export const dynamic = 'force-cache';
// export const dynamic = 'cache-first';
// export const dynamic = 'only-cache';
// export const dynamic = 'default';
// export const dynamic = 'auto';

/**
 * EXPLANATION OF CACHING AND RENDERING OPTIONS:
 * 
 * Route Segment Config:
 * - revalidate: Defines the cache lifetime for the entire route in seconds (Incremental Static Regeneration).
 * - dynamic: 
 *    - 'force-dynamic': Disables all caching and forces dynamic rendering on every request (SSR).
 *    - 'force-static': Forces the page to be static, even if it uses dynamic functions like cookies().
 *    - 'error': Throws an error if any dynamic functions or data fetching are used.
 *    - 'auto': The default behavior; caches as much as possible without breaking dynamic usage.
 * 
 * Fetch API Cache Options:
 * - cache: 'force-cache': Next.js looks for a matching request in its Data Cache (Default in Next 13/14).
 * - cache: 'no-store': Next.js fetches the resource from the remote server on every request (Default in Next 15).
 * - next: { revalidate: 5 }: Sets a cache lifetime for a specific fetch request, allowing it to be updated in the background.
 */



/**
 * On-Demand Revalidation:
 * - revalidatePath(path): Manually purges the Data Cache for a specific route path.
 *   It allows you to update the UI immediately after a data mutation.
 * - revalidateTag(tag): Manually purges the Data Cache for all fetch requests 
 *   associated with a specific cache tag (defined via next: { tags: ['tag-name'] }).
 *   This is more granular than revalidatePath as it can affect multiple routes.
 */


export default async function MessagesPage() {
  // unstable_noStore(); // this will disable caching for this page.



  // next js has modified this fetch so that it caches the response and see when u want to change and many more features.
  // const response = await fetch('http://localhost:8080/messages', {
  // cache: 'force-cache',
  // by default no-store is there which is used in next 15.
  // cache: 'no-store',

  // cache: 'default',
  // cache: 'only-if-cached',
  // cache: 'reload',
  // cache: 'force-cache',
  // cache: 'use-cache',


  // next: {
  //   revalidate: 5, // revalidate after 5 seconds
  // },
  // });

  // const messages = await response.json();

  const messages = await getMessages()

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
