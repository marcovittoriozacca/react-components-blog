import Card from "./mainComponents/Card";
import style from "./Main.module.css";

const Main = () => {
    return (
        <>
        <main className={style.main}>
            <section className={style.cards}>
                <Card />
                
            </section>
        </main>
        </>
    )
}

export default Main;