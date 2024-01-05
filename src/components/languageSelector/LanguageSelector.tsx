import React from 'react';
import {SelectorLanguage} from "@/UI";
import s from '@/components/languageSelector/languageSelector.module.scss'

const LanguageSelector = () => {
    const data: {id: number, language: string}[] = [
        {
            id: 1,
            language: 'Українська'
        },
        {
            id: 2,
            language: 'English'
        },
        {
            id: 3,
            language: 'Deutsch'
        },
    ]
    return (
        <div className={s.block}>
            <SelectorLanguage data={data} />
        </div>
    );
};

export default LanguageSelector;