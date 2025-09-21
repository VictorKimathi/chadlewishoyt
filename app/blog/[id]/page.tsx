import { getBlogPost, getAllBlogPosts } from '../../../lib/blogData';
import path from 'path';
import fs from 'fs/promises';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// This props type will be used by our page component
type PostPageProps = {
  params: {
    id: string;
  };
};

// --- 1. GENERATE METADATA (for SEO) ---
// This function replaces the old <Head> component
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}


// --- 2. GENERATE STATIC PARAMS (for Static Site Generation) ---
// This function tells Next.js which blog posts to build at build time.
// It replaces the old getStaticPaths function.
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  
  // Defensive check: If the data source returns something invalid (e.g., due to a parsing error),
  // we prevent a crash during the build process.
  if (!posts || !Array.isArray(posts)) {
    return [];
  }
  
  return posts.map((post) => ({
    id: post.id,
  }));
}


// --- 3. THE PAGE COMPONENT ---
// This is an async Server Component that fetches its own data.
// It replaces the old page component and getStaticProps.
export default async function PostPage({ params }: PostPageProps) {
  const { id } = params;
  const post = getBlogPost(id);

  // If no post is found, show the 404 page
  if (!post) {
    notFound();
  }

  // Read the HTML content from the corresponding file
  let htmlContent: string;
  try {
    const filePath = path.join(process.cwd(), 'public', post.content);
    htmlContent = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error(`Could not read file for post "${id}":`, error);
    // If the HTML file is missing, also show a 404 page
    notFound();
  }

  return (
    <article className="bg-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-500 mb-8">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        
        {post.image && (
          <div className="relative h-64 md:h-96 w-full mb-8 overflow-hidden">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Render the fetched HTML content */}
        <div 
          className="prose lg:prose-xl max-w-none" 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
      </div>
    </article>
  );
}

