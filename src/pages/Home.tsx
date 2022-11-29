import { BsArrowRight} from 'react-icons/bs';

export function Home () {
    return (
       <section className="d-flex flex-column justify-content-center align-items-center bg-light p-3 vh-100">
         <h2> Du weißt nicht, wo du anfangen sollst? <a href= "/store" className="text-decoration-underline ">Jetzt shoppen <BsArrowRight /></a> </h2>

        <h3 className="p-3">Geschenke, Bekleidung, Schuhe, Sportartikel, Beauty und vieles mehr.</h3>
        <img src="/images/beauty.webp" className="w-75 p-3"></img>
        </section>
    )
}