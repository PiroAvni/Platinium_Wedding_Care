# Netlify Deployment Guide - 100% Free

## 🎯 Complete Setup for Wedding Dress Website

This guide will walk you through deploying your wedding dress cleaning website to Netlify with:
- ✅ **Free Hosting** - Unlimited bandwidth
- ✅ **Free CMS** - Netlify CMS for content management
- ✅ **Free Forms** - 100 form submissions per month
- ✅ **Free SSL** - Automatic HTTPS
- ✅ **Free CDN** - Global content delivery

**Total Cost: $0/month**

---

## 📋 Prerequisites

1. ✅ GitHub account (you already have this)
2. ✅ Code pushed to GitHub repository
3. 📧 Email address for Netlify account

---

## 🚀 Step 1: Deploy to Netlify

### 1.1 Create Netlify Account

1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Click **"Sign up"**
3. Choose **"Sign up with GitHub"** (easiest option)
4. Authorize Netlify to access your GitHub account

### 1.2 Deploy Your Site

1. After login, click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify to access your repositories
4. Select your repository: `Platinium_Wedding_Care`
5. Configure build settings:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. Click **"Deploy site"**

⏱️ **Wait 2-3 minutes** for initial deployment to complete.

### 1.3 Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow instructions to:
   - Purchase domain through Netlify ($9-15/year)
   - OR connect existing domain (free)

**For now, you get a free subdomain like:** `your-site-name.netlify.app`

---

## 📝 Step 2: Enable Contact Forms

Your forms are already configured! But you need to verify the setup:

### 2.1 Verify Form Detection

1. After deployment, go to **Site settings** → **Forms**
2. You should see two forms detected:
   - ✅ `contact` (from Contact page)
   - ✅ `quote-request` (from Quote Request page)

### 2.2 Test Form Submission

1. Visit your live site
2. Fill out the contact form
3. Submit it
4. Check **Forms** tab in Netlify dashboard to see the submission

### 2.3 Email Notifications

1. Go to **Site settings** → **Forms** → **Form notifications**
2. Click **"Add notification"**
3. Choose **"Email notification"**
4. Enter email address to receive form submissions
5. Select which form(s) to get notifications for

**Free tier includes:** 100 form submissions/month

---

## 🎨 Step 3: Enable Netlify CMS

This is the **most important step** - it allows you to edit content without coding!

### 3.1 Enable Identity Service

1. Go to **Site settings** → **Identity**
2. Click **"Enable Identity"**
3. Under **Registration preferences**, select:
   - ✅ **Invite only** (recommended for security)
4. Under **External providers** (optional):
   - You can enable Google/GitHub login if desired

### 3.2 Enable Git Gateway

1. Still in **Identity** settings
2. Scroll to **Services** section
3. Click **"Enable Git Gateway"**
4. This allows CMS to save changes directly to GitHub

### 3.3 Invite Yourself as Admin

1. Go to **Identity** tab (top navigation)
2. Click **"Invite users"**
3. Enter your email address
4. Click **"Send"**
5. Check your email for invitation
6. Click link in email to set your password

### 3.4 Access Your CMS

1. Visit: `https://your-site-name.netlify.app/admin`
2. Click **"Login with Netlify Identity"**
3. Enter your email and password
4. **You're in!** 🎉

---

## 📚 Step 4: Using Netlify CMS

### 4.1 Understanding Collections

Your CMS has these content sections:

1. **Services** - Add/edit/delete services
2. **Testimonials** - Manage customer reviews
3. **Gallery** - Upload/delete images
4. **Settings** - Update business info, contact details, hours

### 4.2 Editing a Service

1. In CMS, click **"Services"** in sidebar
2. Click on any service to edit
3. Change title, description, icon
4. Click **"Save"** (top right)
5. Click **"Publish"** → **"Publish now"**

**What happens next:**
- CMS saves changes to GitHub
- Netlify detects GitHub update
- Site automatically rebuilds (2-3 minutes)
- Changes appear live!

### 4.3 Adding a New Service

1. Click **"Services"** in sidebar
2. Click **"New Service"** button
3. Fill in all fields:
   - **Title:** Service name
   - **Description:** What the service includes
   - **Icon:** Choose from list (e.g., `Sparkles`, `Shield`, `Package`)
   - **Order:** Number for sorting (1, 2, 3...)
4. Click **"Publish"** → **"Publish now"**

### 4.4 Managing Gallery Images

1. Click **"Gallery"** in sidebar
2. To add image:
   - Click **"New Gallery Image"**
   - **Upload image** (click on image field)
   - Add **caption** (optional)
   - Set **category** (Wedding Dresses, Groom Suits, etc.)
   - Click **"Publish"**
3. To delete image:
   - Click on image in list
   - Click **"Delete"** button (top right)
   - Confirm deletion

**Image requirements:**
- Format: JPG, PNG, WebP
- Size: Recommended < 2MB for fast loading
- Dimensions: Minimum 800x600px

### 4.5 Updating Business Settings

1. Click **"Settings"** in sidebar
2. Click on **"Business Settings"**
3. Update:
   - Phone number
   - Email address
   - WhatsApp number
   - Business hours
   - Service area
4. Click **"Publish"**

---

## 🔄 Step 5: Workflow

### Normal Content Update Process

```
1. You edit content in CMS at /admin
   ↓
2. Click "Publish"
   ↓
3. CMS commits changes to GitHub
   ↓
4. Netlify detects change
   ↓
5. Automatic rebuild starts
   ↓
6. Site updates live (2-3 min)
```

### What You Can Edit Without Coding

✅ **All text content** - Titles, descriptions, paragraphs
✅ **Business information** - Phone, email, hours, address
✅ **Services** - Add, edit, delete, reorder
✅ **Testimonials** - Add, edit, delete customer reviews
✅ **Gallery images** - Upload, delete, organize photos
✅ **Settings** - WhatsApp number, contact details

### What Requires Coding

❌ **Layout/design** - Colors, fonts, page structure
❌ **New page types** - Would need developer
❌ **Custom features** - New functionality
❌ **WhatsApp button** - Position, behavior

---

## 🔍 Step 6: Google Reviews Integration (Optional)

Currently showing mock reviews. To show real Google reviews:

### 6.1 Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project
3. Enable **Places API**
4. Create **API Key**
5. Restrict key to your domain

### 6.2 Get Your Place ID

1. Go to [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for your business
3. Copy the **Place ID**

### 6.3 Add to Netlify

1. In Netlify dashboard: **Site settings** → **Environment variables**
2. Add two variables:
   ```
   VITE_GOOGLE_PLACES_API_KEY = your-api-key-here
   VITE_GOOGLE_PLACE_ID = your-place-id-here
   ```
3. Click **"Save"**
4. Trigger new deployment: **Deploys** → **"Trigger deploy"** → **"Deploy site"**

**Cost:** Google Places API is free for low usage (typically under free tier limits)

---

## 💰 Cost Breakdown

| Service | Free Tier | Paid Tier | You Need |
|---------|-----------|-----------|----------|
| Netlify Hosting | 100GB bandwidth | Unlimited | **Free** ✅ |
| Netlify Forms | 100/month | Unlimited | **Free** ✅ |
| Netlify CMS | Unlimited | N/A | **Free** ✅ |
| Netlify Identity | 1,000 users | More users | **Free** ✅ |
| SSL Certificate | Included | N/A | **Free** ✅ |
| Custom Domain | External | $9-15/year | Optional |
| Google Places API | 28,500 calls/month | Pay as you go | **Free** ✅ |

**Total Monthly Cost: $0** 🎉

---

## 📱 Step 7: Mobile CMS Access

You can edit content from your phone!

1. Visit `your-site.netlify.app/admin` on mobile
2. Login with Netlify Identity
3. Edit content just like on desktop
4. Publish changes

Works on iOS Safari and Android Chrome.

---

## 🚨 Troubleshooting

### Forms not showing in Netlify dashboard

**Solution:**
1. Make sure forms have `data-netlify="true"` attribute
2. Redeploy site: **Deploys** → **"Trigger deploy"**
3. Submit test form
4. Check **Forms** tab again

### Can't login to /admin

**Solution:**
1. Verify Identity is enabled: **Site settings** → **Identity**
2. Make sure you accepted email invitation
3. Try **"Forgot password"** to reset
4. Check browser isn't blocking third-party cookies

### CMS changes not appearing on site

**Solution:**
1. Check **Deploys** tab - build should start automatically
2. If no build triggered, click **"Trigger deploy"**
3. Wait 2-3 minutes for rebuild
4. Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Images not uploading

**Solution:**
1. Check file size (must be < 10MB)
2. Use JPG or PNG format
3. Try different image
4. Check browser console for errors

---

## 📋 Pre-Launch Checklist

Before sharing site with customers:

- [ ] Test all forms (Contact, Quote Request)
- [ ] Set up email notifications for forms
- [ ] Upload real gallery images (replace placeholders)
- [ ] Update business settings (phone, email, hours)
- [ ] Test WhatsApp button on mobile
- [ ] Add real testimonials (or remove mock ones)
- [ ] Test CMS access from different device
- [ ] Update README.md with live URL
- [ ] Test on mobile devices (iOS and Android)
- [ ] Test on different browsers (Chrome, Safari, Firefox)

---

## 🎯 Next Steps

### Immediate (Today)
1. ✅ Deploy to Netlify
2. ✅ Enable Identity + Git Gateway
3. ✅ Invite yourself to CMS
4. ✅ Test form submission

### This Week
1. Upload real gallery images
2. Update business information
3. Add real testimonials
4. Test on mobile

### Optional
1. Set up custom domain
2. Configure Google Reviews API
3. Add more services through CMS

---

## 💡 Tips for Content Editing

### Writing Good Service Descriptions
- Keep it under 200 words
- Focus on customer benefits
- Include what's included
- Mention time frames
- Add pricing if desired

### Choosing Good Gallery Images
- High resolution (at least 1200px wide)
- Good lighting
- Show before/after when possible
- Variety of dress styles
- Professional quality

### Managing Testimonials
- Ask permission to use reviews
- Include customer first name only
- Add date reviewed
- Keep testimonial under 100 words
- Mix different service types

---

## 📞 Support

### Netlify Support
- Docs: [https://docs.netlify.com](https://docs.netlify.com)
- Community: [https://answers.netlify.com](https://answers.netlify.com)
- Support: Free tier includes community support

### CMS Documentation
- Guide: [https://www.netlifycms.org/docs/](https://www.netlifycms.org/docs/)
- Widget Reference: For customizing fields

---

## 🎉 You're All Set!

Your wedding dress cleaning website is now:
- ✅ Live on the internet
- ✅ Easy to update (no coding needed)
- ✅ Accepting form submissions
- ✅ Mobile-friendly CMS
- ✅ 100% free to operate
- ✅ Professional and secure

**Questions?** Review this guide or check Netlify documentation.

**Happy publishing!** 🚀
