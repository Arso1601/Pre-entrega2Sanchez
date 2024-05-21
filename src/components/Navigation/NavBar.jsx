import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from './CartWidget';
import nombre from '../../assets/img/nombre.png'
export default function NavComponent() {
    return (
        <>
            <header class="container">
                <nav class="navbar allNav navbar-expand-lg">
                    <Link to={'/'}><img class="nombre img-fluid" src={nombre}></img></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <button class="nav-link">
                                <Link to={'/products/Dragon Ball'} class="btn btn-outline-warning">Dragon Ball</Link>
                            </button>
                        </li>
                        <li class="nav-item ">
                            <button class="nav-link">
                                <Link to={'/products/One Piece'} class="btn btn-outline-warning">One Piece</Link>
                            </button>
                        </li>
                        <li class="nav-item ">
                            <button class="nav-link">
                                <Link to={'/products/Pokemon'} class="btn btn-outline-warning">Pokemon</Link>
                            </button>
                        </li>
                    </ul>
                    <form class="d-flex mx-auto">
                        <input class="form-control me-2" type="search" placeholder="Busqueda" aria-label="Busqueda"></input>
                        <button class="btnFormulario" type="submit">Buscar</button>
                    </form>
                    <CartWidget />
                </nav>
            </header>
        </>
    )
}

