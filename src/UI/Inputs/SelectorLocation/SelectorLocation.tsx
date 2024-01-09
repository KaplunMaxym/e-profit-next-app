"use client";
import {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import s from '@/UI/Inputs/SelectorLocation/SelectorLocation.module.scss';
import Image from "next/image";
import { locationSearch, selectArrow } from "@/assets";

interface ISelectorLocation {
    data?: [];
    headerTitle: string;
}

const SelectorLocation:FC<ISelectorLocation> = ({data, headerTitle}) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<any>(null);
    const [dataFiltered, setDataFiltered] = useState<[]>([])

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setIsSelectOpen(false);
    };
    const toggleSelect = () => {
        setIsSelectOpen(!isSelectOpen);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsSelectOpen(false);
        }
    };
    const handlerSetSelectedValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.target.value)
    }
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            handleClickOutside(event);
        };
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [containerRef]);
    const dataData = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Додайте інші об'єкти за необхідності
    ];

    useEffect(() => {
        if (data) setDataFiltered(data.filter((item: any) => item.name.includes(selectedValue)) as []);
    }, [data, selectedValue]);

    return (
        <div className={s.container} ref={containerRef}>
            {/*<Image src={locationSearch} alt={'loc'} />*/}

            <div className={s.selectContainer}>
                <div className={s.selectHeader} onClick={toggleSelect}>
                    <span>{selectedValue || headerTitle}</span>
                    <input className={s.input} ref={inputRef} type="text" value={selectedValue} onChange={(e) => handlerSetSelectedValue(e)}/>
                    {/*<Image src={selectArrow} alt={'arrow'} />*/}
                </div>
                {isSelectOpen &&  (
                    <div className={`${s.selectsContainer} ${s.selector}`}>
                        {dataFiltered && dataFiltered.map((item: any) => (
                            <div
                                className={s.selectItem}
                                key={item.id}
                                id={item.id}
                                onClick={() => handleSelect(item.name)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export default SelectorLocation;
