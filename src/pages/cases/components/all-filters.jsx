const treeData = [
  {
    value: "Technology",
    title: "Technology",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0"
      },
      {
        value: "parent 1-1",
        title: "parent 1-1"
      }
    ]
  },
  {
    value: "Project Type",
    title: "Project Type",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0"
      },
      {
        value: "parent 1-1",
        title: "parent 1-1"
      }
    ]
  },
  {
    value: "Services",
    title: "Services",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "my leaf"
          },
          {
            value: "leaf2",
            title: "your leaf"
          }
        ]
      }
    ]
  }
];

export const AllFilters = () => {
  return (
    <div>
      {treeData.map((tree) => {
        return (
          <div className="mx-10 my-8" key={tree.value}>
            <button className="flex justify-between font-roc text-xl text-white">
              {tree.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};
