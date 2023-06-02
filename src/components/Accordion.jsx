import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);
        }
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        // Jeigu true, tia DOWN, jeigu false tai LEFT. (isExpanded && <GoChevronDown /> || <GoChevronLeft />)
        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-2 items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {/* jeigu isExpanded yra tiesa, tuomet yra grazinamas pirmas false value, kas yra <div>.... */}
                {isExpanded && <div className="border p-5">{item.content}</div>}
            </div>
        );
    });
    return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;