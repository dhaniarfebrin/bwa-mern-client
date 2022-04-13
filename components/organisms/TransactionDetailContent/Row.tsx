import cx from 'classnames';

interface RowProps {
    label: string
    value: string | number
}

export default function Row(props: RowProps) {
    const { label, value } = props;

    const valueClassname = cx({
        'purchase-details': true,
        'color-palette-4': label === 'Total',
    });

    return (
        <p className="text-lg color-palette-1 mb-20">
            {label}
            <span
                className={valueClassname}
            >
                {value}
            </span>
        </p>
    );
}
