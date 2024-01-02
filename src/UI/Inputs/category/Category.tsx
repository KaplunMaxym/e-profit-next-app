import type {FC} from "react";
import {ICategories, IData} from "@/UI/Inputs/category/models";
import s from '@/UI/Inputs/category/category.module.scss'

const Category: FC<ICategories> = ({data, name}) => {
    return (
        <select name={name} className={s.category} required>
            <option hidden>Виберіть категорію</option>
            {data.map((element: IData) =>
                <option
                    key={element.id}
                    value={element.id}
                >
                    {element.category}
                </option>)
            }
        </select>
    );
};

export default Category;