# 🎬 Obsidian House Instagram Reel Creation Guide

## 🚀 Method 1: One-Click Professional (Recommended)

**Just run the script:**
```bash
./create_reel.sh
```
This will create a professional 24-second Instagram Reel ready to upload!

---

## 🎨 Method 2: Manual Control (Advanced)

### Step 1: Convert SVGs to Images
```bash
# High-quality PNG conversion
magick reel-01-opening-crest.svg -density 300 -background transparent scene01.png
magick reel-02-bottle-hero.svg -density 300 -background transparent scene02.png
magick reel-03-floating-ingredients.svg -density 300 -background transparent scene03.png
magick reel-04-luxury-box.svg -density 300 -background transparent scene04.png
magick reel-05-final-centerpiece.svg -density 300 -background transparent scene05.png
```

### Step 2: Create Individual Scene Videos
```bash
# Scene 1: Opening Crest (4 seconds)
ffmpeg -loop 1 -i scene01.png -t 4 -pix_fmt yuv420p -r 25 scene01.mp4

# Scene 2: Bottle Hero (5 seconds) 
ffmpeg -loop 1 -i scene02.png -t 5 -pix_fmt yuv420p -r 25 scene02.mp4

# Scene 3: Ingredients (4 seconds)
ffmpeg -loop 1 -i scene03.png -t 4 -pix_fmt yuv420p -r 25 scene03.mp4

# Scene 4: Luxury Box (5 seconds)
ffmpeg -loop 1 -i scene04.png -t 5 -pix_fmt yuv420p -r 25 scene04.mp4

# Scene 5: Final Shot (6 seconds)
ffmpeg -loop 1 -i scene05.png -t 6 -pix_fmt yuv420p -r 25 scene05.mp4
```

### Step 3: Combine All Scenes
```bash
# Create concat file
echo "file 'scene01.mp4'" > scenes.txt
echo "file 'scene02.mp4'" >> scenes.txt  
echo "file 'scene03.mp4'" >> scenes.txt
echo "file 'scene04.mp4'" >> scenes.txt
echo "file 'scene05.mp4'" >> scenes.txt

# Combine into final video
ffmpeg -f concat -safe 0 -i scenes.txt -c copy obsidian_reel.mp4
```

---

## 📱 Method 3: Mobile-First (iPhone/iPad)

### Use Canva or Similar:
1. **Import PNG files** (converted from SVGs above)
2. **Set dimensions:** 1080x1350 (Instagram Reel format)
3. **Add timing:** 4-5 seconds per scene
4. **Add music:** Atmospheric/cinematic track
5. **Export:** High quality MP4

### Recommended Apps:
- **Canva** (templates + easy editing)
- **InShot** (mobile video editor)
- **Adobe Premiere Rush** (pro features)

---

## 🎵 Method 4: Add Music & Effects

### Background Music Options:
- **Epidemic Sound:** "Succession" style tracks
- **Instagram Music Library:** Search "luxury", "cinematic"
- **YouTube Audio Library:** Free atmospheric tracks

### Music Timing:
- **0-4s:** Build up with crest reveal
- **4-9s:** Intensity rises with bottle
- **9-14s:** Mysterious with ingredients  
- **14-20s:** Luxurious with box opening
- **20-24s:** Powerful finale with bottle

### Text Overlays in Instagram:
- Use Instagram's text tools for the script lines
- **Font:** Classic/Elegant serif fonts
- **Color:** Gold (#FFD700) to match visuals
- **Animation:** Fade in/out or typewriter effect

---

## ⚙️ Technical Specifications

### Instagram Reel Requirements:
- **Aspect Ratio:** 4:5 (1080x1350)
- **Duration:** 15-30 seconds (yours is 24s - perfect!)
- **Frame Rate:** 25-30 FPS
- **Quality:** High bitrate for luxury brand
- **Format:** MP4 (H.264 codec)

### File Sizes:
- **Target:** Under 100MB for best upload quality
- **Your video:** Should be ~15-25MB (perfect)

---

## 🎯 Instagram Strategy

### When to Post:
- **Best Times:** 7-9 PM your timezone
- **Days:** Tuesday-Thursday for business content
- **Frequency:** 1-2 high-quality posts per week

### Hashtags for Luxury Fragrance:
```
#LuxuryFragrance #ExclusiveScent #ObsidianHouse 
#NichePerfume #LuxuryLifestyle #ExclusiveDrop
#FragranceCollector #LuxuryBrand #HandcraftedLuxury
#ExclusiveAccess #LimitedEdition #LuxuryExperience
```

### Caption Strategy:
```
✨ "Inheritance smells better than purchase." ✨

MANUSCRIPT 001 — The first from our private archive.

For the 299 people who understand that true luxury 
whispers rather than shouts.

🏰 Family heritage since [year]
🌿 Rare ingredients: Birch, Jasmine, Ambergris  
⏰ 6-8 hours of unforgettable presence
🔐 Vault access: Link in bio

#ObsidianHouse #Archive001 #TheVaultAwaits
```

---

## 🚀 Ready to Launch?

1. **Run the script:** `./create_reel.sh`
2. **Add music** in Instagram Reels editor
3. **Copy the caption** above
4. **Post at peak time** (7-9 PM)
5. **Monitor engagement** and waitlist signups

**Your cinematic luxury fragrance moment awaits! 🔥👑**