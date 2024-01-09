import {CarouselMain, StatusAuthorization, TheHeader} from "@/modules";
import {MainPageLayout} from "@/UI";

export default function Home() {
  // return <StatusAuthorization />
  return (<>
    <TheHeader/>
    <MainPageLayout>
      <CarouselMain/>
    </MainPageLayout>
  </>)
}