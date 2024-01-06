'use client'
import {makeRequestService} from "@/services/makeRequestService";
import s from '@/components/Vacancies/vacancies.module.scss'
import {Vacancy} from "@/components";

const response = async () => {
    try {
        return await makeRequestService(
            "GET",
            "/api/vacancy?page=1&limit=10",
        )
    } catch (e) {
        console.error('ERROR: VacanciesLayout')
    }
}

const Vacancies = () => {
    const vacancies: any = response();
    const data: any = vacancies.vacancies.data || {};

    return (
        <div>
            {data && <div className={s.vacanciesContainer}>{data.map((item: any) => <Vacancy key={item.id} data={item} />)}</div>}
        </div>
    );
};

export default Vacancies;