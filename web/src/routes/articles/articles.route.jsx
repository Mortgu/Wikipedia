import { NavLink, useParams } from "react-router-dom";
import TabsComponent from "../../components/tabs/tabs.component";

const ArticlePage = ({ children }) => {
    let { id } = useParams();

    return (
        <section>
            <div className="page-head" style={{padding: '0 0 20px 0'}}>
                <h1>JuJutsu Kaisen</h1>
            </div>
            <TabsComponent>
                <TabsComponent.Item to='.'>
                    Articles
                </TabsComponent.Item>
                <TabsComponent.Item to='./fandom'>
                    Fandom
                </TabsComponent.Item>
                <TabsComponent.Item to='./community'>
                    Community
                </TabsComponent.Item>
            </TabsComponent>
        </section>
    )
}

export { ArticlePage };