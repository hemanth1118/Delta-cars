# Deployment Guide - Delta Cars Website

## 🚀 Fast & Free Deployment Options

### Option 1: Vercel (Recommended - Fastest & Easiest) ⭐

**Why Vercel?**
- ✅ Made by Next.js creators - perfect integration
- ✅ Free tier with generous limits
- ✅ Automatic deployments from GitHub
- ✅ Fast global CDN
- ✅ SSL certificate included
- ✅ Custom domain support
- ✅ Zero configuration needed

**Steps to Deploy:**

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/delta-cars.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" (use GitHub account for easiest setup)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js - click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

3. **Custom Domain** (Optional):
   - In Vercel dashboard, go to Settings → Domains
   - Add your domain (e.g., deltacars.com)
   - Follow DNS instructions

**Time to Deploy:** ~5 minutes total

---

### Option 2: Netlify (Alternative - Also Free)

**Why Netlify?**
- ✅ Free tier available
- ✅ Easy GitHub integration
- ✅ Good performance
- ✅ Free SSL

**Steps:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Click "New site from Git"
5. Select repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy"

**Time to Deploy:** ~5-10 minutes

---

### Option 3: Railway (Alternative)

**Why Railway?**
- ✅ Free tier with $5 credit/month
- ✅ Simple deployment
- ✅ Good for full-stack apps

**Steps:**
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. New Project → Deploy from GitHub
4. Select repository
5. Auto-detects and deploys

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] **Environment Variables** (if needed):
  - Google Sheets API credentials (if using)
  - Email service API keys (if using)
  - Add these in Vercel/Netlify dashboard under Settings → Environment Variables

- [ ] **Test Locally**:
  ```bash
  npm run build
  npm run start
  ```
  Make sure build succeeds without errors

- [ ] **Update README** with your live URL

---

## 🔧 Configuration Needed

### For Google Sheets Integration:

1. **Get Google Sheets API Credentials:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project
   - Enable Google Sheets API
   - Create Service Account
   - Download JSON key file
   - Share your Google Sheet with the service account email

2. **Add to Vercel Environment Variables:**
   - `GOOGLE_SHEETS_ID` = Your spreadsheet ID
   - `GOOGLE_CREDENTIALS` = Contents of JSON key file (or use file upload)

### For Contact Form Email:

1. **Choose Email Service:**
   - **Resend** (Recommended - Free tier: 3,000 emails/month)
   - **SendGrid** (Free tier: 100 emails/day)
   - **Nodemailer** (Free but requires SMTP)

2. **Setup Resend** (Easiest):
   - Sign up at [resend.com](https://resend.com)
   - Get API key
   - Add to Vercel: `RESEND_API_KEY` = your-api-key
   - Update `app/api/contact/route.ts` with Resend code

---

## 🎯 Quick Start (Vercel - Recommended)

**Fastest Path to Live Site:**

1. **Install Vercel CLI** (optional but faster):
   ```bash
   npm i -g vercel
   ```

2. **Deploy from terminal**:
   ```bash
   vercel
   ```
   - Follow prompts
   - Site goes live in ~2 minutes!

3. **Or use GitHub + Vercel Dashboard** (easiest):
   - Push to GitHub
   - Connect in Vercel dashboard
   - Auto-deploys on every push

---

## 📊 Free Tier Limits

### Vercel Free Tier:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Serverless functions (100GB-hours/month)
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Perfect for most websites

### Netlify Free Tier:
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Custom domains
- ✅ SSL certificates

---

## 🚨 Important Notes

1. **Build Time:** First build takes 2-5 minutes, subsequent builds are faster

2. **Environment Variables:** Add sensitive keys in dashboard, NOT in code

3. **Custom Domain:** Free SSL is automatic, just point DNS to Vercel/Netlify

4. **Auto-Deploy:** Every push to main branch auto-deploys (can disable)

5. **Preview Deployments:** Every PR gets a preview URL automatically

---

## 🎉 After Deployment

Your site will be live at:
- `https://your-project-name.vercel.app` (Vercel)
- `https://your-project-name.netlify.app` (Netlify)

Share this URL with customers!

---

## 💡 Pro Tips

1. **Use Vercel** - It's literally made for Next.js
2. **Connect GitHub** - Auto-deploys on every push
3. **Add Custom Domain** - Looks more professional
4. **Enable Analytics** - See visitor stats (free in Vercel)
5. **Set up Preview URLs** - Test before going live

---

## 🆘 Troubleshooting

**Build Fails?**
- Check terminal for errors
- Run `npm run build` locally first
- Check environment variables are set

**Site Not Loading?**
- Check build logs in dashboard
- Verify all dependencies are in `package.json`
- Check for TypeScript errors

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment

