import {PageDefault} from "@/UI";
import SearchPanel from "@/modules/searchPanel/SearchPanel";
import {Vacancies} from "@/modules";

const Page = () => {
    return (
        <PageDefault>
            <SearchPanel/>
            <Vacancies />
        </PageDefault>
    );
};

export default Page;