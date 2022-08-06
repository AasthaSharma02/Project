import './style.css'

function Card(props) {
    return (
        <div className="card">
            <strong>{props.name}</strong>
            {/* <img src={props.img} alt={props.name} className="card--image" /> */}
            <div className="card--content">
                
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

export default Card;