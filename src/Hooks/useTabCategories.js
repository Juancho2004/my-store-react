import { useEffect, useState } from "react"
import { getCategories } from "../Services/Services";
import { API_PRODUCTS } from "../Api/Api";

export function useTabCategories() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCategories(API_PRODUCTS)
        setData(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData();
  }, []);

  const filterCategories = (category) => {
    setActiveTab(category);
  };

  const dataFilter = activeTab
    ? data.filter((dta) => dta && dta.category === activeTab)
    : null;

  return { activeTab, setActiveTab, filterCategories, dataFilter };
}
