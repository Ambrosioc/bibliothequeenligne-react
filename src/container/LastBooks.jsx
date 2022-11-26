import React, { useEffect } from "react";
import Card from "../components/cards/Card";
import { useFetch } from "../utils/hooks";

export default function LastBooks() {
  // const [data, setData] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);

  const { data, isLoading, error } = useFetch(
    "https://book-api-projet-fin.herokuapp.com/api/lastbooks"
  );

  return (
    <>
      <Card data={data} isLoading={isLoading} error={error} />{" "}
    </>
  );
}
