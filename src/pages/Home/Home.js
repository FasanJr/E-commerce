import { useState, useMemo } from 'react'
import classNames from "classnames/bind";
import styles from './Home.module.scss'

import Pagination from '../../components/Pagination'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Home() {
    //Fake API Products
    const products = [
        { id: 1, categoryId: 1, name: 'Boesmani', price: 10.9 },
        { id: 2, categoryId: 2, name: 'Altum', price: 10.9 },
        { id: 3, categoryId: 3, name: 'Red Melon', price: 10.9 },
        { id: 4, categoryId: 4, name: 'Pigmmy', price: 10.9 },
        { id: 5, categoryId: 5, name: 'Cardinal Tetra', price: 10.9 },
        { id: 6, categoryId: 4, name: 'Star', price: 10.9 },
        { id: 7, categoryId: 5, name: 'Neon Tetra', price: 10.9 },
        { id: 8, categoryId: 1, name: 'Sentani', price: 10.9 },
        { id: 9, categoryId: 2, name: 'Manacapuru', price: 10.9 },
    ];

    const categories = [
        { id: 1, name: 'Rainbow Fish' },
        { id: 2, name: 'Angel Fish' },
        { id: 3, name: 'Discuss Fish' },
        { id: 4, name: 'Colydoras Fish' },
        { id: 5, name: 'Tetra Fish' },
    ]

    const [renderProduct, setRenderedProduct] = useState(products)
    const [searchValue, setSearchValue] = useState('')

    const handleRenderImageOfCategory = (id) => {
        switch (id) {
            case 1:
                return 'https://vivina.net/static/media/images/news/ca-cau-vong-boesemans-rainbowfish-1536x1021-1629620543.jpg'
            case 2:
                return 'https://p2u4d7g7.stackpathcdn.com/wp-content/uploads/sites/11/2019/09/orinoco_altum-copy.jpg'
            case 3:
                return 'https://www.aquariumfishonline.com.au/wp-content/uploads/2021/11/Discus-Red-Malboro-Melon.jpg'
            case 4:
                return 'https://st2.depositphotos.com/1037861/6377/i/600/depositphotos_63772197-stock-photo-corydoras-fish.jpg'
            case 5:
                return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzTUMX32EM2RXsT3q5_g2i7vPmczPX3is80w&usqp=CAU'
            default:
                return
        }
    }

    //Active tab
    const [activeState, setActiveState] = useState(null);
    const activeTab = (id) => {
        setActiveState(id);
    };



    //Pagtination
    let pageSize = 8;

    const [currentPage, setCurrentPage] = useState(1);

    const currentProductsPagination = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return renderProduct.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize, renderProduct]);


    const handleRenderProductsByCategory = (categoryId) => {
        if (categoryId) {
            const filterProducts = products.filter(product => product.categoryId === categoryId)
            setRenderedProduct(filterProducts)
        } else {
            setRenderedProduct(products)
        }
        activeTab(categoryId)
    }

    const handleSearchProducts = (e) => {
        e.preventDefault();
        if (searchValue !== '') {
            const filterProducts = products.filter(product => product.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
            setRenderedProduct(filterProducts)
        } else {
            setRenderedProduct(products)
        }
        setSearchValue('');
    }

    return (
        <main>
            <div className={cx('container')}>
                {/*Navbar*/}
                <nav className={cx('navbar', 'navbar-expand-lg', 'navbar-dark', 'mdb-color', 'lighten-3', 'mt-3', 'mb-5')}>
                    {/* Navbar brand */}
                    <span className={cx('navbar-brand')}>Categories:</span>
                    {/* Collapsible content */}
                    <div className="navbar-collapse d-flex justify-content-between" id="basicExampleNav">
                        {/* Links */}
                        <ul className="navbar-nav mr-auto flex-row">
                            <li className={cx('nav-item', activeState === null ? 'active' : '')}>
                                <span className={cx('nav-link')} onClick={() => handleRenderProductsByCategory(null)}>
                                    All
                                </span>
                            </li>
                            {categories.map(category =>
                                <li className={cx('nav-item', activeState === category.id ? 'active' : '')} key={category.id}>
                                    <span className={cx('nav-link')} onClick={() => handleRenderProductsByCategory(category.id)}>
                                        {category.name}
                                    </span>
                                </li>
                            )}
                        </ul>
                        {/* Links */}
                        <form className={cx('form-inline')} id={cx('search-form')} onSubmit={handleSearchProducts}>
                            <div className="md-form my-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="text"
                                    placeholder="Search"
                                    value={searchValue}
                                    onChange={e => setSearchValue(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                    {/* Collapsible content */}
                </nav>
                {/*/.Navbar*/}

                {/*Section: Products v.3*/}
                <section className="text-center mb-4">
                    {/*Grid row*/}
                    <div className="row wow fadeIn">
                        {/*Grid column*/}
                        {renderProduct && renderProduct.length > 0 && currentProductsPagination.map(product =>
                        (
                            <Link to={`/product/details/${product.id}`} className={cx('product-link', 'col-lg-3', 'col-md-6', 'mb-4')} key={product.id}>
                                {/*Card*/}
                                <div className={cx('card')}>
                                    {/*Card image*/}
                                    <div className="view overlay">
                                        <img
                                            src={handleRenderImageOfCategory(product.categoryId)}
                                            alt="product-image"
                                            className="card-img-top"
                                            style={{ height: '280px' }}
                                        />
                                    </div>
                                    {/*Card image*/}
                                    {/*Card content*/}
                                    <div className="card-body text-center">
                                        {/*Category & Title*/}
                                        <span href="" className="grey-text">
                                            <h5>{categories.map(category => category.id === product.categoryId ? category.name : null)}</h5>
                                        </span>
                                        <h5>
                                            <strong>
                                                <span href="" className="dark-grey-text">
                                                    {product.name}
                                                </span>
                                            </strong>
                                        </h5>
                                        <h4 className="font-weight-bold blue-text">
                                            <strong>{product.price}$</strong>
                                        </h4>
                                    </div>
                                    {/*Card content*/}
                                </div>
                                {/*Card*/}
                            </Link>
                        )
                        )}
                    </div>
                    {/*Grid row*/}
                </section>
                {/*Section: Products v.3*/}
                <Pagination className={cx('pagination-bar')}
                    currentPage={currentPage}
                    totalCount={products.length}
                    pageSize={pageSize}
                    onPageChange={page => setCurrentPage(page)} />
            </div>
        </main>
    );
}

export default Home;