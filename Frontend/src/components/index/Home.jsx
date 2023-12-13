import FoodGroupButtons from "./FoodGroupButtons";
import Menu from "./FoodGroup";
import NewDishForm from "../NewDishForm";

function Home() {
  return (
    <>
      <div className="max-md:hidden">
        <FoodGroupButtons />
        <NewDishForm/>
      </div>
      <Menu />
    </>
  );
}

export default Home;
