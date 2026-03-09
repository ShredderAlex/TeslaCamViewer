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
        toggle() {}
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
        toggle() {}
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
        toggle() {}
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
        loadModel() { return Promise.resolve(false); }
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
        showSessionModal() {}
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

console.log('[Lite] Compatibility layer loaded - all removed features stubbed');
