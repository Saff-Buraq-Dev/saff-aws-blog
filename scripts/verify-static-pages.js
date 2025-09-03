#!/usr/bin/env node

/**
 * Verification Script for Static Pages
 * 
 * This script verifies that the generated static pages have correct meta tags
 * and image paths for social media crawlers.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function verifyStaticPages() {
  console.log('🔍 Verifying static pages for social media crawlers...\n');

  const blogDetailsDir = path.join(__dirname, '../dist/blog-details');
  
  if (!fs.existsSync(blogDetailsDir)) {
    console.error('❌ Blog details directory not found. Run npm run build first.');
    return;
  }

  const articles = fs.readdirSync(blogDetailsDir);
  let totalChecks = 0;
  let passedChecks = 0;

  articles.forEach(articleId => {
    const indexPath = path.join(blogDetailsDir, articleId, 'index.html');
    
    if (!fs.existsSync(indexPath)) {
      console.log(`❌ ${articleId}: index.html not found`);
      return;
    }

    console.log(`📄 Checking ${articleId}:`);
    
    const content = fs.readFileSync(indexPath, 'utf8');
    
    // Check for required meta tags
    const checks = [
      {
        name: 'Title tag',
        regex: /<title>([^<]+)<\/title>/,
        required: true
      },
      {
        name: 'Meta description',
        regex: /<meta name="description" content="([^"]+)"/,
        required: true
      },
      {
        name: 'Open Graph title',
        regex: /<meta property="og:title" content="([^"]+)"/,
        required: true
      },
      {
        name: 'Open Graph description',
        regex: /<meta property="og:description" content="([^"]+)"/,
        required: true
      },
      {
        name: 'Open Graph image',
        regex: /<meta property="og:image" content="([^"]+)"/,
        required: true
      },
      {
        name: 'Twitter Card',
        regex: /<meta property="twitter:card" content="([^"]+)"/,
        required: true
      },
      {
        name: 'JSON-LD structured data',
        regex: /<script type="application\/ld\+json">/,
        required: true
      },
      {
        name: 'Canonical URL',
        regex: /<link rel="canonical" href="([^"]+)"/,
        required: true
      }
    ];

    checks.forEach(check => {
      totalChecks++;
      const match = content.match(check.regex);
      
      if (match) {
        console.log(`   ✅ ${check.name}: ${match[1] || 'Found'}`);
        passedChecks++;
      } else {
        console.log(`   ❌ ${check.name}: Missing`);
      }
    });

    // Special check for image path format
    const ogImageMatch = content.match(/<meta property="og:image" content="([^"]+)"/);
    if (ogImageMatch) {
      const imageUrl = ogImageMatch[1];
      if (imageUrl.includes('/assets/') && imageUrl.includes('-') && imageUrl.includes('.')) {
        console.log(`   ✅ Image path format: Correct (hashed asset)`);
        passedChecks++;
      } else {
        console.log(`   ❌ Image path format: Incorrect (not a hashed asset)`);
      }
      totalChecks++;
    }

    console.log('');
  });

  console.log('📊 Summary:');
  console.log(`   Total checks: ${totalChecks}`);
  console.log(`   Passed: ${passedChecks}`);
  console.log(`   Failed: ${totalChecks - passedChecks}`);
  console.log(`   Success rate: ${Math.round((passedChecks / totalChecks) * 100)}%`);

  if (passedChecks === totalChecks) {
    console.log('\n🎉 All checks passed! Your static pages are ready for social media crawlers.');
  } else {
    console.log('\n⚠️  Some checks failed. Please review the issues above.');
  }

  console.log('\n🧪 Test your pages with:');
  console.log('   • Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/');
  console.log('   • Twitter Card Validator: https://cards-dev.twitter.com/validator');
  console.log('   • LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/');
}

// Run the verification
if (import.meta.url === `file://${process.argv[1]}`) {
  verifyStaticPages();
}

export { verifyStaticPages };
