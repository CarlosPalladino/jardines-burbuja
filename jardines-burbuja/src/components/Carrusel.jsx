// import "../../public/styles/Carrusel.css"
// import "../services/carousel"
export default function Carrusel() {
    <div className="slideshow-container">

        <div className="mySlides">
            <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
            <p className="author">- John Keats</p>
        </div>

        <div className="mySlides">
            <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
            <p className="author">- Ernest Hemingway</p>
        </div>

        <div className="mySlides">
            <q>I have not failed. I've just found 10,000 ways that won't work.</q>
            <p className="author">- Thomas A. Edison</p>
        </div>
        <div className="mySlides">
            {/* <!-- Next/prev buttons --> */}
            <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
            <a className="next" onClick="plusSlides(1)">&#10095;</a>
        </div>

        {/* // <!--Dots / bullets / indicators-- > */}
        <div className="dot-container">
            <span className="dot" onClick="currentSlide(1)"></span>
            <span className="dot" onClick="currentSlide(2)"></span>
            <span className="dot" onClick="currentSlide(3)"></span>
        </div>
    </div >
    

}
