# TeslaCamViewer Lite - Testing Guide

## Button Functionality Status

### ✅ Core Buttons (Should Work)

#### Header
- **GitHub Link** - Opens lite-version branch on GitHub
- **Help (?)** - Shows keyboard shortcuts modal
- **Settings (gear)** - Opens settings panel

#### Sidebar
- **Select TeslaCam Folder** - File picker to load Tesla footage
- **Add Drive (+)** - Add additional TeslaCam folders
- **Manage Drives (gear)** - Manage multiple folders
- **Sync Drives** - Sync data between drives

#### Playback Controls
- **Play/Pause** - Start/stop video playback
- **Previous Clip** - Jump to previous video clip
- **Next Clip** - Jump to next video clip
- **Speed Select** - Change playback speed (0.25x to 5x)
- **Loop** - Toggle loop mode

#### Timeline Controls
- **Zoom In (+)** - Zoom into timeline
- **Zoom Out (-)** - Zoom out of timeline
- **Reset Zoom** - Reset timeline zoom level

#### Bookmark Controls
- **Add Bookmark (B)** - Add bookmark at current position
- **Previous Bookmark ([)** - Jump to previous bookmark
- **Next Bookmark (])** - Jump to next bookmark
- **Manage Bookmarks** - Show bookmarks list dropdown
- **Clear All** - Remove all bookmarks for current event

#### Export Controls
- **Mark In (I)** - Set export start point
- **Mark Out (O)** - Set export end point
- **Clear Marks** - Clear in/out markers
- **Export** - Export video with dropdown for options
  - Screenshot capture
  - Video export (WebM/MP4/GIF)
  - Privacy mode toggle

#### View Controls
- **Video Enhancement** - Toggle video enhancement filters
- **Layout Select** - Choose camera layout
- **Focus Camera** - Select camera for focus mode
- **Toggle HUD (T)** - Toggle telemetry overlay

#### Event Info
- **Notes Button (N)** - Open notes & tags modal

#### Mobile/Bottom Sheet
- **Frame Back** - Previous frame
- **Frame Forward** - Next frame
- **Previous Event** - Previous event in list
- **Next Event** - Next event in list
- **Mobile Fullscreen** - Enter fullscreen on mobile

### ❌ Removed Features (Will Show Alert)

These features were intentionally removed and will show a friendly message:
- **Statistics Button** - Removed from header
- **Session Button** - Removed from header
- **Map Tab** - Removed from sidebar
- **Mini-Map Toggle** - Not available
- **Street View** - Not available
- **Elevation Overlay** - Not available
- **Collision Reconstruction** - Not available
- **Insurance Report** - Not available in export menu
- **License Plate Blur** - Not available in export menu
- **Plate Enhancement** - Not available
- **Speed Limit Display** - Not shown
- **Weather Display** - Not shown

## Keyboard Shortcuts

All keyboard shortcuts should work:

| Key | Function | Status |
|-----|----------|--------|
| `Space` | Play/Pause | ✅ |
| `←/→` | Seek 5 seconds | ✅ |
| `Shift+←/→` | Previous/Next clip | ✅ |
| `↑/↓` | Previous/Next event | ✅ |
| `L` | Cycle layouts | ✅ |
| `T` | Toggle telemetry | ✅ |
| `F` | Fullscreen | ✅ |
| `S` | Screenshot | ✅ |
| `E` | Export video | ✅ |
| `I`/`O` | Mark in/out | ✅ |
| `B` | Add bookmark | ✅ |
| `[`/`]` | Previous/Next bookmark | ✅ |
| `N` | Open notes | ✅ |
| `?` | Help | ✅ |
| `,`/`.` | Frame step | ✅ |
| `1-4` | Focus camera | ✅ |
| `+`/`-` | Speed adjust | ✅ |
| `0` | Reset speed | ✅ |
| `M` | Mini-map (stubbed) | ⚠️ |
| `D` | Detect plates (stubbed) | ⚠️ |

## How Removed Features Are Handled

### Compatibility Layer
The `lite-compatibility.js` script provides:

1. **Stub Classes** - Empty implementations of removed classes
2. **Method Patches** - Runtime patches to app methods
3. **Null Safety** - Prevents errors when UI elements don't exist
4. **User Alerts** - Friendly messages when trying to use removed features

### What Happens When You Click Removed Features:

- **Statistics/Session/Insurance Report**: Alert explaining feature not available
- **Plate Enhancement**: Alert directing to main version
- **Missing Buttons**: Safely ignored (no error)

## Testing Checklist

### Basic Functionality
- [ ] Select TeslaCam folder loads events
- [ ] Clicking event starts playback
- [ ] Play/pause works
- [ ] Timeline scrubbing works
- [ ] Speed control works
- [ ] Layout switching works

### Telemetry
- [ ] Telemetry overlay appears (if video has data)
- [ ] Telemetry graphs show in sidebar
- [ ] HUD toggle button works

### Export
- [ ] Screenshot capture works
- [ ] Video export works (WebM/MP4/GIF)
- [ ] In/Out marking works
- [ ] Privacy mode strips metadata

### Bookmarks & Notes
- [ ] Add/remove bookmarks works
- [ ] Navigate between bookmarks works  
- [ ] Notes modal opens
- [ ] Tags work

### Settings
- [ ] Settings modal opens
- [ ] Theme changes work
- [ ] Language changes work
- [ ] Preferences save

## Known Limitations (By Design)

1. No map view of events
2. No GPS mini-map overlay
3. No weather information
4. No speed limit data
5. No street view integration
6. No license plate detection/blur
7. No insurance PDF reports
8. No statistics/analytics
9. No collision reconstruction
10. No elevation profiles

These are intentional removals to keep the lite version focused on core video viewing.

## Troubleshooting

### If buttons still don't work:

1. **Check Browser Console** for JavaScript errors
2. **Verify Files** - Make sure lite-compatibility.js loads before app.js
3. **Clear Cache** - Hard refresh (Ctrl+Shift+R) to reload JavaScript
4. **Check Network Tab** - Ensure all JS files load successfully

### Expected Console Messages:

```
[Lite] Compatibility layer loaded - all removed features stubbed
[Lite] MapView stubbed - maps removed in lite version
[Lite] MiniMapOverlay stubbed - mini-map removed in lite version
... (other stub messages)
[Lite] Compatibility layer active - patching app methods
```

These messages confirm the compatibility layer is working.
