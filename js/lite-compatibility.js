/**
 * Lite Version Compatibility Layer
 * Stubs for removed features to prevent errors
 */

// Stub for removed MapView class
if (typeof MapView === 'undefined') {
    window.MapView = class MapView {
        constructor() {
            console.log('[Lite] MapView stubbed - maps removed in lite version');
        }
        loadEvents() {}
        invalidateSize() {}
        addIncidentsFromTelemetry() {}
        addApDisengagementsFromTelemetry() {}
    };
}

// Stub for removed MiniMapOverlay class
if (typeof MiniMapOverlay === 'undefined') {
    window.MiniMapOverlay = class MiniMapOverlay {
        constructor() {
            console.log('[Lite] MiniMapOverlay stubbed - mini-map removed in lite version');
            this.isVisible = false;
        }
        initLayoutCallback() {}
        toggle() {
            console.log('[Lite] Mini-map not available in lite version');
        }
        show() {}
        hide() {}
        clearAll() {}
        updatePosition() {}
        setWeather() {}
        setDarkMode() {}
    };
}

// Stub for removed ElevationOverlay class
if (typeof ElevationOverlay === 'undefined') {
    window.ElevationOverlay = class ElevationOverlay {
        constructor() {
            console.log('[Lite] ElevationOverlay stubbed - elevation removed in lite version');
        }
        clear() {}
        setProfile() {}
    };
}

// Stub for removed StreetViewOverlay class
if (typeof StreetViewOverlay === 'undefined') {
    window.StreetViewOverlay = class StreetViewOverlay {
        constructor() {
            console.log('[Lite] StreetViewOverlay stubbed - street view removed in lite version');
            this.isVisible = false;
        }
        toggle() {
            console.log('[Lite] Street View not available in lite version');
        }
        show() {}
        hide() {}
        clear() {}
        updatePosition() {}
    };
}

// Stub for removed CollisionReconstruction class
if (typeof CollisionReconstruction === 'undefined') {
    window.CollisionReconstruction = class CollisionReconstruction {
        constructor() {
            console.log('[Lite] CollisionReconstruction stubbed - collision analysis removed in lite version');
            this.isVisible = false;
        }
        setTelemetryOverlay() {}
        toggle() {
            console.log('[Lite] Collision reconstruction not available in lite version');
        }
        show() {}
        hide() {}
        reset() {}
    };
}

// Stub for removed PlateBlur class
if (typeof PlateBlur === 'undefined') {
    window.PlateBlur = class PlateBlur {
        constructor() {
            console.log('[Lite] PlateBlur stubbed - plate blur removed in lite version');
        }
        isReady() { return false; }
        loadModel() {
            console.log('[Lite] Plate blur not available in lite version');
            return Promise.resolve(false);
        }
    };
}

// Stub for removed InsuranceReport class
if (typeof InsuranceReport === 'undefined') {
    window.InsuranceReport = class InsuranceReport {
        constructor() {
            console.log('[Lite] InsuranceReport stubbed - reports removed in lite version');
        }
        setProgressCallback() {}
        generateReport() {
            alert('Insurance reports are not available in the lite version.\n\nFor full features including PDF reports, use the main version.');
            return Promise.resolve();
        }
    };
}

// Stub for removed StatisticsManager class
if (typeof StatisticsManager === 'undefined') {
    window.StatisticsManager = class StatisticsManager {
        constructor() {
            console.log('[Lite] StatisticsManager stubbed - statistics removed in lite version');
        }
        setEvents() {}
        showModal() {
            alert('Statistics are not available in the lite version.\n\nFor full features including analytics, use the main version.');
        }
    };
}

// Stub for removed SessionManager class
if (typeof SessionManager === 'undefined') {
    window.SessionManager = class SessionManager {
        constructor() {
            console.log('[Lite] SessionManager stubbed - session tracking removed in lite version');
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

// Stub for external services
if (typeof window.weatherService === 'undefined') {
    window.weatherService = {
        getWeather: () => Promise.resolve(null),
        formatForDisplay: () => ''
    };
}

if (typeof window.speedLimitService === 'undefined') {
    window.speedLimitService = {
        getSpeedLimit: () => Promise.resolve(null),
        getSpeedLimitCached: () => null,
        queueForBackgroundLoading: () => {},
        stopBackgroundLoading: () {}
    };
}

if (typeof window.elevationService === 'undefined') {
    window.elevationService = {
        getElevationProfile: () => Promise.resolve(null)
    };
}

// Stub for plate enhancer (if referenced globally)
if (typeof window.plateEnhancer === 'undefined') {
    window.plateEnhancer = {
        init: () => {},
        startEnhanceRegionMode: () => {
            alert('Plate enhancement is not available in the lite version.\n\nFor AI-powered features, use the main version.');
        },
        autoDetectPlates: () => {},
        isProcessing: false,
        isSelecting: false,
        selections: new Map(),
        clearAllSelections: () => {},
        showToast: () => {}
    };
}

// Patch app class method that references removed elements
// This prevents null reference errors when buttons don't exist
document.addEventListener('DOMContentLoaded', () => {
    console.log('[Lite] Compatibility layer active - patching app methods');
    
    // Wait for app to be created
    setTimeout(() => {
        if (window.app) {
            // Stub out methods that reference removed UI elements
            const originalUpdateOverlayButtonStates = window.app._updateOverlayButtonStates;
            if (originalUpdateOverlayButtonStates) {
                window.app._updateOverlayButtonStates = function() {
                    try {
                        // Only update buttons that exist
                        if (this.toggleHudBtn) {
                            this.toggleHudBtn.classList.toggle('active', this.telemetryOverlay?.isVisible || false);
                        }
                        // Skip toggleMiniMapBtn, toggleStreetViewBtn, toggleSlowMoBtn, toggleBirdsEyeBtn - don't exist in lite
                    } catch (e) {
                        console.warn('[Lite] Error updating overlay button states:', e);
                    }
                };
            }

            // Stub out mobile more menu status update for missing elements
            const originalUpdateMobileMoreMenuStatus = window.app._updateMobileMoreMenuStatus;
            if (originalUpdateMobileMoreMenuStatus) {
                window.app._updateMobileMoreMenuStatus = function() {
                    try {
                        if (this.mobileHudStatus) {
                            const isHudOn = this.telemetryOverlay?.isVisible || false;
                            this.mobileHudStatus.textContent = isHudOn ? 'ON' : 'OFF';
                            this.mobileHudStatus.closest('.mobile-more-option')?.classList.toggle('active', isHudOn);
                        }
                        // Skip mobileMiniMapStatus - doesn't exist in lite
                        if (this.mobileLayoutSelect && this.layoutSelect) {
                            this.mobileLayoutSelect.value = this.layoutSelect.value;
                        }
                    } catch (e) {
                        console.warn('[Lite] Error updating mobile menu status:', e);
                    }
                };
            }

            // Stub out mobile more action handler for removed features
            const originalHandleMobileMoreAction = window.app._handleMobileMoreAction;
            if (originalHandleMobileMoreAction) {
                window.app._handleMobileMoreAction = function(action) {
                    switch (action) {
                        case 'toggle-hud':
                            this.toggleHudBtn?.click();
                            break;
                        case 'toggle-minimap':
                            console.log('[Lite] Mini-map not available in lite version');
                            break;
                        case 'enhance':
                            this.enhanceBtn?.click();
                            this.mobileMoreMenu?.classList.add('hidden');
                            break;
                        case 'screenshot':
                            this.screenshotBtn?.click();
                            this.mobileMoreMenu?.classList.add('hidden');
                            break;
                        case 'export-video':
                            this.exportBtn?.click();
                            this.mobileMoreMenu?.classList.add('hidden');
                            break;
                        case 'insurance-report':
                            alert('Insurance reports are not available in the lite version.');
                            this.mobileMoreMenu?.classList.add('hidden');
                            break;
                        default:
                            console.warn('[Lite] Unknown action:', action);
                    }
                    // Update status after action
                    setTimeout(() => this._updateMobileMoreMenuStatus && this._updateMobileMoreMenuStatus(), 100);
                };
            }

            // Stub out enable controls to not enable removed buttons
            const originalEnableControls = window.app.enableControls;
            if (originalEnableControls) {
                window.app.enableControls = function() {
                    this.playPauseBtn.disabled = false;
                    this.frameBackBtn.disabled = false;
                    this.frameForwardBtn.disabled = false;
                    this.prevClipBtn.disabled = false;
                    this.nextClipBtn.disabled = false;
                    this.screenshotBtn.disabled = false;
                    this.pipBtn.disabled = !document.pictureInPictureEnabled;
                    this.enhanceBtn.disabled = false;
                    // Skip enhanceRegionBtn - doesn't exist in lite
                    this.notesBtn.disabled = false;
                    this.updateNotesButtonState();
                    this.markInBtn.disabled = false;
                    this.markOutBtn.disabled = false;
                    this.clearMarksBtn.disabled = false;
                    this.exportBtn.disabled = false;
                    this.exportDropdownBtn.disabled = false;
                    this.prevBookmarkBtn.disabled = false;
                    this.addBookmarkBtn.disabled = false;

                    // Enable overlay toggle buttons that exist
                    if (this.toggleHudBtn) this.toggleHudBtn.disabled = false;
                    // Skip toggleMiniMapBtn, toggleGraphsBtn, toggleStreetViewBtn, toggleSlowMoBtn, toggleBirdsEyeBtn
                    
                    this.nextBookmarkBtn.disabled = false;
                    this.bookmarksListBtn.disabled = false;
                    this.zoomOutBtn.disabled = false;
                    this.zoomInBtn.disabled = false;
                    this.zoomResetBtn.disabled = false;
                    this.speedSelect.disabled = false;
                    this.loopCheckbox.disabled = false;
                    this.loopBtn.disabled = false;

                    // Event navigation buttons
                    this.prevEventBtn.disabled = this.currentEventIndex <= 0;
                    this.nextEventBtn.disabled = this.currentEventIndex >= this.allEvents.length - 1;

                    // Show mobile fullscreen button
                    if (this.mobileFullscreenBtn) {
                        this.mobileFullscreenBtn.classList.remove('hidden');
                    }
                    
                    this._updateOverlayButtonStates();
                };
            }
        }
    }, 100);
});

console.log('[Lite] Compatibility layer loaded - all removed features stubbed');
