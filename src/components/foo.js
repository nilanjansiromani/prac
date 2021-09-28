export const Foo = ({ ...animals }) => {
  return <div> the quick brown {animals.animals.a1} jumps over the lazy {animals.animals.a2}</div>;
};
