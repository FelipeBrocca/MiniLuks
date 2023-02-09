import React, {useState} from 'react'
import { FakeApiCategories } from '../../Data/FakeApiCategories';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const DropdownNavHeader = () => {

    const [isClosed, setIsClosed] = useState(true);

    return (
        <>
            <button
                onClick={() => setIsClosed(!isClosed)}
            >
                <p>PRODUCTOS</p>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className={`dropdown-menu ${isClosed ? "closed" : ""}`}>
                <button
                    onClick={() => setIsClosed(!isClosed)}
                ><Link to='/productos'>Todos los productos</Link></button>
                {
                    FakeApiCategories.map((category) => {
                        return (
                            <button
                                key={category.name}
                                onClick={() => setIsClosed(!isClosed)}
                            ><Link to={`/productos/${category.name.toLowerCase()}`}>{category.name}</Link></button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default React.memo(DropdownNavHeader)