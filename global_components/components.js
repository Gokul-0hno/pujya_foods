function Navbar(props) {
    return(
        <nav class="navbar" id="navbar">
            <a class="nav-link nav-brand" href="#">PUJYA Foods</a>
            <button class="nav-btn" id="nav-btn"><i class="fa-solid fa-bars"></i></button>
            <div class="nav-items" id="nav-items">
                <a class="nav-link" href="#products">Products</a>
                <a class="nav-link" href="#about">About us</a>
                <a class="nav-link" href="#contact">Contact us</a>
            </div>
        </nav>
    );
}

function Footer(props) {
    return(
        <footer class="footer" id="footer">
        <div class="footer-form" id="footer-form"></div>
        <div class="soc-banner" id="follow">
            <button class="soc-ico fa-regular fa-envelope" id="nl-interested"></button>
            <a target="_blank" href="https://www.google.com/maps/place/PUJYA+foods/@11.0356372,76.9796918,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba85995b6ea13bd:0x1967947c30af001a!8m2!3d11.0356352!4d76.9796922" class="fa-regular fa-map soc-ico"></a>
            <a target="_blank" href="#" class="soc-ico fa-brands fa-twitter"></a>
            <a target="_blank" href="#" class="soc-ico fa-brands fa-instagram"></a>
            <a target="_blank" href="#" class="soc-ico fa-brands fa-facebook"></a>
            <a target="_blank" href="#" class="soc-ico fa-brands fa-youtube"></a>
        </div>
        <p style="text-align: center; margin: 0">	&#169;2022 Pujya Foods</p>
    </footer>
    );
}

export {Navbar, Footer};