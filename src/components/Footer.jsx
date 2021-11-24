import '../assets/css/footer.scss';
import app_store from '../assets/images/app_store.png';
import CHPlay from '../assets/images/CHPlay.png';
import QR_code from '../assets/images/QR_code.png';

import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer class="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                    <div className="grid__column-2-4">
                        <h4 className="footer__heading">customer care</h4>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="">help center</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="">Athena mall</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="">shopping guide</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="grid__column-2-4">
                        <h4 className="footer__heading">Athena shop</h4>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="">introduce apollo shop vietnam</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="">recruitment</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="">Athena Shop terms</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="grid__column-2-4">
                        <h4 className="footer__heading">track</h4>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to=""><i className="fab fa-facebook"></i>facebook</Link>
                            </li>
                            <li className="footer-item">
                                <Link to=""><i className="fab fa-instagram-square"></i>instagram</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div class="grid__column-2-4">
                        <h4 class="footer__heading">downlaod app</h4>
                        <div class="footer__download">
                            <div className="footer__download-qr">
                                <Link to="">
                                    <img src={QR_code} alt="" />
                                </Link>
                            </div>
                            <div class="footer__download-apps">
                                <Link to="">
                                    <img src={app_store} alt="" />
                                </Link>
                                <Link to="">
                                    <img src={CHPlay} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="grid">
                    <p className="copy-right">© 2021 - Copyright belongs to apollo shop Co., Ltd</p>
                </div>
            </div>
        </footer>
    )
}

