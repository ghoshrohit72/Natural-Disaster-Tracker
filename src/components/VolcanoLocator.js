import { Icon } from '@iconify/react';
import VolcanoMarker from '@iconify/icons-mdi/mountain';

const VolacanoLocator = ({lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={VolcanoMarker} className="volcano-icon" />
        </div>
    )
}

export default VolacanoLocator
