import s from '@/components/vacancy/vacancy.module.scss'
import {FC} from "react";
import Image from "next/image";
import {location, safe} from "@/assets";

interface IVacancyData {
    "id": number,
    "is_saved": boolean | null,
    "info": {
        "cityName": string,
        "status": boolean | null,
        "vacName": string | null,
        "companyPhoto": string,
        "contractual": false | null,
        "price": number | null,
        "employment": string | null,
        "online": string | null,
        "contacts": {
            "email": string | null,
            "phone": [
                string | null,
            ]
        }
    }
}
interface IVacancy{
    data?: IVacancyData;
}

const Vacancy: FC<IVacancy> = ({data}) => {

    return (
        <div className={s.container}>
            <div className={s.leftSubContainer}>
                <div className={s.employment}>{data && data.info.employment}</div>
                <div>
                    <div className={s.title}>{data && data.info.vacName}</div>
                    <div className={s.price}>{data && data.info.price} грн</div>
                </div>
                <div className={s.city}><Image className={s.imgLocation} width={14} src={location} alt={location} /><span className={s.cityName}> {data && data.info.cityName && data.info.cityName}</span></div>
            </div>
            <div className={s.rightSubContainer}>
                <Image src={safe} alt={safe} />
                {data && data.info.companyPhoto && <Image src={data.info.companyPhoto} alt={safe} width={100} height={100} />}
                <div className={s.online}>{data && data.info.online && data.info.online}</div>
            </div>
        </div>
    );
};

export default Vacancy;

// {
//     "id": 4874,
//     "is_saved": false,
//     "info": {
//         "cityName": null,
//         "status": true,
//         "vacName": "електромонтер з експлуатації рм північного рем (ед-3 корчинська)",
//         "companyPhoto": null,
//         "contractual": false,
//         "contacts": {
//              "email": null,
//                  "phone": [
//                  "0322392350"
//         ]
//     }
// }
// }