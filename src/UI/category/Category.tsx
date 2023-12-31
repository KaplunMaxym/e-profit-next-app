import {FC} from "react";
import {ICategories, IData} from "@/UI/category/models";
import s from '@/UI/category/category.module.scss'

const Category: FC<ICategories> = ({data}) => {
    return (
        <select name="categories" className={s.category} required>
            <option hidden>Виберіть категорію</option>
            {data.map((element: IData) =>
                <option
                    key={element.id}
                    value={element.id}
                    defaultValue={'123'}
                >
                    {element.category}
                </option>)
            }
        </select>
    );
};

export default Category;