import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItemProps {
    icon: 'overview' | 'transactions' | 'messages' | 'card' | 'rewards' | 'settings' | 'logout'
    title: string
    href?: string
    active?: boolean
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const {
        icon, title, href = '/member', active,
    } = props;

    const className = cx({
        'item mb-30': true,
        active,
    });

    return (
        <div className={className}>
            <div className="icon me-3">
                <Image src={`/icon/sidebar/${icon}.svg`} width={25} height={25} alt="" />
            </div>
            <p className="item-title m-0">
                <Link href={href}>
                    <a className="text-lg text-decoration-none">{title}</a>
                </Link>
            </p>
        </div>
    );
}
