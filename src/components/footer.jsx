import React from 'react';
function Footer() {
    return <footer className="page-footer #e0f2f1 teal lighten-5 ">
        <div className="container #004d40 teal-text darken-4">
            {new Date().getFullYear()}
            <div className="row ">
                <div className="col l6 s12">
                <h5 className="brand-logo #004d40 teal-text darken-4">Spa Project</h5>
                <u><a href="https://github.com/WhiskeyLord/spaproj" className="#004d40 teal-text darken-4">Repository</a></u>
                </div>
                
            </div>
        </div>
        <div className="footer-copyright #e0f2f1 teal lighten-5 ">
            <div className="container #004d40 teal-text darken-4 ">
                © Made by Maximova Olga 2024

            </div>
        </div>
    </footer>
}

export { Footer };