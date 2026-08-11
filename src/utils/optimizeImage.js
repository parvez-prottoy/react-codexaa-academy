export function optimizeImage(url) {
  if (!url) return '';
  
  // Only optimize Cloudinary URLs
  if (url.includes('cloudinary.com') && url.includes('/upload/')) {
    // If it already has optimization params like f_auto or q_auto, don't double inject
    if (url.includes('upload/f_auto') || url.includes('upload/q_auto')) {
      return url;
    }
    
    // Inject f_auto,q_auto for automatic WebP/AVIF format and smart quality compression
    return url.replace('/upload/', '/upload/f_auto,q_auto/');
  }
  
  return url;
}
