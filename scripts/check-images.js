#!/usr/bin/env node

/**
 * Image Optimization Checker for GharbiDev Blog
 * 
 * This script checks the dimensions of social media images and provides
 * recommendations for optimization.
 */

const fs = require('fs');
const path = require('path');

// Optimal dimensions for social media
const OPTIMAL_DIMENSIONS = {
  facebook: { width: 1200, height: 630, ratio: 1.91 },
  twitter: { width: 1200, height: 600, ratio: 2.0 },
  linkedin: { width: 1200, height: 630, ratio: 1.91 }
};

// Blog images directory
const BLOG_IMAGES_DIR = path.join(__dirname, '../src/assets/images/blog');

/**
 * Get image dimensions (requires imagemagick or similar tool)
 * For now, we'll provide a template for manual checking
 */
function checkImageDimensions() {
  console.log('🖼️  Social Media Image Optimization Checker\n');
  console.log('='.repeat(50));
  
  if (!fs.existsSync(BLOG_IMAGES_DIR)) {
    console.error('❌ Blog images directory not found:', BLOG_IMAGES_DIR);
    return;
  }

  const imageFiles = fs.readdirSync(BLOG_IMAGES_DIR)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .filter(file => !file.includes('/')) // Only direct files, not subdirectories
    .sort();

  console.log(`📁 Found ${imageFiles.length} image files in blog directory:\n`);

  imageFiles.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });

  console.log('\n📏 Optimal Social Media Image Dimensions:');
  console.log('─'.repeat(50));
  console.log('🔵 Facebook/LinkedIn: 1200x630px (1.91:1 ratio)');
  console.log('🐦 Twitter: 1200x600px (2:1 ratio)');
  console.log('📱 Instagram: 1080x1080px (1:1 ratio)');
  
  console.log('\n💡 Recommendations:');
  console.log('─'.repeat(50));
  console.log('• Use WebP format for better compression');
  console.log('• Keep file size under 1MB');
  console.log('• Include article title and branding in image');
  console.log('• Use high contrast text for readability');
  console.log('• Test images on different devices and platforms');

  console.log('\n🛠️  Image Optimization Tools:');
  console.log('─'.repeat(50));
  console.log('• Online: Canva, Figma, Adobe Express');
  console.log('• CLI: ImageMagick, Sharp, Squoosh CLI');
  console.log('• Desktop: GIMP, Photoshop, Sketch');

  console.log('\n📋 Manual Check Instructions:');
  console.log('─'.repeat(50));
  console.log('1. Open each image file');
  console.log('2. Check dimensions (right-click → Properties/Get Info)');
  console.log('3. Verify aspect ratio matches social media requirements');
  console.log('4. Ensure file size is reasonable (<1MB)');
  console.log('5. Test social media preview using:');
  console.log('   • Facebook Sharing Debugger');
  console.log('   • Twitter Card Validator');
  console.log('   • LinkedIn Post Inspector');

  console.log('\n🔧 Quick Resize Commands (ImageMagick):');
  console.log('─'.repeat(50));
  console.log('# Resize for Facebook/LinkedIn:');
  console.log('convert input.jpg -resize 1200x630^ -gravity center -extent 1200x630 output.webp');
  console.log('\n# Resize for Twitter:');
  console.log('convert input.jpg -resize 1200x600^ -gravity center -extent 1200x600 output.webp');

  console.log('\n✅ SEO Image Checklist:');
  console.log('─'.repeat(50));
  console.log('□ Correct dimensions (1200x630 or 1200x600)');
  console.log('□ WebP format with fallback');
  console.log('□ File size under 1MB');
  console.log('□ Descriptive filename');
  console.log('□ Alt text in HTML');
  console.log('□ Proper Open Graph meta tags');
  console.log('□ Twitter Card meta tags');
  console.log('□ Tested on social platforms');

  console.log('\n🚀 Next Steps:');
  console.log('─'.repeat(50));
  console.log('1. Review each image against the checklist');
  console.log('2. Optimize images that don\'t meet requirements');
  console.log('3. Test social media previews');
  console.log('4. Update meta tags if needed');
  console.log('5. Monitor social media engagement');
}

// Run the checker
if (require.main === module) {
  checkImageDimensions();
}

module.exports = { checkImageDimensions, OPTIMAL_DIMENSIONS };
