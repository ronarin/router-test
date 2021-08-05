import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(search);
  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>{id}</p>
      <p>{query.get("name")}</p>
    </div>
  );
};
