import CardItems from "./CardItems";

const Card = ({ results }) => {
  return (
    <div>
      <div className="flex flex-wrap -m-3 p-2 pt-24 pb-8	">
        {results.map((result) => (
          <CardItems key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Card;
