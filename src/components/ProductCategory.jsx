export const ProductCategory = () => {
    return(
        <div className="col-sm-3">
        <div className="side-bar">
        <h5 className="title-list"><i className="fas fa-list-ul"></i>all product brands</h5>
            <ul className="product-list">
                <li className="product-list__item active"><i className="fas fa-caret-down"></i>Nike</li>
                <li className="product-list__item">Adidas</li>
                <li className="product-list__item">Jordan</li>
                <li className="product-list__item">Puma</li>
                <li className="product-list__item">New Balance</li>
            </ul>
        </div>
        </div>
    )
}