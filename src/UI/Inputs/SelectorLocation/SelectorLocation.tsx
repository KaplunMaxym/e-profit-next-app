"use client";
import { useEffect, useRef, useState } from 'react';
import s from '@/UI/Inputs/SelectorLocation/SelectorLocation.module.scss';
import Image from "next/image";
import { locationSearch, selectArrow } from "@/assets";

const SelectorLocation = ({ data, headerTitle}: any) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setIsSelectOpen(false);
    };
    const toggleSelect = () => {
        setIsSelectOpen(!isSelectOpen);
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsSelectOpen(false);
        }
    };
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            handleClickOutside(event);
        };
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [containerRef]);

    return (
        <div className={s.container} ref={containerRef}>
            <Image src={locationSearch} alt={'loc'} />

            <div className={s.selectContainer}>
                <div className={s.selectHeader} onClick={toggleSelect}>
                    <span>{selectedValue || headerTitle}</span>
                    <input type="text" value={selectedValue}/>
                    <Image src={selectArrow} alt={'arrow'} />
                </div>
                {isSelectOpen && (
                    <div className={s.selectsContainer}>
                        {data && data.map((item: any) => (
                            <div
                                className={s.selectItem}
                                key={item.id}
                                id={item.id}
                                onClick={() => handleSelect(item.city)}
                            >
                                {item.city}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export default SelectorLocation;
