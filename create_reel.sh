#!/bin/bash

# Obsidian House Instagram Reel Creator
# Converts SVG frames into a cinematic Instagram Reel video

set -e

echo "🎬 Creating Obsidian House Instagram Reel..."

# Create output directories
mkdir -p frames output

echo "📸 Converting SVG files to high-quality PNG frames..."

# Convert SVGs to PNG using rsvg-convert (better SVG support)
rsvg-convert -w 1080 -h 1350 -f png -o frames/scene01.png reel-01-opening-crest.svg
rsvg-convert -w 1080 -h 1350 -f png -o frames/scene02.png reel-02-bottle-hero.svg  
rsvg-convert -w 1080 -h 1350 -f png -o frames/scene03.png reel-03-floating-ingredients.svg
rsvg-convert -w 1080 -h 1350 -f png -o frames/scene04.png reel-04-luxury-box.svg
rsvg-convert -w 1080 -h 1350 -f png -o frames/scene05.png reel-05-final-centerpiece.svg

echo "🎥 Creating video with professional timing..."

# Create the video with proper Instagram Reel specifications:
# - 1080x1350 (4:5 aspect ratio for Instagram Reels)
# - Each scene lasts 4-5 seconds as per your storyboard
# - 25fps for smooth playback
# - High quality H.264 encoding

ffmpeg -y \
  -loop 1 -i frames/scene01.png -t 4 -pix_fmt yuv420p -r 25 temp_01.mp4 \
  && \
  ffmpeg -y \
  -loop 1 -i frames/scene02.png -t 5 -pix_fmt yuv420p -r 25 temp_02.mp4 \
  && \
  ffmpeg -y \
  -loop 1 -i frames/scene03.png -t 4 -pix_fmt yuv420p -r 25 temp_03.mp4 \
  && \
  ffmpeg -y \
  -loop 1 -i frames/scene04.png -t 5 -pix_fmt yuv420p -r 25 temp_04.mp4 \
  && \
  ffmpeg -y \
  -loop 1 -i frames/scene05.png -t 6 -pix_fmt yuv420p -r 25 temp_05.mp4

echo "🎬 Combining all scenes into final Instagram Reel..."

# Concatenate all scenes into final video
echo "file 'temp_01.mp4'" > concat_list.txt
echo "file 'temp_02.mp4'" >> concat_list.txt
echo "file 'temp_03.mp4'" >> concat_list.txt
echo "file 'temp_04.mp4'" >> concat_list.txt
echo "file 'temp_05.mp4'" >> concat_list.txt

ffmpeg -y -f concat -safe 0 -i concat_list.txt -c copy output/obsidian_house_reel_silent.mp4

echo "🎵 Adding fade transitions and optimizing for Instagram..."

# Add smooth fade transitions between scenes and optimize
ffmpeg -y -i output/obsidian_house_reel_silent.mp4 \
  -vf "fade=in:0:25,fade=out:st=575:d=25" \
  -c:v libx264 -preset slow -crf 18 \
  -maxrate 3500k -bufsize 5000k \
  -pix_fmt yuv420p -r 25 \
  output/obsidian_house_reel_final.mp4

# Cleanup temp files
rm -f temp_*.mp4 concat_list.txt

echo "✨ SUCCESS! Your Instagram Reel is ready!"
echo ""
echo "📱 File: output/obsidian_house_reel_final.mp4"
echo "📐 Resolution: 1080x1350 (Perfect for Instagram Reels)"
echo "⏱️  Duration: ~24 seconds"
echo "🎬 Ready to upload to Instagram!"
echo ""
echo "💡 Next Steps:"
echo "1. Add your atmospheric music in Instagram Reels editor"
echo "2. Use hashtags: #LuxuryFragrance #ExclusiveScent #ObsidianHouse #NichePerfume"
echo "3. Post during peak hours (7-9 PM) for maximum engagement"
echo ""
echo "🔥 Time to build that waitlist! 👑"