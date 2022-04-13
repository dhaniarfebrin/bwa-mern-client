import Link from 'next/link';

interface LinkItemProps {
    title: string
    href?: string
}

export default function LinkItem(props: Partial<LinkItemProps>) {
    const { title, href = '/' } = props;

    return (
        <li className="mb-6">
            <Link href={href}>
                <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
            </Link>
        </li>
    );
}
