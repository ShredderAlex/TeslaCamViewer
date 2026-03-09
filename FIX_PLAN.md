# App.js Fix Plan for Lite Version

## Problem Identified

The app.js file still contains references to all deleted modules, causing JavaScript errors when those classes don't exist. This breaks button functionality and prevents the app from initializing.

## Modules to Remove from app.js

### Constructor - Remove These Instantiations:

```javascript
// REMOVE:
this.mapView = new MapView(...)
this.miniMapOverlay = new MiniMapOverlay(...)
this.elevationOverlay = new ElevationOverlay(...)
this.collisionReconstruction = new CollisionReconstruction(...)
this.streetViewOverlay = new StreetViewOverlay(...)
this.plateBlur = new PlateBlur()
this.insuranceReport = new InsuranceReport(...)
this.statisticsManager = new StatisticsManager()
this.sessionManager = new SessionManager()

// REMOVE these button elements (don't exist in lite HTML):
this.statsBtn = document.getElementById('statsBtn')
this.sessionBtn = document.getElementById('sessionBtn')
this.toggleMiniMapBtn = document.getElementById('toggleMiniMapBtn')
this.toggleStreetViewBtn = document.getElementById('toggleStreetViewBtn')
this.toggleBirdsEyeBtn = document.getElementById('toggleBirdsEyeBtn')
this.eventWeatherElement = document.getElementById('eventWeather')
this.streetViewBtn = document.getElementById('streetViewBtn')
this.speedLimitDisplay = document.getElementById('speedLimitDisplay')
this.enhanceRegionBtn = document.getElementById('enhanceRegionBtn')
```

### Methods to Remove/Stub:

1. **applyFilters()** - Remove mapView.loadEvents() call
2. **tryRestoreLastFolder()** - Remove statisticsManager.setEvents() call
3. **applyUserSettings()** - Remove miniMapOverlay settings
4. **setupEventListeners()** - Remove event handlers for deleted buttons
5. **generateInsuranceReport()** - Stub out or remove
6. **updateEventInfo()** - Remove weather/street view/speed limit updates
7. **updateEventWeather()** - Remove or stub
8. **_updateSpeedLimitDisplay()** - Remove or stub
9. **extractSeiDataForEvent()** - Remove miniMap, elevation, streetView, collision references
10. **_updateOverlayButtonStates()** - Remove references to deleted buttons
11. **_handleMobileMoreAction()** - Remove insurance-report action
12. **exportVideo()** - Remove plateBlur references

## Fix Strategy

Create stubs for removed functionality:
- Empty/no-op methods for removed features
- Null checks before calling removed modules  
- Remove event listeners for buttons that don't exist
- Keep core functionality intact
