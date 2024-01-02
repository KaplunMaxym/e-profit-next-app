
import type {FC} from "react";
import {ICategories, IData} from "@/UI/Inputs/category/models";
import s from '@/UI/Inputs/category/category.module.scss'

const Category: FC<ICategories> = ({data, name, onChange}) => {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };
    return (
        <select name={name} className={s.category} onChange={handleSelectChange} required>
            <option value={0} hidden>Виберіть категорію</option>
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