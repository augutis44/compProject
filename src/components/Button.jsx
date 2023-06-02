import className from 'classnames';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    // ...rest paima sita onClick = {handleClick} ir perduoda ji mygtukui
    ...rest
}) => {

    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
    });

    // funkcija naudojama sujungti ir issimti is classes nereikalingus komponentus (palieka paskutini)
    const mergedClases = twMerge(classes);

    return <button {...rest} className={mergedClases}>{children}</button>;
};


// This is prop-types. It checks weather primary, secondary, success, warning, danger is used only one time. 
// Can't be primary, secondary props in one button
Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true')
        }
    }
}

export default Button;