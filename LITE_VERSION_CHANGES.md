# TeslaCamViewer Lite Version - Changes

This branch contains a streamlined "lite" version of TeslaCamViewer focused on core video playback functionality.

## What Was Removed

### AI/ML Features
The following AI/ML modules have been removed to simplify the codebase:
- `paddleOCR.js` - License plate OCR using PaddleOCR
- `plateBlur.js` - Automatic license plate blurring
- `plateDetector.js` - License plate detection using YOLO models  
- `plateEnhancer.js` - Super-resolution plate enhancement
- `platePostProcessor.js` - Post-processing for plate recognition
- `plateRecognizer.js` - License plate text recognition
- `siameseTracker.js` - Object tracking for plate tracking
- `regionTracker.js` - Region-based tracking
- `frameStacker.js` - Multi-frame stacking for enhancement

**Rationale**: AI/ML features add significant complexity and large model downloads. Most users don't need license plate recognition/blurring functionality.

### Analysis Tools
- `insuranceReport.js` - Insurance report PDF generation
- `statisticsManager.js` - Statistics dashboard and analytics
- `collisionReconstruction.js` - Collision analysis and reconstruction

**Rationale**: These are advanced analysis features that most users won't use for casual viewing of dashcam footage.

### Maps and External Services
- `mapView.js` - Interactive Leaflet map for event locations
- `miniMapOverlay.js` - GPS mini-map overlay on video
- `streetViewOverlay.js` - Google Street View integration
- `elevationOverlay.js` - Elevation profile visualization
- `elevationService.js` - External elevation data API
- `weatherService.js` - Weather condition lookup API
- `speedLimitService.js` - Speed limit data from OpenStreetMap

**Rationale**: These features require external API calls and add network dependencies. The lite version focuses on offline, local-only functionality.

### CSS Removed
- `styles/plate-enhancer.css` - Plate enhancer UI styling

## What Was Kept

### Core Functionality ✅
- **Video Playback**: Multi-camera synchronized playback (videoPlayer.js, syncController.js)
- **Telemetry Display**: Speed, g-force, turn signals from embedded data (telemetryOverlay.js, telemetryGraphs.js)
- **Timeline Navigation**: Scrubbing, clip navigation (timeline.js)
- **Layout Options**: Multiple camera layouts (layoutManager.js, layoutRenderer.js, layoutConfig.js, layoutEditor.js)
- **Basic Settings**: Theme, language, preferences (settingsManager.js)
- **Export Functionality**: Video export with overlays, screenshots (videoExport.js, screenshotCapture.js)
- **Event Browser**: Browse and filter events (eventBrowser.js, eventFilter.js, filterPanel.js)
- **Folder Management**: Parse Tesla folder structure (folderParser.js, folderManager.js)
- **Notes & Bookmarks**: Add notes and bookmarks (notesManager.js)
- **Internationalization**: Multi-language support (i18n.js)

## Next Steps

To complete the lite version:
1. Update `index.html` to remove Leaflet CSS links and deleted JS file references
2. Update `app.js` to remove instantiation of deleted modules
3. Clean up any UI elements that reference removed features
4. Test core functionality to ensure nothing is broken
5. Update README.md to reflect lite version features

## Benefits of Lite Version

- **Smaller codebase**: Easier to understand and maintain
- **Faster loading**: No large ML model downloads
- **Simpler dependencies**: Fewer external libraries
- **Privacy focused**: No external API calls for maps/weather/etc
- **Core focus**: Streamlined experience for viewing Tesla dashcam footage
