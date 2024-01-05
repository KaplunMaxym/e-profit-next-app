import s from '@/modules/VacanciesLayout/vacanciesLayout.module.scss'
import {makeRequestService} from "@/services/makeRequestService";
import {Vacancies, Vacancy} from "@/components";
import {Employment} from "@/modules";

async function getData() {
    try {
        return await makeRequestService(
            "GET",
            "/api/vacancy?page=1&limit=10",
        )
    } catch (e) {
        console.error('ERROR: VacanciesLayout')
    }
}

const VacanciesLayout = async () => {
    const vacancies = await getData();
    const data: any = vacancies.vacancies.data || {};
    // console.log(data);

    return (
        <div className={s.container}>
            <Employment />
            {data && <div className={s.vacanciesContainer}>{data.map((item: any) => <Vacancy key={item.id} data={item} />)}</div>}
            {/*<Vacancies />*/}
        </div>
    );
};

export default VacanciesLayout;