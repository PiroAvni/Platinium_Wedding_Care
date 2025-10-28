# 🚀 Quick Start Guide - Netlify CMS

## Your CMS Dashboard

**URL:** `https://your-site-name.netlify.app/admin`

**Login:** Use your Netlify Identity email and password

---

## 📝 Editing Content

### How to Edit a Service

1. Login to `/admin`
2. Click **"Services"** in left sidebar
3. Click on service you want to edit
4. Make your changes
5. Click **"Publish"** (top right)
6. Click **"Publish now"**
7. Wait 2-3 minutes for site to update

### How to Add a New Service

1. Click **"Services"** in sidebar
2. Click **"New Service"** button
3. Fill in:
   - **Title:** Name of service (e.g., "Express Cleaning")
   - **Description:** What's included (keep under 200 words)
   - **Icon:** Choose from dropdown (e.g., Sparkles, Shield, Clock)
   - **Order:** Number for sorting (1, 2, 3, etc.)
4. Click **"Publish"** → **"Publish now"**

### How to Upload Gallery Images

1. Click **"Gallery"** in sidebar
2. Click **"New Gallery Image"**
3. Click on image area to upload file
4. Add caption (optional)
5. Choose category (Wedding Dresses, Suits, etc.)
6. Click **"Publish"**

**Image Tips:**
- Use high quality images (at least 1200px wide)
- Keep file size under 2MB
- Use JPG or PNG format

### How to Delete Gallery Images

1. Click **"Gallery"** in sidebar
2. Click on image you want to delete
3. Click **"Delete"** button (top right)
4. Confirm deletion

### How to Edit Business Settings

1. Click **"Settings"** in sidebar
2. Click on **"Business Settings"**
3. Update any fields:
   - Phone number
   - Email
   - WhatsApp number
   - Business hours
   - Service area
4. Click **"Publish"**

### How to Add/Edit Testimonials

1. Click **"Testimonials"** in sidebar
2. To add new: Click **"New Testimonial"**
3. To edit: Click on existing testimonial
4. Fill in:
   - **Name:** Customer first name
   - **Review:** Their testimonial (under 100 words)
   - **Rating:** 1-5 stars
   - **Date:** When they left review
   - **Service:** What service they used
5. Click **"Publish"**

---

## 🔄 What Happens After You Publish

```
You click "Publish"
    ↓
CMS saves to GitHub (5 seconds)
    ↓
Netlify detects change
    ↓
Site rebuilds (2-3 minutes)
    ↓
Your changes appear live!
```

**Be patient:** It takes 2-3 minutes for changes to appear on live site.

**Tip:** Hard refresh browser after waiting: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

---

## 📧 Managing Form Submissions

### Where to See Form Submissions

1. Login to [Netlify Dashboard](https://app.netlify.com)
2. Click on your site
3. Go to **"Forms"** tab
4. See all submissions with timestamps

### Setting Up Email Notifications

1. In Netlify: **Site settings** → **Forms** → **Notifications**
2. Click **"Add notification"**
3. Choose **"Email notification"**
4. Enter your email address
5. Select which forms to get notified about
6. Click **"Save"**

Now you'll get an email every time someone submits a form!

---

## 📱 Editing from Mobile

You can edit content from your phone:

1. Visit `your-site.netlify.app/admin` on mobile browser
2. Login with same credentials
3. Edit content just like on desktop
4. Click **"Publish"**

Works on iPhone Safari and Android Chrome.

---

## 🎨 Content Writing Tips

### Service Descriptions
- **Keep it short:** 100-200 words
- **Focus on benefits:** What does customer get?
- **Be specific:** Mention timeframes, what's included
- **Use bullet points:** Easier to read
- **Include pricing:** If you want to display prices

**Example:**
```
Wedding Dress Cleaning

Our premium wedding dress cleaning service uses specialist techniques to 
gently remove stains while preserving the delicate fabric. We handle silk, 
lace, and embellishments with expert care.

What's included:
• Professional stain removal
• Hand cleaning of delicate areas
• Expert pressing and finishing
• Protective packaging
• Free collection and delivery

Turnaround: 3-5 days
Service area: London M25
```

### Testimonials
- **Get permission:** Always ask customer first
- **Keep it real:** Authentic reviews convert better
- **First name only:** "Sarah M." for privacy
- **Be specific:** Mention specific service used
- **Recent dates:** Fresh reviews build trust

### Image Captions
- **Describe what's shown:** "Vintage lace wedding dress after cleaning"
- **Mention result:** "Restored to pristine condition"
- **Keep it short:** One sentence is enough

---

## 🚨 Troubleshooting

### Can't login to /admin

**Try this:**
1. Check you're using correct email
2. Click **"Forgot password"** to reset
3. Check email spam folder for reset link
4. Make sure cookies are enabled in browser

### Changes not appearing on site

**Try this:**
1. Wait full 3 minutes after publishing
2. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. Check Netlify dashboard **"Deploys"** tab - should show build in progress
4. If no build triggered, click **"Trigger deploy"**

### Image won't upload

**Try this:**
1. Check file size (must be under 10MB)
2. Use JPG or PNG format only
3. Try a different image
4. Check internet connection

### Logged out unexpectedly

**Why:** Session timeout for security

**Solution:** Just login again. Your unpublished changes are saved.

---

## ✅ Pre-Publish Checklist

Before publishing a change, double-check:

- [ ] Spelling and grammar correct?
- [ ] All required fields filled in?
- [ ] Images look good and load fast?
- [ ] Phone numbers formatted correctly?
- [ ] Links working (if any)?
- [ ] Content makes sense?

---

## 💡 Best Practices

### DO
- ✅ Save drafts often (CMS auto-saves)
- ✅ Preview changes before publishing
- ✅ Use high-quality images
- ✅ Keep content concise and clear
- ✅ Update regularly (shows business is active)
- ✅ Respond to form submissions quickly

### DON'T
- ❌ Don't publish without proofreading
- ❌ Don't use blurry or low-quality images
- ❌ Don't write walls of text (use bullet points)
- ❌ Don't delete all testimonials at once
- ❌ Don't share CMS login credentials
- ❌ Don't panic if something goes wrong (can always revert)

---

## 🔐 Security Tips

### Keep Your Account Safe
- Use strong, unique password
- Don't share login credentials
- Logout after editing (especially on shared computers)
- Enable 2-factor authentication if offered

### If Account Compromised
1. Change password immediately
2. Contact Netlify support
3. Review recent changes in CMS
4. Revert unauthorized changes via GitHub history

---

## 📞 Need Help?

### For Content Management Issues
- **Netlify CMS Docs:** https://www.netlifycms.org/docs/
- **Netlify Support:** https://answers.netlify.com
- **Your Developer:** [Insert contact here]

### For Form Submissions
- Check Netlify dashboard **"Forms"** tab
- Set up email notifications (see above)

### For Technical Issues
- Check `NETLIFY-DEPLOYMENT-GUIDE.md` for detailed help
- Contact Netlify support (free community support included)

---

## 📊 Monitoring Your Site

### Things to Check Weekly
- [ ] Form submissions - any new quotes?
- [ ] Site still loading fast?
- [ ] All images displaying correctly?
- [ ] Contact information still correct?
- [ ] Testimonials still current?

### Things to Update Monthly
- [ ] Add fresh testimonials
- [ ] Update gallery with recent work
- [ ] Review services - anything to add/change?
- [ ] Check business hours are correct
- [ ] Respond to all form submissions

---

## 🎯 Quick Actions Reference

| I Want To... | Click Here |
|--------------|------------|
| Edit a service | Services → Click service → Edit |
| Add new service | Services → New Service |
| Upload image | Gallery → New Gallery Image |
| Delete image | Gallery → Click image → Delete |
| Edit testimonial | Testimonials → Click review |
| Add testimonial | Testimonials → New Testimonial |
| Update phone | Settings → Business Settings |
| Change hours | Settings → Business Settings |
| See form submissions | Go to Netlify dashboard |

---

## 🎉 You're All Set!

Your website is live and you can now:
- ✅ Edit content anytime
- ✅ Add/remove services
- ✅ Manage gallery images
- ✅ Update business information
- ✅ Receive quote requests
- ✅ Respond via WhatsApp

**No coding required!**

---

## 💬 Common Questions

**Q: How long do changes take to appear?**
A: 2-3 minutes after clicking "Publish"

**Q: Can I edit from my phone?**
A: Yes! Visit /admin on any device

**Q: What if I make a mistake?**
A: Can revert changes via GitHub history

**Q: How many images can I upload?**
A: Unlimited (within reason)

**Q: Is there a limit on form submissions?**
A: 100/month on free plan (upgradable)

**Q: Can I have multiple admin users?**
A: Yes! Invite them via Netlify Identity

**Q: What if I forget my password?**
A: Use "Forgot password" on login page

**Q: Can I preview changes before publishing?**
A: Yes! CMS shows preview panel

---

**Happy editing!** 🚀

*For detailed deployment instructions, see `NETLIFY-DEPLOYMENT-GUIDE.md`*
