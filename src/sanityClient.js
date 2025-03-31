import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wqdv2yxr',     // Replace with your actual Sanity project ID
  dataset: 'production',
  apiVersion: '2025-03-31',         // or today's date
  useCdn: true,                     // Fast reads, doesn't show drafts
});

export default client;