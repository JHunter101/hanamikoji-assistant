"use strict";
function loadTileset(setID) {
    for (const [key, value] of Object.entries(DATA_GAME_TILESETS[setID])) {
        // Reset
        const tile = document.getElementById('tile-' + key);
        tile.classList.add('bg--color-green');
        tile.classList.remove('bg--color-red');
        const parts = value.split('-');
        // Set Action Name
        const s = parts[0] || '';
        const info = document.getElementById('tile-info-' + key);
        info.innerHTML = s;
        // Set tooltip
        const x = key || '';
        const y = parts[1] || '';
        const z = parts[2] || '';
        const updatedRule = DATA_GAME_RULES[s]
            .replace(' x ', ' ' + x + ' ')
            .replace(' y ', ' ' + y + ' ')
            .replace(' z ', ' ' + z + ' ');
        info.setAttribute('tooltip', updatedRule);
    }
    hide('section-version-select');
    unhide('section-tiles');
    adjustTooltipPosition();
}
