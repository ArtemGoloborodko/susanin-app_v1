import { Link } from "react-router-dom"


const App_page = () => {
    return (
        <div className="app__page_block">
            <h1>Susanin</h1>
            <h2>маршруты Калининграда и области</h2>

            <Link to={"/maps"} className="btn_go">Посмотреть маршруты</Link>
        </div>
    )
}

export default App_page