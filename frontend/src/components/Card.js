const Card = (props) => {
    return (
        <div class="card my-4 mx-4" style={{width: 10 + 'rem', height: 8 + 'rem', backgroundColor: '#B9D8DF', color: '#FAF9F6', border: 'none'} }>
            <div class="card-body">
                <h5 class="card-title">{props.host}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{props.code}</h6>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a> */}
            </div>
        </div>
    )
}

export default Card;