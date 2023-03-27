import bulldog from "../images/bulldog.jpg";
import Produktkort from "../components/Produktkort";
import { useState, useEffect } from "react";

export default function Forside() {
  // "post" kommer til at indeholde listen af hundeplejeprodukter
  const [posts, setPosts] = useState([]);
  // "isPosts" kan være enten "true" (hvis der er produkter) eller
  // "false" hvis ingen produkter der er.
  const [isPosts, setIsPosts] = useState(true);

  // Data hentes fra Firebase og gemmes i "post" variabel
  useEffect(() => {
    async function getPosts() {
      const url =
        "https://fido-og-fidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
      const response = await fetch(url);
      const data = await response.json();
      if (data !== null) {
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPosts(postsArray);
      } else {
        setIsPosts(false);
      }
    }
    getPosts();
  }, []);

  return (
    <main>
      hej
      <div className="forsidebillede">
        <img
          src={bulldog}
          alt="Billede med bulldog"
          className="herobillede"
        ></img>
      </div>
      {isPosts ? (
        <div className="kortraekke">
          {posts.map((post) => (
            <Produktkort key={post.id} post={post} />
          ))}{" "}
        </div>
      ) : (
        <p>Ingen produkter at vise</p>
      )}
    </main>
  );
}

// Kommentar til linje 27 til 43
// hvis der er produkter at vise (isPosts = ture), så går programmet i løkke
// {posts.map} - hvert element (post) på listen (posts), vis produktkortet
// for hvert produkt.
