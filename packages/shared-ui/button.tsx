import { memo, PropsWithChildren } from 'react';

interface ButtonProps {
    onClick?: () => void;
}

export const Button = memo<PropsWithChildren<ButtonProps>>(({ children, ...rest }) => {
    return <button onClick={() => alert('hello!')} {...rest}>{children}</button>;
});
