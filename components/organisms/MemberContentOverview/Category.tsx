/* eslint-disable no-unused-vars */
import Image from 'next/image';

interface CategoryProps {
    category: 'desktop' | 'mobile' | 'others'
    spent: number
}

export default function Category(props: CategoryProps) {
    const { category, spent } = props;

    type propertiesProps = {
        title: string
        icon: string
    };
    let properties: propertiesProps;

    if (category === 'desktop') {
        properties = {
            title: 'Game Desktop',
            icon: 'icon-game-desktop',
        };
    } else if (category === 'mobile') {
        properties = {
            title: 'Game Mobile',
            icon: 'icon-game-mobile',
        };
    } else {
        properties = {
            title: 'Other Games',
            icon: 'icon-game-others',
        };
    }

    return (
        <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
            <div className="categories-card">
                <div className="d-flex align-items-center mb-24">
                    <Image src={`/icon/MemberContentOverview/${properties.icon}.svg`} width={60} height={60} />
                    <p className="color-palette-1 mb-0 ms-12">{properties.title}</p>
                </div>
                <div>
                    <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                    <p className="text-2xl color-palette-1 fw-medium m-0">{`Rp. ${spent}`}</p>
                </div>
            </div>
        </div>
    );
}
