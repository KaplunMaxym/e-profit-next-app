import {CarouselMain, StatusAuthorization} from "@/modules";
import {MainPageLayout} from "@/UI";

export default function Home() {
  // return <StatusAuthorization />
  return (<>
    <MainPageLayout>
      <CarouselMain/>
    </MainPageLayout>
  </>)
}