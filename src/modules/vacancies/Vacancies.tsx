import s from '@/modules/vacancies/vacancies.module.scss'
import {makeRequestService} from "@/services/makeRequestService";

interface IResponse {
    json(): unknown;
}
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
    console.log(vacancies.vacancies.data)

    return (
        <div className={s.container}>

        </div>
    );
};

export default Vacancies;