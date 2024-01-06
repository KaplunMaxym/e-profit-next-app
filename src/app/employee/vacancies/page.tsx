import {PageDefault} from "@/UI";
import {SearchPanel} from "@/modules";
import {VacanciesLayout} from "@/modules";

const Page = () => {
    return (
        <PageDefault>
            <SearchPanel/>
            <VacanciesLayout />
        </PageDefault>
    );
};

export default Page;