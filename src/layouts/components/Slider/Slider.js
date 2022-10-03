import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";

import Carousel from "react-bootstrap/Carousel";

const cx = classNames.bind(styles);

function Slider() {
    const sliders = [
        {
            id: 1,
            url: "https://i.pinimg.com/originals/83/f0/87/83f0877e0ddbb022a2db46aeee1c924e.jpg",
            caption: "Rainbow Fish",
        },
        {
            id: 2,
            url: "https://img.freepik.com/premium-photo/great-scalar-fish-aquarium_326132-958.jpg?w=2000",
            caption: "Angel Fish",
        },
        {
            id: 3,
            url: "https://static.livebooks.com/dc55dec483f44532b148d632384a20f7/i/f2e63307dae646f1a17a353066583187/1/4SoifmQp7LJ6yDtMuFY2x/1_0_6_1aquarium_discus_fishtank.jpg",
            caption: "Discuss Fish",
        },
        {
            id: 4,
            url: "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.18169-9/18620203_232986067187004_7754203403750657781_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8631f5&_nc_ohc=KXnbh7AXh-kAX9WIue3&_nc_ht=scontent.fdad3-1.fna&oh=00_AT82r3-tp_ttIUOCVfz8ukWcNt-0rgRU-PsyD-hbXGhwhw&oe=634B893B",
            caption: "Colydoras Fish",
        },
        {
            id: 5,
            url: "https://cdn11.bigcommerce.com/s-i80728ueue/images/stencil/1280x1280/products/38028/42128/tetra_3__53516.1645511674.jpg?c=2",
            caption: "Tetra Fish",
        },
    ];

    //handle auto change
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div
                id="carousel-example-1z"
                className={cx("container", "carousel", "slide", "carousel-fade", "pt-4")}
            >
                {/*/.Indicators*/}
                <div className={cx("carousel-inner")} role="listbox">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {sliders.map((slider) => (
                            <Carousel.Item key={slider.id}>
                                <div className="carousel-item active">
                                    <div
                                        className="view"
                                        style={{
                                            backgroundImage: `url(${slider.url})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            height: "300px",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        <Carousel.Caption>
                                            <h3>{slider.caption}</h3>
                                        </Carousel.Caption>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Slider;
