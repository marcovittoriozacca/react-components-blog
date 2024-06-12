import style from "./Card.module.css";

const Card = ({post}) => {
    return (
        <>
            <div className={style.card}>
                <figure>
                    <img src={ post.image } alt="template-image" />
                </figure>
                <div className={style.cardBody}>
                    <h3>{ post.title }</h3>
                    <p>{ post.content }</p>
                    <button>LEGGI DI PIU'</button>
                </div>

            </div>
        </>
    )
}

export default Card;