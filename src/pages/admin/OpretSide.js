import { Navigate, useNavigate } from "react-router-dom";
import PostForm from '../../components/admin/PostForm';

export default function OpretSide(){
const navigate = useNavigate();


async function createPost(newPost){

    const url ="https://fido-og-fidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
    const   firstResponse = await fetch(url);
    let firstData = await firstResponse.json();

    if (firstData === null){
        firstData =[]
    }

    firstData.push(newPost);

    const response = await fetch(url, 
        {method:"PUT",
        body: JSON.stringify(firstData)
});
const data = await response.json();
console.log(data);
navigate("/admin");
}

return(
<section className="page">
    <h1>Opret nyt produkt</h1>
    <PostForm savePost={createPost}/>
    </section>
    )
    

}

