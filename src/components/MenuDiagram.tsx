import './menuDiagram.scss'

function MenuDiagram() {
  
    return (
        <nav className="menuDiagram">
            <ul>
                <li><button>Genomsnittliga prissumman per år</button></li>
                <li><button>Antalet pristagare inom de olika kategorierna, för ett valt år</button></li>
                <li><button>Antalet pristagare totalt, fördelat på de olika kategorierna (cirkeldiagram)</button></li>
                <li><button>Fördelningen mellan män och kvinnor bland pristagare (cirkeldiagram)</button></li>
                <li><button>Hur många gånger som Nobelpriset delats ut, inom varje kategori</button></li>
                <li><button>Hur många pristagare som kommer från olika länder</button></li>
                <li><button>De Nobelpristagare som vunnit flest Nobelpris. Visa till exempel topp 10.</button></li>
            </ul>
        </nav>
    )
}

export default MenuDiagram;
