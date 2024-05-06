import { useParams } from "react-router-dom";
import Layout from "../../layouts/layout";
import TableComponent from "../../components/tables/table.component";

const ArticlePage = ({ children }) => {
    let { id } = useParams();

    return (
        <Layout page="article">
            <div className="">
                <TableComponent name="Top-level articles">
                    <TableComponent.Item name="Extant Carnivoria species">
                        <TableComponent.Item to="/cats" name="Cats">
                            <TableComponent.Item to="/felinology" name="Felinology" />
                            <TableComponent.Item to="/felinology" name="Felinology" />

                        </TableComponent.Item>
                        <TableComponent.Item to="/felinology" name="Felinology" />
                    </TableComponent.Item>
                </TableComponent>
            </div>
            <div className=""><p>article</p></div>
            <div className=""><p>sonstiges</p></div>
        </Layout>
    )
}

export { ArticlePage };