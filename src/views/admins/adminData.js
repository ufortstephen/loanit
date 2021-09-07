import api from "@/helpers/api"
let usersData = []
const getUser = async function() {
    try {
        const res = await api.viewAdmins();
        userData.push(res);

    } catch (error) {
        console.log(error);
    }
}




export default usersData