import * as React from 'react';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Addition CSS classes that will be added to the root element.
   */
  className?: string;
  /**
   * width
   */
  width?: string;
  /**
   * If `true` adds a ripple effect to the component
   */
  ripple?: boolean;
  /**
   * If `true` adds a ripple effect to the component
   */
  children?: React.ReactNode;
}

interface IButtonProps extends React.DOMAttributes<HTMLButtonElement> {}

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * @see See [Material Design Button](https://material.io/design/components/buttons.html#) for UI/UX information.
 */
const Button: React.SFC<IButtonProps> = ({
  id,
  onMouseLeave,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      id={id}
      onMouseLeave={onMouseLeave}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
