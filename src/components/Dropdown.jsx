import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from 'react-icons/go';
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            };
        };

        document.addEventListener('click', handler, true);


        return () => {
            document.removeEventListener('click', handler);
        }
    }, []);

    const handleClick = () => {
        // setIsOpen((currentIsOpen) => !currentIsOpen); geresnis variantas, kadangi nebuna bug'o.
        // Taciau bugas labai retais atvejais islenda, todel tinka ir toks:
        setIsOpen(!isOpen)
    };

    const handleOptionClick = (option) => {
        // close dropdown
        setIsOpen(false);
        // What is selected?
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>;
    });

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel className="static top-full">{renderedOptions}</Panel>}
        </div>
    );
};

export default Dropdown;