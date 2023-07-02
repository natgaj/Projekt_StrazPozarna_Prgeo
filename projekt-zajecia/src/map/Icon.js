import L from 'leaflet';
import fire from './fireicon.png'

const LeafIcon = L.Icon.extend({
    options: {
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        tooltipAnchor: [0, 0]
    }
});

export const fireIcon = new LeafIcon({ iconUrl: fire })