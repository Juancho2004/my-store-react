import { useEffect, useState } from "react"
import { api, API_USER } from "../Api/Api"

export function useUserID(user) {
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        if (user) { 
            const fetchUser = async () => {
                const response = await api.get(`${API_USER}${user.id}`)
                const data = response.data
                setUserDetails(data)
                console.log(data.id)  
            }
            fetchUser();
        }
    },[user])
  return {userDetails}
}
