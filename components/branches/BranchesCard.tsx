import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';
const BranchCard = ({ location, title, description, href }:{location:[number, number], title:string, description:string, href:string}) => {
    return (
        <div className="card p-2">
            <div className="row g-0">
                <div className="col-6">
                    <MapContainer className="MapContainer shadow-lg rounded" center={location} zoom={16} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={location}>
                            <Popup>
                                Hi
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a className="btn btn-warning float-start w-100" href={href}>
                        مسیریابی
                      <Image width={20} height={20} src="https://img.icons8.com/ios/50/marker--v1.png" alt="Gps" />     
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchCard;