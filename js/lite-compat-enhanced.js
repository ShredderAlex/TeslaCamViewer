/**
 * ENHANCED Lite Version Compatibility Layer
 * URGENT FIX: Loaded FIRST to prevent instantiation errors
 * 
 * This file MUST load before app.js to stub out all removed classes
 * and prevent JavaScript errors that break button functionality.
 */

console.log('[Lite-Enhanced] Loading compatibility layer...');

// ==============================================
// STUB REMOVED CLASSES - Must exist before app.js loads
// ==============================================

// Stub MapView class (map display removed)
if (typeof MapView === 'undefined') {
    window.MapView = class MapView {
        constructor() {
            console.log('[Lite] MapView stubbed');
        }
        loadEvents() {}
        invalidateSize() {}
        addIncidentsFromTelemetry() {}
        addApDisengagementsFromTelemetry() {}
        centerOnEvent() {}
        updateMarkers() {}
        clearMarkers() {}
    };
}

// Stub MiniMapOverlay class (mini-map removed)
if (typeof MiniMapOverlay === 'undefined') {
    window.MiniMapOverlay = class MiniMapOverlay {
        constructor() {
            console.log('[Lite] MiniMapOverlay stubbed');
            this.isVisible = false;
        }
        initLayoutCallback() {}
        toggle() {}
        show() {}
        hide() {}
        clearAll() {}
        updatePosition() {}
        setWeather() {}
        setDarkMode() {}
        onVisibilityChange = null;
    };
}

// Stub ElevationOverlay class (elevation display removed)
if (typeof ElevationOverlay === 'undefined') {
    window.ElevationOverlay = class ElevationOverlay {
        constructor() {
            console.log('[Lite] ElevationOverlay stubbed');
        }
        clear() {}
        setProfile() {}
        getEventTime = () => 0;
        onSeek = null;
    };
}

// Stub StreetViewOverlay class (street view removed)
if (typeof StreetViewOverlay === 'undefined') {
    window.StreetViewOverlay = class StreetViewOverlay {
        constructor() {
            console.log('[Lite] StreetViewOverlay stubbed');
            this.isVisible = false;
        }
        toggle() {}
        show() {}
        hide() {}
        clear() {}
        updatePosition() {}
        onVisibilityChange = null;
    };
}

// Stub CollisionReconstruction class (collision analysis removed)
if (typeof CollisionReconstruction === 'undefined') {
    window.CollisionReconstruction = class CollisionReconstruction {
        constructor() {
            console.log('[Lite] CollisionReconstruction stubbed');
            this.isVisible = false;
        }
        setTelemetryOverlay() {}
        toggle() {}
        show() {}
        hide() {}
        reset() {}
    };
}

// Stub PlateBlur class (AI plate blur removed)
if (typeof PlateBlur === 'undefined') {
    window.PlateBlur = class PlateBlur {
        constructor() {
            console.log('[Lite] PlateBlur stubbed');
        }
        isReady() { return false; }
        loadModel() {
            return Promise.resolve(false);
        }
        blurPlatesInVideo() {
            return Promise.resolve();
        }
    };
}

// Stub InsuranceReport class (PDF reports removed)
if (typeof InsuranceReport === 'undefined') {
    window.InsuranceReport = class InsuranceReport {
        constructor() {
            console.log('[Lite] InsuranceReport stubbed');
        }
        setProgressCallback() {}
        generateReport() {
            alert('Insurance reports are not available in the lite version.\n\nUse the full version for PDF report generation.');
            return Promise.resolve();
        }
    };
}

// Stub StatisticsManager class (statistics removed)
if (typeof StatisticsManager === 'undefined') {
    window.StatisticsManager = class StatisticsManager {
        constructor() {
            console.log('[Lite] StatisticsManager stubbed');
        }
        setEvents() {}
        showModal() {
            alert('Statistics are not available in the lite version.\n\nUse the full version for detailed analytics.');
        }
        recordEventView() {}
    };
}

// Stub SessionManager class (session tracking removed)
if (typeof SessionManager === 'undefined') {
    window.SessionManager = class SessionManager {
        constructor() {
            console.log('[Lite] SessionManager stubbed');
        }
        checkAccess() { return Promise.resolve({ allowed: true }); }
        recordEventView() { return Promise.resolve(); }
        showSessionModal() {
            alert('Session management is not available in the lite version.');
        }
        _updateHeaderButton() {}
        showExpiryWarningIfNeeded() {}
        checkDriveRecovery() { return Promise.resolve(); }
    };
}

// ==============================================
// STUB EXTERNAL SERVICES
// ==============================================

if (typeof window.weatherService === 'undefined') {
    window.weatherService = {
        getWeather: () => Promise.resolve(null),
        formatForDisplay: () => ''
    };
}

if (typeof window.speedLimitService === 'undefined') {
    window.speedLimitService = {
        getSpeedLimit: () => Promise.resolve(null),
        getSpeedLimitCached() { return null; },
        queueForBackgroundLoading() {},
        stopBackgroundLoading() {}
    };
}

if (typeof window.elevationService === 'undefined') {
    window.elevationService = {
        getElevationProfile: () => Promise.resolve(null)
    };
}

if (typeof window.plateEnhancer === 'undefined') {
    window.plateEnhancer = {
        init() {},
        startEnhanceRegionMode() {
            alert('Plate enhancement is not available in the lite version.\n\nUse the full version for AI-powered features.');
        },
        autoDetectPlates() {},
        isProcessing: false,
        isSelecting: false,
        selections: new Map(),
        clearAllSelections() {},
        showToast() {}
    };
}

// ==============================================
// PATCH APP METHODS AFTER DOM LOADED
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Lite-Enhanced] Patching app methods...');
    
    // Wait for app instance to be created
    const patchApp = () => {
        if (!window.app) {
            setTimeout(patchApp, 50);
            return;
        }
        
        console.log('[Lite-Enhanced] App instance found, applying patches...');
        
        // ============================================
        // PATCH 1: Update overlay button states (prevent null errors)
        // ============================================
        const original_updateOverlayButtonStates = window.app._updateOverlayButtonStates;
        if (original_updateOverlayButtonStates) {
            window.app._updateOverlayButtonStates = function() {
                try {
                    // Only update HUD button (only overlay button in lite version)
                    if (this.toggleHudBtn) {
                        const isActive = this.telemetryOverlay?.isVisible || false;
                        this.toggleHudBtn.classList.toggle('active', isActive);
                    }
                    // Skip: toggleMiniMapBtn, toggleGraphsBtn, toggleStreetViewBtn, 
                    // toggleSlowMoBtn, toggleBirdsEyeBtn - don't exist in lite version
                } catch (e) {
                    console.warn('[Lite] Error updating overlay states:', e);
                }
            };
            console.log('[Lite-Enhanced] Patched _updateOverlayButtonStates');
        }
        
        // ============================================
        // PATCH 2: Mobile more menu status (prevent null errors)
        // ============================================
        const original_updateMobileMoreMenuStatus = window.app._updateMobileMoreMenuStatus;
        if (original_updateMobileMoreMenuStatus) {
            window.app._updateMobileMoreMenuStatus = function() {
                try {
                    // Update HUD status if element exists
                    if (this.mobileHudStatus) {
                        const isHudOn = this.telemetryOverlay?.isVisible || false;
                        this.mobileHudStatus.textContent = isHudOn ? 'ON' : 'OFF';
                        const option = this.mobileHudStatus.closest('.mobile-more-option');
                        if (option) {
                            option.classList.toggle('active', isHudOn);
                        }
                    }
                    // Skip mobileMiniMapStatus - doesn't exist in lite
                    
                    // Sync layout select if exists
                    if (this.mobileLayoutSelect && this.layoutSelect) {
                        this.mobileLayoutSelect.value = this.layoutSelect.value;
                    }
                } catch (e) {
                    console.warn('[Lite] Error updating mobile menu:', e);
                }
            };
            console.log('[Lite-Enhanced] Patched _updateMobileMoreMenuStatus');
        }
        
        // ============================================
        // PATCH 3: Mobile more actions (alert for removed features)
        // ============================================
        const original_handleMobileMoreAction = window.app._handleMobileMoreAction;
        if (original_handleMobileMoreAction) {
            window.app._handleMobileMoreAction = function(action) {
                console.log('[Lite] Mobile action:', action);
                
                try {
                    switch (action) {
                        case 'toggle-hud':
                            if (this.toggleHudBtn) {
                                this.toggleHudBtn.click();
                            }
                            break;
                        case 'toggle-minimap':
                            alert('Mini-map is not available in the lite version.');
                            break;
                        case 'enhance':
                            if (this.enhanceBtn) {
                                this.enhanceBtn.click();
                                this.mobileMoreMenu?.classList.add('hidden');
                            }
                            break;
                        case 'screenshot':
                            if (this.screenshotBtn) {
                                this.screenshotBtn.click();
                                this.mobileMoreMenu?.classList.add('hidden');
                            }
                            break;
                        case 'export-video':
                            if (this.exportBtn) {
                                this.exportBtn.click();
                                this.mobileMoreMenu?.classList.add('hidden');
                            }
                            break;
                        case 'insurance-report':
                            alert('Insurance reports are not available in the lite version.');
                            this.mobileMoreMenu?.classList.add('hidden');
                            break;
                        default:
                            console.warn('[Lite] Unknown action:', action);
                    }
                    
                    // Update status after action
                    setTimeout(() => {
                        if (this._updateMobileMoreMenuStatus) {
                            this._updateMobileMoreMenuStatus();
                        }
                    }, 100);
                } catch (e) {
                    console.warn('[Lite] Error handling mobile action:', e);
                }
            };
            console.log('[Lite-Enhanced] Patched _handleMobileMoreAction');
        }
        
        // ============================================
        // PATCH 4: Enable controls (only enable existing buttons)
        // ============================================
        const original_enableControls = window.app.enableControls;
        if (original_enableControls) {
            window.app.enableControls = function() {
                try {
                    // Core playback controls
                    if (this.playPauseBtn) this.playPauseBtn.disabled = false;
                    if (this.frameBackBtn) this.frameBackBtn.disabled = false;
                    if (this.frameForwardBtn) this.frameForwardBtn.disabled = false;
                    if (this.prevClipBtn) this.prevClipBtn.disabled = false;
                    if (this.nextClipBtn) this.nextClipBtn.disabled = false;
                    if (this.screenshotBtn) this.screenshotBtn.disabled = false;
                    if (this.pipBtn) this.pipBtn.disabled = !document.pictureInPictureEnabled;
                    if (this.enhanceBtn) this.enhanceBtn.disabled = false;
                    // Skip enhanceRegionBtn - doesn't exist in lite
                    
                    // Notes and marking
                    if (this.notesBtn) {
                        this.notesBtn.disabled = false;
                        this.updateNotesButtonState?.();
                    }
                    if (this.markInBtn) this.markInBtn.disabled = false;
                    if (this.markOutBtn) this.markOutBtn.disabled = false;
                    if (this.clearMarksBtn) this.clearMarksBtn.disabled = false;
                    
                    // Export controls
                    if (this.exportBtn) this.exportBtn.disabled = false;
                    if (this.exportDropdownBtn) this.exportDropdownBtn.disabled = false;
                    
                    // Bookmarks
                    if (this.prevBookmarkBtn) this.prevBookmarkBtn.disabled = false;
                    if (this.addBookmarkBtn) this.addBookmarkBtn.disabled = false;
                    if (this.nextBookmarkBtn) this.nextBookmarkBtn.disabled = false;
                    if (this.bookmarksListBtn) this.bookmarksListBtn.disabled = false;
                    
                    // Timeline zoom
                    if (this.zoomOutBtn) this.zoomOutBtn.disabled = false;
                    if (this.zoomInBtn) this.zoomInBtn.disabled = false;
                    if (this.zoomResetBtn) this.zoomResetBtn.disabled = false;
                    
                    // Speed and loop
                    if (this.speedSelect) this.speedSelect.disabled = false;
                    if (this.loopCheckbox) this.loopCheckbox.disabled = false;
                    if (this.loopBtn) this.loopBtn.disabled = false;
                    
                    // Enable HUD toggle button (only overlay button in lite)
                    if (this.toggleHudBtn) this.toggleHudBtn.disabled = false;
                    // Skip: toggleMiniMapBtn, toggleGraphsBtn, toggleStreetViewBtn, 
                    // toggleSlowMoBtn, toggleBirdsEyeBtn - don't exist
                    
                    // Event navigation
                    if (this.prevEventBtn) {
                        this.prevEventBtn.disabled = this.currentEventIndex <= 0;
                    }
                    if (this.nextEventBtn) {
                        this.nextEventBtn.disabled = this.currentEventIndex >= this.allEvents.length - 1;
                    }
                    
                    // Mobile fullscreen
                    if (this.mobileFullscreenBtn) {
                        this.mobileFullscreenBtn.classList.remove('hidden');
                    }
                    
                    // Update overlay button states
                    if (this._updateOverlayButtonStates) {
                        this._updateOverlayButtonStates();
                    }
                    
                    console.log('[Lite] Controls enabled');
                } catch (e) {
                    console.error('[Lite] Error enabling controls:', e);
                }
            };
            console.log('[Lite-Enhanced] Patched enableControls');
        }
        
        // ============================================
        // PATCH 5: Apply filters (skip mapView.loadEvents)
        // ============================================
        const original_applyFilters = window.app.applyFilters;
        if (original_applyFilters) {
            window.app.applyFilters = function() {
                const filteredEvents = this.eventFilter.apply(this.allEvents);
                this.eventBrowser.renderEvents(filteredEvents);
                // Skip: this.mapView.loadEvents(filteredEvents) - mapView doesn't exist
                console.log(`[Lite] Filtered to ${filteredEvents.length} events`);
            };
            console.log('[Lite-Enhanced] Patched applyFilters');
        }
        
        console.log('[Lite-Enhanced] ✅ All patches applied successfully');
    };
    
    // Start patching after a short delay to ensure app is initialized
    setTimeout(patchApp, 100);
});

console.log('[Lite-Enhanced] ✅ Compatibility layer ready');
