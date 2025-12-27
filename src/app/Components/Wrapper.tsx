import React, {
    CSSProperties,
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

interface WrapperProps {
    attributes?: React.HTMLAttributes<HTMLDivElement>,
    className?: string;
    id?: string;
    style?: CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    ref?: React.Ref<HTMLDivElement>;
    children?: ReactNode;
};

const Wrapper = ({ ...props }: WrapperProps) => {
    const {
        attributes,
        className,
        id,
        style,
        onClick,
        ref,
        children
    } = props;

    return (
        <Fragment>
            <div
            {...attributes}
            style={style}
            className={clsx(`${className} wrapper`)}
            id={id}
            onClick={onClick}
            ref={ref}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;