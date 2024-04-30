import { useParams } from "react-router-dom";
import Button from "../elements/button/button";

const UserProfilePage = () => {
    let { id } = useParams();

    return (
        <>
        User page {id}
        </>
    );
}

export default UserProfilePage;