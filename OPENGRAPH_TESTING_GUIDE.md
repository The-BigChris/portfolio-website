# Open Graph Testing & Customization Guide

## 🎯 What We Just Updated

Your link previews will now show:
- **Title**: "Chiemelie Okafor - Technical Project Manager & Product Strategist"
- **Description**: "Experienced Technical Project Manager specializing in Agile methodologies, product strategy, and digital transformation. View my portfolio of successful projects and leadership experience."
- **Image**: Your professional headshot (og-image.webp)
- **Site Name**: "Chiemelie Okafor Portfolio"

## 🔍 How to Test Open Graph Functionality

### **1. Facebook/Instagram Test**
- Go to: https://developers.facebook.com/tools/debug/
- Enter your website URL: `https://chiemelieokafor.com`
- Click "Debug" to see preview
- **Note**: Facebook caches OG data, so you might need to click "Scrape Again" to see updates

### **2. Twitter/X Test**
- Visit: https://cards-dev.twitter.com/validator
- Enter your website URL
- See how it appears when shared on Twitter/X

### **3. LinkedIn Test**
- Go to: https://www.linkedin.com/post-inspector/
- Enter your website URL
- Preview LinkedIn sharing appearance

### **4. WhatsApp/Telegram Test**
- Send your website link to yourself
- See the real-time preview that appears

### **5. Slack/Discord Test**
- Share your link in a chat
- See the preview card that appears

## 📱 What Users Will See

When someone shares your portfolio link, they'll see:

```
┌─────────────────────────────────────────┐
│ [Your Professional Photo]               │
│                                         │
│ Chiemelie Okafor - Technical Project   │
│ Manager & Product Strategist            │
│                                         │
│ Experienced Technical Project Manager   │
│ specializing in Agile methodologies,    │
│ product strategy, and digital...        │
│                                         │
│ chiemelieokafor.com                    │
└─────────────────────────────────────────┘
```

## ⚡ Real-Time Testing Tips

1. **Clear Cache**: Social platforms cache OG data, so changes might take time to appear
2. **Use Debug Tools**: The debuggers above will show you exactly what's being read
3. **Test Multiple Platforms**: Different platforms display OG data differently
4. **Check Mobile**: Test on mobile devices as previews can differ

## 🎨 Customization Options

You can further customize by editing `app/layout.tsx`:

### **Change Title**
```typescript
title: "Your Custom Title Here"
```

### **Change Description**
```typescript
description: "Your custom description here"
```

### **Change Image**
```typescript
images: [
  {
    url: "/your-custom-image.webp",
    width: 1200,
    height: 630,
    alt: "Your custom alt text",
  },
]
```

### **Add More Metadata**
```typescript
keywords: ["your", "custom", "keywords"],
authors: [{ name: "Your Name" }],
```

## 🚀 Next Steps

1. **Wait for Vercel Deployment** (2-5 minutes)
2. **Test on Facebook Debugger** to see the new preview
3. **Share with friends** to see real-world results
4. **Monitor engagement** - better OG data = more clicks!

## 📊 Expected Results

With these improvements, your link shares should:
- ✅ Show professional title and description
- ✅ Display your photo prominently
- ✅ Increase click-through rates
- ✅ Look professional across all platforms
- ✅ Improve SEO rankings

---

**Note**: Social media platforms cache Open Graph data, so it may take a few hours for all platforms to show the updated preview. 