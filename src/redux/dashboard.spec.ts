import dashboardReducer, {
  DashboardState,
  setCategory,
  setCatsLoading,
  setLimit,
  setCats,
} from "./dashboard";

describe("counter reducer", () => {
  const initialState: DashboardState = {
    selectedCategory: 1,
    cats: [],
    limit: 10,
    fetchCatsLoading: false,
  };
  it("should handle initial state", () => {
    expect(dashboardReducer(undefined, { type: "unknown" })).toEqual({
      selectedCategory: 1,
      limit: 10,
      cats: [],
      fetchCatsLoading: false,
    });
  });

  it("should handle setCategory", () => {
    const actual = dashboardReducer(initialState, setCategory(1));
    expect(actual.selectedCategory).toEqual(1);
  });
  it("should handle setCatsLoading", () => {
    const actual = dashboardReducer(initialState, setCatsLoading(true));
    expect(actual.fetchCatsLoading).toEqual(true);
  });
  it("should handle setLimit", () => {
    const actual = dashboardReducer(initialState, setLimit(10));
    expect(actual.limit).toEqual(10);
  });
  it("should handle setLimit", () => {
    const actual = dashboardReducer(
      initialState,
      setCats([
        { id: 5, name: "boxes" },
        { id: 15, name: "clothes" },
        { id: 1, name: "hats" },
      ])
    );
    expect(new Set(actual.cats)).toEqual(
      new Set([
        { id: 5, name: "boxes" },
        { id: 15, name: "clothes" },
        { id: 1, name: "hats" },
      ])
    );
  });
});
