# TeslaCam Viewer - Lite Version

A streamlined browser-based Tesla dashcam viewer focused on core video playback functionality. This lite version removes advanced features to provide a simpler, faster, and more focused viewing experience.

**🎯 This is the LITE VERSION** - for the full-featured version with AI/ML capabilities, maps, and analysis tools, see the [main branch](https://github.com/ShredderAlex/TeslaCamViewer).

## What Makes This "Lite"?

The lite version focuses exclusively on **viewing and exporting Tesla dashcam footage** without the complexity of advanced analysis features:

### ✅ What's Included (Core Features)

#### Video Playback
- **Synchronized Multi-Camera Playback** - View front, back, left, right (and pillar cameras on newer vehicles) simultaneously
- **Multiple Layout Presets** - Grid, Picture-in-Picture, Focus views, and more
- **Custom Layout Editor** - Design your own camera arrangements with drag-and-drop
- **Playback Speed Control** - 0.25x to 5x speed with frame-by-frame stepping
- **Fullscreen Mode** - Double-click any camera for fullscreen view

#### Event Management
- **Multi-Drive Support** - Add multiple TeslaCam folders and switch between them
- **Event Filtering** - Filter by type (Saved/Sentry/Recent), date range, or search
- **Bookmarks and Notes** - Add notes and tags to events, backed up to event folders

#### Telemetry and Visualization
- **Live Telemetry Overlay** - Speed, G-force, turn signals, brake/throttle from embedded video data
- **Telemetry Graphs** - Interactive speed, G-force, and steering graphs in sidebar
- **Incident Detection** - Automatic near-miss scoring with timeline markers

#### Export and Capture
- **Screenshot Capture** - Save current frame from all cameras
- **Video Export** - Export clips as WebM, MP4, or GIF with overlays
- **Clip Marking** - Set IN/OUT points for precise export ranges
- **Privacy Mode** - Export with GPS and timestamp data stripped

#### Customization
- **Theme System** - Dark, Light, Midnight, and Tesla Red themes
- **Multi-Language Support** - Interface available in multiple languages
- **Offline Package** - Download for fully offline use
- **Automatic Updates** - Notifications when new versions are available

### ❌ What's Removed (Advanced Features)

To keep the lite version streamlined, the following features have been removed:

#### AI/ML Features
- License plate detection and blurring
- License plate recognition (OCR)
- Super-resolution image enhancement
- Object tracking and region tracking
- Multi-frame stacking

#### Analysis Tools
- Insurance report PDF generation
- Statistics dashboard and analytics
- Collision reconstruction and analysis

#### Maps and External Services
- Interactive event location maps
- GPS mini-map overlay on video
- Google Street View integration
- Elevation profile visualization
- Weather condition lookup
- Speed limit data from OpenStreetMap

**Rationale**: These features add significant complexity, require large AI model downloads (15-30 MB), and depend on external API calls. The lite version is perfect if you just want to view your Tesla footage without these extras.

## Browser Requirements

**Chrome, Edge, or Chromium-based browser required** - This app uses the File System Access API which is only supported in Chromium browsers.

Firefox and Safari are not supported.

## Getting Started

### Option 1: Run Locally

1. Clone or download this repository (lite-version branch)
2. Open `index.html` in Chrome or Edge, or run a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000
```

3. Open http://localhost:8000 in your browser

### Option 2: Offline Package

Use the "Download Offline Version" option in settings to create a portable copy that works without internet.

## Quick Start

1. Click "Select TeslaCam Folder" and choose your TeslaCam directory
2. Browse events in the sidebar - they load with thumbnails and metadata
3. Click an event to start playback
4. Use the timeline to scrub through footage
5. Press `L` to cycle through layout presets
6. Press `T` for telemetry overlay
7. Press `S` to take a screenshot, `E` to export video

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Play/Pause |
| `Left/Right Arrow` | Seek 5 seconds |
| `Shift + Left/Right` | Previous/Next clip |
| `Up/Down Arrow` | Previous/Next event |
| `L` | Cycle layouts |
| `T` | Toggle telemetry overlay |
| `F` | Toggle fullscreen |
| `S` | Take screenshot |
| `E` | Export video |
| `I` / `O` | Mark in/out points |
| `B` | Add bookmark |
| `[` / `]` | Previous/Next bookmark |
| `N` | Open notes |
| `?` | Show all shortcuts |

## Tesla Dashcam Folder Structure

The app reads the standard Tesla TeslaCam folder structure:

```
TeslaCam/
├── SavedClips/
│   └── YYYY-MM-DD_HH-MM-SS/
│       ├── event.json
│       ├── thumb.png
│       └── *.mp4 (4-6 cameras x multiple clips)
├── SentryClips/
│   └── YYYY-MM-DD_HH-MM-SS/
│       ├── event.json
│       ├── thumb.png
│       └── *.mp4
└── RecentClips/
    └── *.mp4 (rolling buffer)
```

## Privacy and Security

- **No data uploads** - All video processing happens in your browser
- **No server backend** - The entire app runs client-side
- **No tracking** - No analytics or telemetry collection
- **No external API calls** - Lite version is completely offline (unlike full version)
- **Local storage only** - Settings and bookmarks stored in your browser

## Telemetry Data

TeslaCamViewer Lite extracts telemetry data embedded in your Tesla's video files (firmware 2023.44.25+):
- Vehicle speed
- G-forces (acceleration/deceleration)
- Turn signals
- Brake and throttle position
- GPS coordinates and heading
- Steering angle

All processing happens locally in your browser using WebAssembly - no cloud services required.

## Lite vs Full Version

| Feature | Lite | Full |
|---------|------|------|
| Multi-camera playback | ✅ | ✅ |
| Telemetry overlay | ✅ | ✅ |
| Timeline navigation | ✅ | ✅ |
| Layout options | ✅ | ✅ |
| Video/screenshot export | ✅ | ✅ |
| Notes & bookmarks | ✅ | ✅ |
| Event filtering | ✅ | ✅ |
| Multi-drive support | ✅ | ✅ |
| Interactive maps | ❌ | ✅ |
| License plate detection/blur | ❌ | ✅ |
| Insurance report PDF | ❌ | ✅ |
| Statistics dashboard | ❌ | ✅ |
| Collision reconstruction | ❌ | ✅ |
| Weather/speed limit data | ❌ | ✅ |
| Street View integration | ❌ | ✅ |
| Total size (approx) | ~2 MB | ~35 MB |
| External dependencies | None | Multiple APIs |

## Troubleshooting

**"Browser not supported"**: Use Chrome or Edge browser.

**No events showing**: Ensure you selected the TeslaCam folder or its parent directory.

**Videos won't play**: Check that .mp4 files aren't corrupted. Try another event.

**Telemetry not showing**: Not all Tesla firmware versions embed telemetry data. Older recordings may not have this data.

**Buffering issues**: Use tabs in the same window rather than separate browser windows. Consider moving footage to a faster drive (SSD).

## Contributing

Contributions welcome! Feel free to open issues or pull requests on GitHub.

## Community

Have questions, ideas, or want to share how you use TeslaCam Viewer?

**[Join the Discussion](https://github.com/ShredderAlex/TeslaCamViewer/discussions)**

## Switching Between Versions

- **Lite Version** (this branch): `git checkout lite-version`
- **Full Version** (main branch): `git checkout main`

## License

MIT License - see LICENSE file for details.

## Version

Lite Version based on: 2026.5.1.1

This streamlined version focuses on core video viewing functionality without advanced analysis features.
