import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext=createContext();



export default function AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

    async function fetchBlogPosts(page=1){
        setLoading(true);
        try{
            let url=`${baseUrl}?page=${page}`;
            const response = await fetch(url);
            const data = await response.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            setLoading(false);
        }
        catch(error){
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);   
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

