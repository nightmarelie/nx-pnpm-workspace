import { memo } from 'react';

interface ButtonProps {
}

export const Button = memo((props: ButtonProps) => {
    return <button onClick={() => alert('hello!')} {...props} />;
});
