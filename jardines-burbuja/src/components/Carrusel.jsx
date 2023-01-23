import "../../public/styles/Carrusel.css"

export default function Carrusel(){

<figure id="banner">
    <article id="carousel-container" class="carousel-container">
        <div class="mySlides animate">
            <img src="../../public/images/fiesta-jardin.jpg" alt="slide" />
            <h2>Nuestra institucion</h2>
          <p> Brindamos a nuestros alumnos una educación integral y formación de las pirmeras enseñanzas</p>
        </div>
        <div class="mySlides animate">
        </div>

        <div class="mySlides animate">
            <img src="../../public/images/imagen-jardin.jpg" alt="slide" />
            <h2>Actividades</h2>
        <p> Contamos con un ambiente cuidado para que cada actividad se realice 100% seguro </p>
        </div>

        <div class="mySlides animate">

        </div>

        <div class="mySlides animate">
            <img src="../../public/images/fiesta-jardin.jpg" alt="slide" />
            <h2> Nuestros objetivos</h2>
        <p>
          Ofrecer una educación formal, incorporada a la enseñanza oficial, que los forme como sujetos competentes en donde se favorezca el desarrollo de sus habilidades para acceder a mejores condiciones de vida,
        </p>       
        </div>

        {/* <!-- Next and previous buttons --> */}
        <a class="prev" onclick="prevSlide()">&#10094;</a>
        <a class="next" onclick="nextSlide()">&#10095;</a>

        {/* <!-- The dots/circles --> */}
        <div class="dots-container">
            <span class="dots" onclick="currentSlide(1)"></span>
            <span class="dots" onclick="currentSlide(2)"></span>
            <span class="dots" onclick="currentSlide(3)"></span>
            <span class="dots" onclick="currentSlide(4)"></span>
            <span class="dots" onclick="currentSlide(5)"></span>
        </div>
    </article>
</figure>
}
