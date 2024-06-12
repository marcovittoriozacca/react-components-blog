import style from "./Card.module.css";

const Card = () => {
    return (
        <>
            <div className={style.card}>
                <figure>
                    <img src="https://picsum.photos/seed/picsum/500/300" alt="template-image" />
                </figure>
                <div className={style.cardBody}>
                    <h3>Titolo del post</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum deserunt blanditiis sapiente expedita similique dolorem, eum tempore repellat delectus. Qui, nam ad esse id, enim error veritatis soluta sequi ut, repellat accusantium laborum incidunt deleniti voluptate fugiat. Velit, molestias iste!</p>
                    <button>LEGGI DI PIU'</button>
                </div>

            </div>
        </>
    )
}

export default Card;