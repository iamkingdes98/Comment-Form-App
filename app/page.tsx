/* AI Cash Hub - Scaffolding for Vercel Deployment Base: Next.js App Router Playground (vercel/next-app-router-playground) */

// File: app/page.tsx export default function Home() { return ( <div className="p-8"> <h1 className="text-2xl font-bold">AI Cash Hub Dashboard</h1> <p className="mt-2 text-gray-600">Select a Wealth Solution module to begin implementation.</p> <ul className="mt-4 list-disc list-inside"> <li><a href="/comments" className="text-blue-600 hover:underline">Comment Form App (Demo)</a></li> <li><a href="/consulting" className="text-blue-600 hover:underline">Solution 1: AI Consulting</a></li> </ul> </div> ); }

// File: app/comments/page.tsx import { neon } from '@neondatabase/serverless';

export default function CommentPage() { async function create(formData: FormData) { 'use server'; const sql = neon(${process.env.DATABASE_URL}); const comment = formData.get('comment'); await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]); }

return ( <form action={create} className="p-8 space-y-4"> <h2 className="text-xl font-semibold">Submit a Comment</h2> <input
type="text"
placeholder="Write a comment"
name="comment"
className="border p-2 rounded w-full"
/> <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button> </form> ); }

// File: app/consulting/page.tsx export default function ConsultingPage() { return ( <div className="p-8"> <h2 className="text-xl font-bold">Solution 1: AI Consulting Services</h2> <p className="mt-2">Launch your high-ticket AI consulting offer. Follow these 3 steps:</p> <ol className="list-decimal list-inside mt-4 space-y-2"> <li>Define your niche and offer (e.g., ChatGPT automation for coaches)</li> <li>Create your proposal template using Notion or Systeme.io</li> <li>Send leads to your Stripe checkout link or booking form</li> </ol> </div> ); }

// File: lib/db.ts import { neon } from '@neondatabase/serverless';

export const db = neon(${process.env.DATABASE_URL});

