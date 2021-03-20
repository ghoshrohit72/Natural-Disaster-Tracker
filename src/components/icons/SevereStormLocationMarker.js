import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/hurricane';


const SevereStormLocationMarker = ({ lat, lng, onClick })=> {
    return (
        <span className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="storm-location-icon" />
        </span>
    )
}

export default SevereStormLocationMarker;