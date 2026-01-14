# ⚡ Quick Netlify Setup Reference

## 🎯 Two Versions - Two Sites (Recommended)

---

### 📱 **SITE 1: Office Locator**

**Netlify Settings:**
```
Repository: fadishehadeh/moci-locator
Branch: main
Build command: npm run build
Publish directory: dist
```

**What it contains:**
- Standalone Office Locator
- 3-step process
- Building visualization
- Animated routes

---

### 🌐 **SITE 2: Old MOCI Website**

**Netlify Settings:**
```
Repository: fadishehadeh/moci-locator
Branch: old-moci-website
Build command: npm run build
Publish directory: dist
```

**What it contains:**
- Full MOCI website
- All pages and services
- Password protection
- Complete features

---

## 🚀 Quick Deploy Steps

### For Each Site:

1. **Netlify Dashboard** → "Add new site"
2. **Connect GitHub** → Select `fadishehadeh/moci-locator`
3. **Choose Branch:**
   - Site 1: `main`
   - Site 2: `old-moci-website`
4. **Build Settings:**
   - Command: `npm run build`
   - Directory: `dist`
5. **Deploy!**

---

## 📊 Result

After setup, you'll have:

| Version | Branch | Example URL |
|---------|--------|-------------|
| 🏢 Office Locator | `main` | `office-locator.netlify.app` |
| 🌐 Full Website | `old-moci-website` | `moci-website.netlify.app` |

---

## 🔄 Auto-Deploy

✅ Push to `main` → Office Locator updates
✅ Push to `old-moci-website` → Full website updates

---

**That's it! Simple and clean! 🎉**

