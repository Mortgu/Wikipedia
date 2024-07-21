import { useParams } from "react-router-dom";
import Layout from "../../layouts/layout";
import TableComponent from "../../components/tables/table.component";

const ArticlePage = ({ children }) => {
    let { id } = useParams();

    return (
        <Layout page="article">
            <div className="">
               
            </div>
            <div className=""><p>article</p></div>
            <div className=""><p>sonstiges</p></div>
        </Layout>
    )
}

export { ArticlePage };