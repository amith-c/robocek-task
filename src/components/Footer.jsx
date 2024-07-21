// Social icon imports
import fb from '../assets/icons/fb.png';
import ig from '../assets/icons/ig.png';
import linkedin from '../assets/icons/linkedin.png';
import twitter from '../assets/icons/twitter.png';
import pinterest from '../assets/icons/pinterest.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="py-3">
                    <div className="d-flex gap-4 justify-content-center">
                        <a target='_blank' href="https://facebook.com">
                            <img src={fb} width={30} alt="" /></a>
                        <a target='_blank' href="https://facebook.com">
                            <img src={ig} width={30} alt="" /></a>
                        <a target='_blank' href="https://facebook.com">
                            <img src={linkedin} width={30} alt="" /></a>
                        <a target='_blank' href="https://facebook.com">
                            <img src={twitter} width={30} alt="" /></a>
                        <a target='_blank' href="https://facebook.com">
                            <img src={pinterest} width={30} alt="" /></a>
                    </div>
                    <div className="fs-6 text-center mt-2">&copy; 2024 Amith Chalil</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;