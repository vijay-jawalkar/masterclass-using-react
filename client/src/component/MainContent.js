import { Header, ContentNavigation } from "./index"
import { Videos } from "../pages"
export const MainContent = () => {
    return (
        <div className = "flex-1 ml-20 py-4 px-10">
           <Header/>
           <ContentNavigation/>
           <Videos/>
        </div>
    )
}