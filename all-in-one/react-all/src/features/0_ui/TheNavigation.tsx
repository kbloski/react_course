import { Link } from 'react-router-dom'

function TheNavigation(){
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <div>Basic Sides</div>
                        <ul>
                            <li>
                                <Link to="/">Home Page</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>React knowledge</div>
                        <ul>
                            <li>
                                <Link to="/basic">01 React Basic</Link>
                            </li>
                            <li>
                                <Link to="/forms">02 React Form (useForm)</Link>
                            </li>
                            <li>
                                <Link to="/styles-modules">
                                    03 Style Module
                                </Link>
                            </li>
                            <li>
                                <Link to="/useRef">04 useRef</Link>
                            </li>
                            <li>
                                <Link to="/useReducer">05 useReducer</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>Context API</div>
                        <ul>
                            <li>
                                <Link to="/context-api">Context API Page</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>Redux Toolkit</div>
                        <ul>
                            <li>
                                <Link to="/redux-toolkit">Redux Page</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>React Router</div>
                        <ul>
                            <li>Router v5 and before</li>
                            <li>
                                Router v6
                                <ul>
                                    <Link to='/router-v6/loader/33' ><li>The loader for component</li></Link>
                                    <Link to='/router-v6/action' ><li>The Action</li></Link>
                                </ul>
                            </li>

                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default TheNavigation;