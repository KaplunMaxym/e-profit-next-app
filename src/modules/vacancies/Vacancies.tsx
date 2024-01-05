import s from '@/modules/vacancies/vacancies.module.scss'
import {makeRequestService} from "@/services/makeRequestService";
import {Vacancy} from "@/components";
import {dataFetch} from "@/modules/vacancies/data";
import Employment from "../employment/Employment";

async function getData() {
    try {
        return await makeRequestService(
            "GET",
            "/api/vacancy?page=1&limit=3",
        )
    } catch (e) {
        console.error('ERROR: Vacancies')
    }
}

const Vacancies = async () => {
    const vacancies = await getData()
    // if (vacancies.vacancies.data) return
    const data: any = vacancies.vacancies.data
    // console.log('11111111111')
    // console.log(data)
    // console.log('11111111111')

    return (
        <div className={s.container}>
            <Employment />
            <div>{data.map((item: any) => <Vacancy key={item.id} data={item} />)}</div>
        </div>
    );
};

export default Vacancies;