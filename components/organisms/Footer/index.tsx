import Image from 'next/image';
import Link from 'next/link';
import LinkItem from './LinkItem';

export default function Footer() {
    return (
        <section className="footer pt-50">
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 text-lg-start text-center">
                            <Link href="/">
                                <a className="mb-30">
                                    <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
                                </a>
                            </Link>
                            <p className="mt-30 text-lg color-palette-1 mb-30">
                                StoreGG membantu gamers
                                <br />
                                {' '}
                                untuk menjadi
                                pemenang sejati
                            </p>
                            <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-20">
                            <div className="row gap-sm-0">
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                                    <ul className="list-unstyled">
                                        <LinkItem title="About Us" />
                                        <LinkItem title="Press Release" />
                                        <LinkItem title="Term of Use" />
                                        <LinkItem title="Privacy & Policy" />
                                    </ul>
                                </div>
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                                    <ul className="list-unstyled">
                                        <LinkItem title="Refund Policy" />
                                        <LinkItem title="Unlock Rewards" />
                                        <LinkItem title="Live Chatting" />
                                    </ul>
                                </div>
                                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                                    <ul className="list-unstyled">
                                        <LinkItem title="hi@store.gg" href="mailto: hi@store.gg" />
                                        <LinkItem title="team@store.gg" href="mailto: team@store.gg" />
                                        <LinkItem title="Pasific 12, Jakarta Selatan" href="http://maps.google.com/?q=Pasific 12, Jakarta Selatan" />
                                        <LinkItem title="021 - 1122 - 9090" href="tel: 02111229090" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}
