# 🚀 Netlify Deployment Guide - Two Versions Setup

This guide will help you deploy both the **Office Locator** and the **Old MOCI Website** on Netlify.

---

## 📋 Repository Information

**GitHub Repository:** https://github.com/fadishehadeh/moci-locator

**Branches:**
- `main` - Office Locator (Standalone App)
- `old-moci-website` - Full MOCI Website
- `feature/office-locator` - Development branch

---

## 🎯 Deployment Options

You have **TWO OPTIONS** for deploying both versions:

### **Option A: Two Separate Netlify Sites** (Recommended)
- Deploy each version as a separate site with its own URL
- Full control over each deployment
- Easier to manage

### **Option B: Single Site with Branch Deploys**
- One main site with branch preview deployments
- Single Netlify account/project
- Branch-specific URLs

---

## 🔧 Option A: Two Separate Netlify Sites (RECOMMENDED)

### **Site 1: Office Locator**

1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"

2. **Connect to GitHub**
   - Choose "GitHub"
   - Authorize Netlify if needed
   - Select repository: `fadishehadeh/moci-locator`

3. **Configure Build Settings**
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

4. **Custom Domain (Optional)**
   - Go to "Domain settings"
   - Add custom domain like: `office-locator.yourdomain.com`

5. **Site Name**
   - Change site name to something like: `moci-office-locator`

---

### **Site 2: Old MOCI Website**

1. **Go to Netlify Dashboard**
   - Click "Add new site" → "Import an existing project"

2. **Connect to GitHub**
   - Choose "GitHub"
   - Select repository: `fadishehadeh/moci-locator` (same repo)

3. **Configure Build Settings**
   - **Branch to deploy:** `old-moci-website`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

4. **Custom Domain (Optional)**
   - Go to "Domain settings"
   - Add custom domain like: `www.yourdomain.com` or `moci.yourdomain.com`

5. **Site Name**
   - Change site name to something like: `moci-full-website`

---

## 🔧 Option B: Single Site with Branch Deploys

### **Setup Main Site**

1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"

2. **Connect to GitHub**
   - Choose "GitHub"
   - Select repository: `fadishehadeh/moci-locator`

3. **Configure Build Settings**
   - **Branch to deploy:** `main` (Office Locator)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

### **Enable Branch Deploys**

4. **Go to Site Settings**
   - Navigate to: "Build & deploy" → "Continuous deployment"
   - Scroll to "Branch deploys"

5. **Configure Branch Deploys**
   - Select "Let me add individual branches"
   - Add branch: `old-moci-website`
   - Save

### **Access URLs**

After deployment, you'll have:
- **Main Site (Office Locator):** `https://your-site-name.netlify.app`
- **Branch Deploy (Old Website):** `https://old-moci-website--your-site-name.netlify.app`

---

## ✅ Build Configuration (Already Set Up)

Both branches have the required files:

**netlify.toml:**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**public/_redirects:**
```
/*    /index.html   200
```

---

## 🎨 Summary

### **Recommended Setup (Option A):**

| Site | Branch | URL Example | Purpose |
|------|--------|-------------|---------|
| **Site 1** | `main` | `moci-office-locator.netlify.app` | Office Locator App |
| **Site 2** | `old-moci-website` | `moci-full-website.netlify.app` | Full MOCI Website |

---

## 🔄 Updating Deployments

### **Auto-Deploy on Push**
Both sites will automatically redeploy when you push to their respective branches:

- Push to `main` → Office Locator redeploys
- Push to `old-moci-website` → Old Website redeploys

### **Manual Deploy**
In Netlify dashboard:
1. Go to "Deploys" tab
2. Click "Trigger deploy" → "Deploy site"

---

## 📞 Need Help?

If you encounter any issues:
1. Check Netlify deploy logs
2. Verify build command runs locally: `npm run build`
3. Check that `dist` folder is created after build

---

**All set! Both versions are ready to deploy! 🎉**

