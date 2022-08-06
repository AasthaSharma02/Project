function Header(props) {
    const { countCartItems } = props;
    return (
        <div className="row block center">
            <div>
                <a href="/">
                    <h1>Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="/cart">

                    Cart {' '}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : ('')
                    }

                </a>
                <a href="/login">Signin</a>
            </div>
        </div>
    );
}

export default Header;